import { useParams } from 'react-router-dom';

function FreelancerProfile() {
  const { id } = useParams();

  // Mock freelancer data
  const freelancer = {
    id,
    name: "Sarah Johnson",
    title: "Full Stack Developer",
    location: "San Francisco, CA",
    rate: "$85/hour",
    skills: ["React", "Node.js", "Python", "AWS", "MongoDB"],
    bio: "Experienced full stack developer with 8+ years of experience building scalable web applications...",
    experience: [
      {
        id: 1,
        role: "Senior Developer",
        company: "Tech Solutions Inc",
        period: "2020 - Present",
        description: "Led development of multiple high-traffic web applications..."
      },
      {
        id: 2,
        role: "Full Stack Developer",
        company: "Digital Innovations",
        period: "2018 - 2020",
        description: "Developed and maintained client projects..."
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{freelancer.name}</h1>
            <p className="text-xl text-gray-600 mb-2">{freelancer.title}</p>
            <p className="text-gray-500">{freelancer.location} • {freelancer.rate}</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
            Hire Me
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {freelancer.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="text-gray-600">{freelancer.bio}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
          <div className="space-y-4">
            {freelancer.experience.map((exp) => (
              <div key={exp.id} className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.period}</p>
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreelancerProfile;