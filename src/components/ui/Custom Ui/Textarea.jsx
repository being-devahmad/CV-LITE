import React, { useState } from "react";

const Textarea = ({
  label,
  setLabel,
  value,
  setValue,
  onDelete,
  placeholder,
  type = "text",
  editableLabel = false,
  position,
  setPosition,
}) => {
  const [showLink, setShowLink] = useState(true);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="relative w-full">
      <div className="flex flex-col relative mb-[0.5em]">
        <div className="absolute -translate-y-1/2 pl-[1em] flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <input
              className={`capitalize text-[0.5em] font-semibold text-gray-500 bg-teal-100 rounded-full border border-gray-300 text-center outline-none p-0 z-100 inline-block w-fit max-w-full`}
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              disabled={!editableLabel}
            />
          </div>
        </div>

        <button
          onClick={onDelete}
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-[1em] w-[1em] text-[0.7em] flex items-center justify-center hover:bg-red-600 z-10"
        >
          ×
        </button>
        <textarea
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="p-3 m-0 text-[0.7em] min-h-[10vh] w-full rounded-[0.5em] border border-gray-300 text-gray-700 outline-none  focus:border-platformGreen"
        />
        {setPosition && (
          <div className="flex items-end justify-end">
            <p
              onClick={() =>
                setPosition(position === "none" ? "right" : "none")
              }
              className={`inline-flex cursor-pointer w-fit text-[0.5em] px-[1em] font-semibold text-gray-500 bg-blue-100 rounded-[0.5em] border border-blue-300 text-center p-0 z-100 rounded-t-none`}
            >
              position: {position}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Textarea;
