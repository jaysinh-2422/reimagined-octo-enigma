import { useState, useEffect } from 'react';

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [availableTags, setAvailableTags] = useState(['javascript', 'react', 'nodejs', 'python', 'django', 'html', 'css']);

  const handleKeyDown = (e) => {
    if (['Enter', 'Tab', ','].includes(e.key)) {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const value = inputValue.trim();
    if (value && !tags.includes(value) && tags.length < 5) {
      setTags([...tags, value]);
      setInputValue('');
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (inputValue) {
      setSuggestions(
        availableTags.filter(tag => 
          tag.toLowerCase().includes(inputValue.toLowerCase()) && 
          !tags.includes(tag)
        ) // Added missing closing parenthesis here
      );
    } else {
      setSuggestions([]);
    }
  }, [inputValue, tags, availableTags]);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2 mb-2 p-2 border border-gray-300 rounded-md min-h-10">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {tag}
            <button 
              onClick={() => removeTag(index)}
              className="ml-1 text-blue-600 hover:text-blue-800"
            >
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addTag}
          className="flex-1 outline-none min-w-[100px]"
          placeholder={tags.length < 5 ? "Add a tag..." : "Max 5 tags"}
          disabled={tags.length >= 5}
        />
      </div>
      
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
          {suggestions.map((tag, index) => (
            <li 
              key={index}
              onClick={() => {
                setTags([...tags, tag]);
                setInputValue('');
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagInput;