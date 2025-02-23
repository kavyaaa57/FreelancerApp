function Payment() {
    const paymentMethods = [
      {
        id: 1,
        type: "Credit Card",
        last4: "4242",
        expiry: "12/25",
        default: true,
      },
      {
        id: 2,
        type: "PayPal",
        email: "john.doe@example.com",
        default: false,
      },
    ];
  
    const transactions = [
      {
        id: 1,
        description: "Project Payment - E-commerce Platform",
        amount: 2500,
        date: "2024-02-01",
        status: "Completed",
      },
      {
        id: 2,
        description: "Project Payment - Mobile App Development",
        amount: 3800,
        date: "2024-01-15",
        status: "Pending",
      },
    ];
  
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Payment Methods</h1>
          
          <div className="space-y-4 mb-8">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  {method.type === "Credit Card" ? (
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">{method.type}</p>
                    <p className="text-sm text-gray-500">
                      {method.type === "Credit Card" 
                        ? `**** ${method.last4} • Expires ${method.expiry}`
                        : method.email
                      }
                    </p>
                  </div>
                </div>
                {method.default && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Default
                  </span>
                )}
              </div>
            ))}
          </div>
  
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
            Add Payment Method
          </button>
        </div>
  
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Transaction History</h2>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <p className="font-semibold text-gray-900">{transaction.description}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">${transaction.amount}</p>
                  <p className={`text-sm ${
                    transaction.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Payment;