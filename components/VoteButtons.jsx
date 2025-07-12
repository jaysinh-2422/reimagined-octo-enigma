const VoteButtons = ({ voteCount, onUpvote, onDownvote }) => {
  return (
    <div className="flex flex-col items-center mr-4">
      <button 
        onClick={onUpvote}
        className="p-2 hover:text-blue-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <span className="font-semibold">{voteCount}</span>
      <button 
        onClick={onDownvote}
        className="p-2 hover:text-blue-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default VoteButtons;