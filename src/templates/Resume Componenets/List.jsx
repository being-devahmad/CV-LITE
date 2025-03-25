function List({ data, mode = "list", className = "text-sm" }) {
  if (mode === "list") {
    return (
      <ul className={`ml-4 text-gray-700 space-y-1 list-disc ${className}`}>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  } else {
    return (
      <div className="w-full flex flex-wrap">
        {data.map((item, index) => (
          <p
            key={index}
            className={`w-[50%]  pb-4 pr-6 text-justify leading-tight ${className}`}
          >
            {item}
          </p>
        ))}
      </div>
    );
  }
}

export default List;
