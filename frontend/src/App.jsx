import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">CampusOne</div>
        <div className="nav-label">Student Portal</div>
      </nav>

      <main className="hero">
        <section className="login-card">
          <h1 className="hero-title">Welcome to CampusOne</h1>

          <p className="hero-text">
            Your Campus. One Platform.
          </p>

          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input
              id="studentId"
              type="text"
              placeholder="Enter your student ID"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button className="login-button">
            Sign In
          </button>
        </section>
      </main>
    </div>
  )
}

export default App