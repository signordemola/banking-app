import {PrismaAdapter} from '@auth/prisma-adapter'
import { compare } from 'bcryptjs'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '../../../lib/prisma'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'jwt',
    },
    providers : [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password'  },
            },
            async authorize(credentials) {
                if (!credentials?.email ||!credentials?.password) {
                    throw new Error('Email and password are required')
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })

                if (!user) {
                    throw new Error('User not found')
                }

                const isValid = await compare(credentials?.password, user.password)

                if (!isValid) {
                    throw new Error('Invalid password')
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: `${user?.fullName}`
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                }
            }
            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id
                }
            }
        }
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST  }