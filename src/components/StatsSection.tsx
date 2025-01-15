import React from "react";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        <div className="stat-card">
          <h4>2M+</h4>
          <p>Active Users</p>
        </div>
        <div className="stat-card">
          <h4>$50B+</h4>
          <p>Assets Managed</p>
        </div>
        <div className="stat-card">
          <h4>99.99%</h4>
          <p>Uptime</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
