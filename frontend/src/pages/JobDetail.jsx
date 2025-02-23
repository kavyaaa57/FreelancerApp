import { useParams } from 'react-router-dom';

function JobDetail() {
  const { id } = useParams();

  // Mock job data
  const job = {
    id,
    title: "Senior React Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$80-100k/year",
    type: "Full-time",
    description: "We are looking for an experienced React developer to join our team...",
    requirements: [
      "5+ years of experience with React",
      "Strong understanding of state management",
      "Experience with modern JavaScript",
      "Team player with excellent communication skills"
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
        
        <div className="flex gap-4 text-gray-600 mb-6">
          <span>{job.company}</span>
          <span>•</span>
          <span>{job.location}</span>
          <span>•</span>
          <span>{job.type}</span>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-600">{job.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600">
            {job.requirements.map((req, index) => (
              <li key={index} className="mb-2">{req}</li>
            ))}
          </ul>
        </div>

        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
          Apply for this position
        </button>
      </div>
    </div>
  );
}

export default JobDetail;