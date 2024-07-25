import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

function Form({ getData }) {
  const input = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    getData(input.current.value);
  };

  return (
    <div className="flex justify-center ">
      <form onSubmit={handleSubmit} className="w-full max-w">
        <div className="flex items-center rounded-full shadow-md p-3">
        
          <input
            type="text"
            placeholder="Search GitHub username..."
            className="flex-grow px-4 py-2 font bg-transparent outline-none"
            ref={input}
          />
          <button type="submit" className="btn btn-primary ml-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
