function AttendanceCard() {
  const subjects = [
    { name: 'Mathematics', percentage: 92 },
    { name: 'Physics', percentage: 84 },
    { name: 'Computer Science', percentage: 91 },
    { name: 'Engineering Drawing', percentage: 78 },
  ]

  return (
    <section className="attendance-card">
      <div className="card-header">
        <div>
          <p className="card-label">Attendance</p>
          <h2>Overall Attendance</h2>
        </div>

        <span className="attendance-status">Good</span>
      </div>

      <div className="attendance-percentage">
        87%
      </div>

      <p className="attendance-message">
        Your attendance is above the minimum requirement.
      </p>

      <div className="subject-attendance">
        <h3>Subject Attendance</h3>

        {subjects.map((subject) => (
          <div className="subject-row" key={subject.name}>
            <div className="subject-info">
              <span>{subject.name}</span>
              <span>{subject.percentage}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${subject.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AttendanceCard