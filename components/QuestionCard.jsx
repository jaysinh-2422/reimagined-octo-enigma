import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

const QuestionCard = ({ question }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start">
        <div className="flex flex-col items-center mr-4 text-center">
          <span className="text-lg font-semibold">{question.votes}</span>
          <span className="text-sm text-gray-500">votes</span>
        </div>
        <div className="flex flex-col items-center mr-4 text-center">
          <span className="text-lg font-semibold">{question.answers?.length || 0}</span>
          <span className="text-sm text-gray-500">answers</span>
        </div>
        <div className="flex-1">
          <Link to={`/questions/${question._id}`} className="block">
            <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-2">
              {question.title}
            </h3>
          </Link>
          <p className="text-gray-600 line-clamp-2 mb-3">
            {question.description.replace(/<[^>]*>/g, '').substring(0, 200)}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {question.tags.map(tag => (
                <span 
                  key={tag} 
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              asked {formatDistanceToNow(new Date(question.createdAt), { addSuffix: true })} by{' '}
              <span className="font-medium">{question.author.username}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;