function JobListings() {
    const jobs = [
      {
        id: 1,
        title: "Senior React Developer",
        company: "Tech Corp",
        location: "Remote",
        salary: "$80-100k/year",
        type: "Full-time",
      },
      {
        id: 2,
        title: "UI/UX Designer",
        company: "Design Studio",
        location: "New York",
        salary: "$70-90k/year",
        type: "Contract",
      },
      // Add more sample jobs as needed
    ];
  
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Jobs</h1>
        
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {job.title}
                  </h2>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                    <span>{job.salary}</span>
                  </div>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default JobListings;