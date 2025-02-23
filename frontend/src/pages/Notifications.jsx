function Notifications() {
    const notifications = [
      {
        id: 1,
        type: "application",
        title: "Application Accepted",
        message: "Your application for Senior React Developer at Tech Corp has been accepted!",
        date: "2 hours ago",
        read: false,
      },
      {
        id: 2,
        type: "payment",
        title: "Payment Received",
        message: "You received a payment of $2,500 for the E-commerce Platform project",
        date: "1 day ago",
        read: true,
      },
      {
        id: 3,
        type: "message",
        title: "New Message",
        message: "You have a new message from Design Studio regarding your application",
        date: "2 days ago",
        read: true,
      },
    ];
  
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <button className="text-indigo-600 hover:text-indigo-700">
              Mark all as read
            </button>
          </div>
  
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg ${
                  notification.read ? 'bg-white' : 'bg-indigo-50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  {notification.type === 'application' && (
                    <div className="p-2 bg-green-100 rounded-full">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                  {notification.type === 'payment' && (
                    <div className="p-2 bg-blue-100 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                  {notification.type === 'message' && (
                    <div className="p-2 bg-yellow-100 rounded-full">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        <p className="text-gray-600">{notification.message}</p>
                      </div>
                      <span className="text-sm text-gray-500">{notification.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Notifications;