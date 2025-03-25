import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const ArrayInput = ({
  label,
  items,
  setItems,
  sizeBtn = false,
  size,
  setSize,
  onDelete,
  mode,
  setMode,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    if (editingIndex !== null) {
      let updatedItems = [...items];
      updatedItems[editingIndex] = inputValue;
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      setItems([...items, inputValue]);
    }
    setInputValue("");
  };

  const handleEdit = (index) => {
    setInputValue(items[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setInputValue("");
      setEditingIndex(null);
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = [...items];
    const [movedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, movedItem);
    setItems(newItems);
  };

  return (
    <div className="space-y-3 mb-[1em] bg-platformGreen/20 p-[0.5em] rounded-[0.5em] relative">
      <button
        onClick={onDelete}
        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-[1em] w-[1em] text-[0.7em] flex items-center justify-center hover:bg-red-600 z-10"
      >
        ×
      </button>
      <div className="absolute pl-[1em] flex items-center justify-center -translate-y-1/2">
        <div className="relative flex items-center justify-center">
          <p
            className={`capitalize text-[0.5em] font-semibold text-gray-500 bg-teal-100 rounded-full border border-gray-300 text-center px-[2em] z-100`}
          >
            {label}
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="w-full">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={"Enter data and press enter"}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            className={`p-3 text-[0.7em] w-full rounded-[0.5em] ${
              sizeBtn && "rounded-br-none"
            } border border-gray-300 bg-white text-gray-700 outline-none  focus:border-platformGreen`}
          />
          {sizeBtn && (
            <div
              className=" pl-[1em] flex justify-end"
              onClick={() => {
                size && size === "secondary"
                  ? setSize("primary")
                  : setSize("secondary");
              }}
            >
              <div className="relative flex items-center justify-center cursor-pointer">
                <p
                  className={`text-[0.5em] font-semibold text-gray-500 bg-blue-100 rounded-b-[0.5em] border border-blue-300 border-t-0 text-center px-[2em] z-100`}
                >
                  size:{size && size === "secondary" ? "sm" : "md"}
                </p>
              </div>
            </div>
          )}
          {mode && (
            <div
              className=" pl-[1em] flex justify-end"
              onClick={() => {
                mode === "list" ? setMode("grid") : setMode("list");
              }}
            >
              <div className="relative flex items-center justify-center cursor-pointer">
                <p
                  className={`text-[0.5em] font-semibold text-gray-500 bg-blue-100 rounded-b-[0.5em] border border-blue-300 border-t-0 text-center px-[2em] z-100`}
                >
                  mode:{mode}
                </p>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={handleAdd}
          className="bg-platformGreen text-white px-[0.5em] py-1 rounded-[0.5em] text-[0.7em] hover:bg-teal-600 transition-all duration-200"
        >
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {items.map((item, index) => (
                <Draggable
                  key={index}
                  draggableId={index.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex justify-between items-center p-[0.3em] text-[0.7em] text-gray-700 border border-platformGreen/40 rounded-[0.5em] cursor-grab bg-white/70"
                    >
                      <span className="flex-1 truncate overflow-hidden whitespace-nowrap">
                        {item}
                      </span>
                      <div className="space-x-2">
                        <button
                          onClick={() => handleEdit(index)}
                          className="text-blue-400 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-400 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ArrayInput;
