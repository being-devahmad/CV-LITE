import React, { useState } from "react";

const Input = ({
  label,
  setLabel,
  value,
  setValue,
  deleteBtn = false,
  onDelete,
  placeholder,
  addLink,
  linkBtn = false,
  deleteLink,
  link,
  setLink,
  size,
  setSize,
  sizeBtn = false,
  type = "text",
  editableLabel = false,
}) => {
  const [showLink, setShowLink] = useState(true);
  const handleChange = (e) => {
    if (type === "number") {
      if (+e.target.value >= 0 && +e.target.value <= 100) {
        setValue(e.target.value);
      }
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <div className={`relative w-full ${linkBtn || (sizeBtn && "mb-[1em]")}`}>
      <div className="relative mb-[0.5em]">
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
        {linkBtn && (
          <label
            onClick={() => {
              link ? setShowLink(!showLink) : setLink("Enter Link");
            }}
            className="absolute cursor-pointer capitalize text-[0.4em] font-semibold text-gray-500 bg-blue-100 rounded-b-full border border-blue-300 text-center px-[1em] bottom-0 translate-y-[100%] right-[1em] z-100 inline-block w-fit max-w-full"
          >
            {link ? (showLink ? "⌄" : "^") : "Add Link"}
          </label>
        )}
        {sizeBtn && (
          <label
            onClick={() => {
              size === "sm" ? setSize("md") : setSize("sm");
            }}
            className="absolute cursor-pointer text-[0.5em] font-semibold text-gray-500 bg-blue-100 rounded-full border border-blue-300 text-center px-[1em] bottom-0 translate-y-1/2  right-[1em] z-100 inline-block w-fit max-w-full"
          >
            size:{size}
          </label>
        )}
        {deleteBtn && (
          <button
            onClick={onDelete}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-[1em] w-[1em] text-[0.7em] flex items-center justify-center hover:bg-red-600 z-10"
          >
            ×
          </button>
        )}
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="p-3 text-[0.7em] w-full rounded-[0.5em] border border-gray-300 bg-white text-gray-700 outline-none  focus:border-platformGreen transition-all duration-200"
        />
      </div>

      {link && linkBtn && showLink && (
        <div className="relative mt-[1vh]">
          <label className="absolute capitalize text-[0.3em] font-semibold text-gray-500 bg-blue-100 rounded-full border border-blue-300 text-center px-[1em] ml-[1em] z-100 inline-block w-fit max-w-full">
            Link
          </label>
          <button
            onClick={deleteLink}
            className="absolute top-1/2 -right-[0.5em] bg-red-500 text-white rounded-full h-[1em] w-[1em] text-[0.5em] flex items-center justify-center hover:bg-red-600 z-10"
          >
            ×
          </button>
          <input
            type={type}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder={"www.optimcv.com"}
            className="mt-2 p-[0.4em] text-[0.6em] w-full rounded-[0.5em] border border-blue-300 bg-white text-blue-500 outline-none focus:border-blue-500 transition-all duration-200"
          />
        </div>
      )}
    </div>
  );
};

export default Input;
