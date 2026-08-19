function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        CampusOne
      </div>

      <nav className="sidebar-nav">
        <button className="nav-item active">
          <span>🏠</span>
          <span>Dashboard</span>
        </button>

        <button className="nav-item">
          <span>📊</span>
          <span>Attendance</span>
        </button>

        <button className="nav-item">
          <span>🔔</span>
          <span>Notifications</span>
        </button>

        <button className="nav-item">
          <span>👤</span>
          <span>Profile</span>
        </button>
      </nav>

      <button className="nav-item logout">
        <span>🚪</span>
        <span>Logout</span>
      </button>
    </aside>
  )
}

export default Sidebar