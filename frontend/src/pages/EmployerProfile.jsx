import { useParams } from 'react-router-dom';

function EmployerProfile() {
  const { id } = useParams();

  // Mock employer data
  const employer = {
    id,
    name: "Tech Innovations Inc",
    industry: "Software Development",
    location: "New York, NY",
    size: "50-200 employees",
    description: "Leading software development company specializing in enterprise solutions...",
    openPositions: [
      {
        id: 1,
        title: "Senior React Developer",
        type: "Full-time",
        location: "Remote",
        posted: "2 days ago"
      },
      {
        id: 2,
        title: "UX Designer",
        type: "Contract",
        location: "New York",
        posted: "1 week ago"
      }
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        rating: 5,
        comment: "Great company to work with! Clear communication and timely payments."
      },
      {
        id: 2,
        author: "Jane Smith",
        rating: 4,
        comment: "Professional team and interesting projects."
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{employer.name}</h1>
          <div className="flex gap-4 text-gray-600">
            <span>{employer.industry}</span>
            <span>•</span>
            <span>{employer.location}</span>
            <span>•</span>
            <span>{employer.size}</span>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">About Company</h2>
          <p className="text-gray-600">{employer.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Open Positions</h2>
          <div className="space-y-4">
            {employer.openPositions.map((position) => (
              <div key={position.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{position.title}</h3>
                    <div className="flex gap-4 text-gray-600 text-sm">
                      <span>{position.type}</span>
                      <span>{position.location}</span>
                      <span>{position.posted}</span>
                    </div>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Freelancer Reviews</h2>
          <div className="space-y-4">
            {employer.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-gray-900">{review.author}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerProfile;