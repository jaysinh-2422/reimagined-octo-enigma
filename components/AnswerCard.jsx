import { useState } from 'react';
import VoteButtons from './VoteButtons';

const AnswerCard = ({ answer, onVote, onAccept, isQuestionAuthor }) => {
  const [isAccepted, setIsAccepted] = useState(answer.isAccepted);

  const handleAccept = () => {
    setIsAccepted(true);
    onAccept(answer._id);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 mb-4 ${isAccepted ? 'border-2 border-green-500' : ''}`}>
      <div className="flex items-start">
        <VoteButtons 
          voteCount={answer.votes} 
          onUpvote={() => onVote('answer', answer._id, 1)}
          onDownvote={() => onVote('answer', answer._id, -1)}
        />
        <div className="flex-1">
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: answer.content }}
          />
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-500">
              answered by <span className="font-medium">{answer.author.username}</span>
            </div>
            {isQuestionAuthor && !isAccepted && (
              <button
                onClick={handleAccept}
                className="px-3 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200"
              >
                Accept Answer
              </button>
            )}
            {isAccepted && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded">
                Accepted
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;