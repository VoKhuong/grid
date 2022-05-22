import { useState } from "react";

export default function GridForm({ value, setValue }) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    if (parseInt(e.target.value) > 0) {
      setValue(parseInt(e.target.value));
    }
    setInputValue(e.target.value);
  };

  return (
    <form
      className="my-2 flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="text-base text-white flex flex-col w-4/5 md:w-64">
        Number of squares:
        <input
          className="text-base text-black my-2 py-1 px-2 rounded-sm focus:outline-none"
          type="number"
          min="1"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
