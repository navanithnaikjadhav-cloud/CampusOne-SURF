import './App.css'
import Navbar from './components/Navbar'
import AttendanceCard from './components/AttendanceCard'
import NotificationCard from './components/NotificationCard'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="hero">
        <section className="dashboard">
          <div className="dashboard-heading">
            <p className="card-label">Student Dashboard</p>

            <h1>Welcome to CampusOne</h1>

            <p>
              Here's your current campus overview.
            </p>
          </div>

          <div className="dashboard-grid">
            <AttendanceCard />
            <NotificationCard />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App