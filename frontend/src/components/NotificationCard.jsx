function NotificationCard() {
  const notifications = [
    {
      title: 'Important College Notice',
      message: 'Students are requested to check the latest college instructions.',
      type: 'important',
      date: 'Today',
    },
    {
      title: 'Mid-Term Examination',
      message: 'The mid-term examination schedule has been published.',
      type: 'exam',
      date: 'Yesterday',
    },
    {
      title: 'College Event',
      message: 'Annual technical event registration is now open.',
      type: 'event',
      date: '2 days ago',
    },
  ]

  return (
    <section className="notification-card">
      <div className="card-header">
        <div>
          <p className="card-label">Updates</p>
          <h2>Notifications</h2>
        </div>

        <span className="notification-count">
          {notifications.length}
        </span>
      </div>

      <div className="notification-list">
        {notifications.map((notification) => (
          <div
            className={`notification-item ${notification.type}`}
            key={notification.title}
          >
            <div className="notification-icon">
              {notification.type === 'important' && '⚠️'}
              {notification.type === 'exam' && '📝'}
              {notification.type === 'event' && '📅'}
            </div>

            <div className="notification-content">
              <div className="notification-title-row">
                <h3>{notification.title}</h3>
                <span>{notification.date}</span>
              </div>

              <p>{notification.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NotificationCard