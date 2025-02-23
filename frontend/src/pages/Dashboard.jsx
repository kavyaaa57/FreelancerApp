function Dashboard() {
    const applications = [
      {
        id: 1,
        job: "Senior React Developer",
        company: "Tech Corp",
        status: "Under Review",
        appliedDate: "2024-02-15",
      },
      {
        id: 2,
        job: "UI/UX Designer",
        company: "Design Studio",
        status: "Accepted",
        appliedDate: "2024-02-10",
      },
    ];
  
    const earnings = [
      {
        id: 1,
        project: "E-commerce Platform",
        amount: 2500,
        date: "2024-02-01",
        status: "Paid",
      },
      {
        id: 2,
        project: "Mobile App Development",
        amount: 3800,
        date: "2024-01-15",
        status: "Pending",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">My Applications</h2>
            <div className="bg-white rounded-lg shadow-sm">
              {applications.map((app) => (
                <div key={app.id} className="p-4 border-b last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{app.job}</h3>
                      <p className="text-gray-600">{app.company}</p>
                      <p className="text-sm text-gray-500">Applied: {app.appliedDate}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      app.status === 'Accepted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Earnings</h2>
            <div className="bg-white rounded-lg shadow-sm">
              {earnings.map((earning) => (
                <div key={earning.id} className="p-4 border-b last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{earning.project}</h3>
                      <p className="text-gray-600">${earning.amount}</p>
                      <p className="text-sm text-gray-500">{earning.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      earning.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {earning.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;