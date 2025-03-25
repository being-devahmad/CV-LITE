import { Fragment, useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
// import Experience from "./Experience";
// import Education from "./Education";
// import Skills from "./Skills";
// import { PreviewResume } from "./PreviewResume";
// import { ContactInfo } from "./ContactInfo";
import Input from "@/components/ui/Custom Ui/Input";
import Button from "@/components/ui/Custom Ui/Button";
import Textarea from "@/components/ui/Custom Ui/Textarea";
import ArrayInput from "@/components/ui/Custom Ui/ArrayInput";
import { Delete, Trash } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ImageUpload from "@/components/ui/Custom Ui/ImageUpload";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
const types = [
  { id: "contact", title: "Contact Info" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "finish", title: "Finish" },
];

function InfoBox({ infoItem, index, setItems, onDelete, deleteLink }) {
  return (
    <div className="w-full lg:w-[45%] bg-platformGreen/10 p-[0.5vmax] rounded-[1vmax] lg:m-0 mt-[1vh] lg:space-y-0">
      <Input
        label={infoItem.title}
        setLabel={(newValue) => setItems(newValue, index, "title")}
        placeholder={"Enter Info"}
        value={infoItem.info}
        setValue={(newValue) => setItems(newValue, index, "info")}
        deleteBtn
        onDelete={onDelete}
        linkBtn
        deleteLink={() => deleteLink(index)}
        link={infoItem.link}
        setLink={(newValue) => setItems(newValue, index, "link")}
        editableLabel
      />
    </div>
  );
}

function InfoTab({ items, setItems, newItem, onDeleteItem, deleteLink }) {
  return (
    <div className="flex flex-col w-full mt-[3vh]">
      <div className="flex gap-[1vw] flex-wrap">
        {items.map((infoItem, index) => (
          <Fragment key={index}>
            <InfoBox
              infoItem={infoItem}
              index={index}
              setItems={setItems}
              onDelete={() => {
                onDeleteItem(index);
              }}
              deleteLink={deleteLink}
            />
            {/* {index === items.length - 1 && (
              <div
                onClick={newItem}
                className="bg-white w-full sm:w-[45%] h-full text-center text-gray-600 rounded-[0.5em] border border-gray-500 border-dashed cursor-pointer hover:bg-platformGreen/40 hover:border-platformGreen hover:text-white transition-all duration-200"
              >
                +
              </div>
            )} */}
          </Fragment>
        ))}
        <div
          onClick={newItem}
          className="bg-white w-full sm:w-[45%] h-full text-center text-gray-600 rounded-[0.5em] border border-gray-500 border-dashed cursor-pointer hover:bg-platformGreen/40 hover:border-platformGreen hover:text-white transition-all duration-200"
        >
          +
        </div>
      </div>
    </div>
  );
}
function Header({ value, setValue }) {
  return (
    <Input
      label={"Header"}
      placeholder={"Enter data"}
      value={value}
      setValue={setValue}
    />
  );
}
function Contact({ title, data, setData, deleteBlock, finish }) {
  const [shouldExpand, setShouldExpand] = useState(finish ? false : true);

  function onDelete(itemIndex) {
    let newData = [...data];
    newData = newData.filter((_, index) => index !== itemIndex);
    setData(newData);
  }
  return (
    <div
      className={`space-y-[2vh] relative ${
        finish && "border-t border-gray-600 border-dashed"
      } mt-[3vh]`}
    >
      <div className="flex w-full justify-between items-center">
        <motion.div
          className={`flex items-center gap-[0.5em] w-full cursor-pointer relative ${
            finish &&
            "hover:bg-gradient-to-r from-transparent via-platformGreen/40 to-transparent"
          }`}
          transition={{ duration: 0.3 }}
          onClick={() => {
            if (finish) setShouldExpand(!shouldExpand);
          }}
        >
          {finish && (
            <motion.p
              className="font-bold"
              animate={{ rotate: shouldExpand ? 135 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              +
            </motion.p>
          )}
          <p className="font-bold text-gray-800 text-[1.5em]">{title}</p>
        </motion.div>

        {deleteBlock && (
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10, color: "#dc2626" }} // Red hover effect
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer"
            onClick={deleteBlock}
          >
            <Trash className="w-[1em] h-[1em] text-red-500" />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {shouldExpand && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pb-[1em] space-y-[3vh]"
            // className="overflow-hidden"
          >
            {data.at(-1).type === "profile_pic" && (
              <div className="flex justify-center items-center">
                <ImageUpload
                  image={data.at(-1).src}
                  setImage={(src) => {
                    let newData = [...data];
                    newData.at(-1).src = src;
                    setData(newData);
                    console.log(src);
                  }}
                />
              </div>
            )}
            {data.map((item, i) => {
              return (
                <div key={i}>
                  {item.type === "name_header" ? (
                    <Input
                      label={"Full Name"}
                      placeholder={"Enter data"}
                      value={item.data}
                      setValue={(newValue) => {
                        let newData = [...data];
                        newData[i].data = newValue;
                        setData(newData);
                      }}
                    />
                  ) : item.type === "info_section" ? (
                    <InfoTab
                      items={item.data}
                      setItems={(newValue, infoIndex, prop) => {
                        let updateData = [...data];
                        updateData[i].data[infoIndex][prop] = newValue;
                        setData(updateData);
                      }}
                      deleteLink={(infoIndex) => {
                        let updateData = [...data];
                        delete updateData[i].data[infoIndex]["link"];
                        console.log(updateData);
                        setData(updateData);
                      }}
                      newItem={() => {
                        let updateData = [...data];
                        updateData[i].data.push({
                          title: "Enter Title",
                          info: "Enter Info",
                        });
                        setData(updateData);
                      }}
                      onDeleteItem={(infoIndex) => {
                        let updateData = [...data];
                        updateData[i].data = updateData[i].data.filter(
                          (_, idx) => idx !== infoIndex
                        );
                        setData(updateData);
                      }}
                    />
                  ) : item.type === "content" ? (
                    <Textarea
                      label={"Content"}
                      editableLabel={false}
                      value={item.data}
                      setValue={(newValue) => {
                        let newData = [...data];
                        newData[i].data = newValue;
                        setData(newData);
                      }}
                      onDelete={() => onDelete(i)}
                    />
                  ) : item.type === "title_header" ? (
                    <Input
                      label={"Header"}
                      editableLabel={false}
                      placeholder={"Enter text"}
                      value={item.data}
                      setValue={(newValue) => {
                        let newData = [...data];
                        newData[i].data = newValue;
                        setData(newData);
                      }}
                      sizeBtn
                      size={item.size}
                      setSize={(newValue) => {
                        let newData = [...data];
                        newData[i].size = newValue;
                        setData(newData);
                      }}
                      deleteBtn
                      onDelete={() => onDelete(i)}
                    />
                  ) : item.type === "key_elements" ? (
                    <ArrayInput
                      label={"Key Elements"}
                      sizeBtn
                      size={item?.elType}
                      setSize={(newValue) => {
                        let newData = [...data];
                        newData[i].elType = newValue;
                        setData(newData);
                      }}
                      items={item.data}
                      setItems={(newValue) => {
                        let newData = [...data];
                        newData[i].data = newValue;
                        setData(newData);
                      }}
                      onDelete={() => onDelete(i)}
                    />
                  ) : item.type === "list" ? (
                    <ArrayInput
                      label={"List"}
                      items={item.data}
                      setItems={(newValue) => {
                        let newData = [...data];
                        newData[i].data = newValue;
                        setData(newData);
                      }}
                      onDelete={() => onDelete(i)}
                    />
                  ) : item.type.includes("progress") ? (
                    <ProgressTab
                      type={item.type}
                      setType={() => {
                        let newData = [...data];
                        const type = newData[i].type;
                        newData[i].type =
                          type === "progress"
                            ? "circular_progress"
                            : "progress";
                        setData(newData);
                      }}
                      data={item.data}
                      setData={(newValue) => {
                        let newData = [...data];
                        newData[i].data = newValue;
                        setData(newData);
                      }}
                      onDelete={() => onDelete(i)}
                    />
                  ) : null}
                </div>
              );
            })}
            <NewElementButtons
              addNewElement={(newEl) => {
                let newData = [...data];
                newData = [...newData, newEl];
                setData(newData);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Block({
  title,
  data,
  setData,
  deleteBlock,
  finish,
  position,
  setPosition,
}) {
  const [shouldExpand, setShouldExpand] = useState(finish ? false : true);

  return (
    <div
      className={`space-y-[2vh] relative ${
        finish ? "border-t border-gray-600 border-dashed" : "pt-[3vh]"
      }`}
    >
      <div className="flex w-full justify-between items-center">
        <motion.div
          className={`flex items-center gap-[0.5em] w-full relative ${
            finish &&
            "hover:bg-gradient-to-r from-transparent via-platformGreen/40 to-transparent"
          }`}
          transition={{ duration: 0.3 }}
          onClick={() => {
            if (finish) setShouldExpand(!shouldExpand);
          }}
        >
          {finish && (
            <motion.p
              className="font-bold"
              animate={{ rotate: shouldExpand ? 135 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              +
            </motion.p>
          )}
          <p className="font-bold text-gray-800 text-[1.5em]">{title}</p>
        </motion.div>

        {deleteBlock && (
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10, color: "#dc2626" }} // Red hover effect
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer"
            onClick={deleteBlock}
          >
            <Trash className="w-[1em] h-[1em] text-red-500" />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {shouldExpand && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            // className="overflow-hidden"
          >
            <DataSection
              data={data}
              setData={setData}
              position={position}
              setPosition={setPosition}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
function ProgressInput({ label, setLabel, progress, setProgress }) {
  return (
    <div className="flex space-x-[0.5em] w-full relative">
      <div className="w-[70%]">
        <Input label={"Label"} value={label} setValue={setLabel} />
      </div>
      <div className="w-[30%]">
        <Input
          label={"Progress"}
          type="number"
          value={progress}
          setValue={setProgress}
        />
      </div>
    </div>
  );
}
function ProgressTab({ data, setData, type, setType, onDelete }) {
  return (
    <div className="bg-platformGreen/20 p-[0.5em] rounded-[0.5em] relative">
      <button
        onClick={onDelete}
        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-[1em] w-[1em] text-[0.7em] flex items-center justify-center hover:bg-red-600 z-10"
      >
        ×
      </button>
      <p className="text-center text-gray-600 text-[0.8em]">Progress Bars</p>
      <div className="text-center text-gray-600 text-[0.7em] pb-[0.5em]">
        Type:{" "}
        <span
          className="bg-platformGreen/50 p-[0.3em] px-[0.7em]  rounded-[0.5em] transition-all duration-200 cursor-pointer"
          onClick={setType}
        >
          {type === "progress" ? "Linear" : "Circular"}
        </span>
      </div>
      {data.map((item, index) => {
        return (
          <ProgressInput
            key={index}
            label={item.label}
            progress={item.progress}
            setLabel={(newValue) => {
              let newData = [...data];
              newData[index].label = newValue;
              setData(newData);
            }}
            setProgress={(newValue) => {
              let newData = [...data];
              newData[index].progress = newValue;
              setData(newData);
            }}
          />
        );
      })}
    </div>
  );
}

function NewElementButtons({ addNewElement, blockIndex }) {
  const [show, setShow] = useState(false);
  const allElements = [
    {
      name: "Content",
      type: "content",
      obj: {
        type: "content",
        data: "Write anything...",
      },
    },
    {
      name: "Title",
      type: "title_header",
      obj: {
        type: "title_header",
        data: `Enter Header`,
        size: "md",
      },
    },
    {
      name: "Key Elements",
      type: "key_elements",
      obj: {
        type: "key_elements",
        data: ["Something?"],
        elType: "secondary",
      },
    },
    {
      name: "List",
      type: "list",
      obj: {
        type: "list",
        data: [],
      },
    },
    {
      name: "Linear Progress Bar",
      type: "progress",
      obj: {
        type: "progress",
        data: [
          {
            label: "Title",
            progress: 50,
          },
        ],
      },
    },
    {
      name: "Circular Progress Bar",
      type: "circular_progress",
      obj: {
        type: "circular_progress",
        data: [
          {
            label: "Title",
            progress: 50,
          },
        ],
      },
    },
  ];
  return (
    <div className=" bg-platformGreen/30 rounded-[0.6em] p-[0.5em] border-2 border-white/80">
      <p
        className={`text-[0.7em] text-center text-gray-600 ${
          show && "pb-[0.5em]"
        } cursor-pointer`}
        onClick={() => {
          setShow(!show);
        }}
      >
        Add New Element
      </p>
      <AnimatePresence>
        {show && (
          <motion.div
            className="text-[0.6em] flex flex-wrap items-center justify-center gap-[1em]"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {allElements.map((element, index) => {
              return (
                <p
                  key={index}
                  className="text-gray-600 bg-white/60 rounded-[0.5em] p-[1em] border border-platformGreen border-dashed cursor-pointer hover:bg-platformGreen hover:text-white transition-all duration-200 "
                  onClick={() => {
                    addNewElement(element.obj);
                  }}
                >
                  {element.name}
                </p>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionInfo({ data, setData, onDelete }) {
  console.log("data", data);
  return (
    <div className="flex flex-col pb-[1em] sm:pb-0 sm:flex-row gap-[0.5em] relative">
      <button
        onClick={onDelete}
        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-[1em] w-[1em] text-[0.7em] flex items-center justify-center hover:bg-red-600 z-10"
      >
        ×
      </button>
      <Input
        label={"Info Left"}
        editableLabel={false}
        placeholder={"Enter text"}
        value={data[0]}
        setValue={(newValue) => setData(newValue, 0)}
      />
      <Input
        label={"Info Right"}
        editableLabel={false}
        placeholder={"Enter text"}
        value={data[1]}
        setValue={(newValue) => setData(newValue, 1)}
      />
    </div>
  );
}

function DataSection({ data, setData, position, setPosition }) {
  function onDelete(blockIndex, itemIndex) {
    let newData = {
      ...data,
      content: [...data.content],
    };
    newData.content[blockIndex] = newData.content[blockIndex].filter(
      (_, index) => index !== itemIndex
    );
    newData.content = newData.content.filter((block) => block.length > 0);
    setData(newData);
  }

  return (
    <div className="space-y-[2vh] pb-[4vh]">
      {setPosition && (
        <div
          className="text-[0.7em] flex items-end justify-end "
          onClick={() => {
            position === "left" ? setPosition("right") : setPosition("left");
          }}
        >
          <p className="bg-platformGreen/40 border border-platformGreen border-dashed hover:text-white rounded-[0.5em] px-[0.5em] py-[0.2em] text-gray-600 cursor-pointer hover:bg-platformGreen transition-all duration-200">
            Position: {position}
          </p>
        </div>
      )}

      <Input
        label={"Block Title"}
        editableLabel={false}
        placeholder={"Enter Title"}
        value={data.header}
        setValue={(newValue) => {
          let newData = { ...data };
          newData.header = newValue;
          setData(newData);
        }}
      />
      {data.content.length > 0 &&
        data.content.map((block, index) => {
          return (
            <div
              key={index}
              className="bg-platformGreen/10 p-[0.5em] rounded-[0.5em] border border-platformGreen/40 space-y-[1em]"
            >
              <p className="text-[0.8em] text-center pb-[0.5em] text-gray-500">
                Section {index + 1}
              </p>
              {block.length > 0 &&
                block.map((item, itemIndex) => {
                  return item.type === "content" ? (
                    <Textarea
                      key={index}
                      label={"Content"}
                      editableLabel={false}
                      value={item.data}
                      setValue={(newValue) => {
                        let newData = { ...data };
                        newData.content[index][itemIndex].data = newValue;
                        setData(newData);
                      }}
                      onDelete={() => onDelete(index, itemIndex)}
                      position={item?.position || "none"}
                      setPosition={(newValue) => {
                        let newData = { ...data };
                        newData.content[index][itemIndex].position = newValue;
                        setData(newData);
                      }}
                    />
                  ) : item.type === "section_info" ? (
                    <div
                      key={index}
                      className="bg-platformGreen/20 p-[0.5em] rounded-[0.5em] relative"
                    >
                      <button
                        onClick={() => onDelete(index, itemIndex)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-[1em] w-[1em] text-[0.7em] flex items-center justify-center hover:bg-red-600 z-10"
                      >
                        ×
                      </button>
                      <p className="text-[0.8em] text-gray-600 text-center pb-[1em]">
                        Section Info
                      </p>
                      {item.data.map((el, indx) => (
                        <SectionInfo
                          key={indx}
                          data={el}
                          setData={(newValue, i) => {
                            let newData = { ...data };
                            newData.content[index][itemIndex].data[indx][i] =
                              newValue;
                            setData(newData);
                          }}
                          onDelete={() => {
                            let newData = {
                              ...data,
                              content: [...data.content],
                            };
                            newData.content[index][itemIndex].data =
                              newData.content[index][itemIndex].data.filter(
                                (_, i) => i !== indx
                              );

                            setData(newData);
                          }}
                        />
                      ))}
                      <div
                        onClick={() => {
                          let newData = {
                            ...data,
                            content: [...data.content],
                          };
                          newData.content[index][itemIndex].data = [
                            ...newData.content[index][itemIndex].data,
                            ["Somthing", "Anything"],
                          ];
                          setData(newData);
                        }}
                        className="flex bg-white/35 items-center justify-center p-[0.5em] text-gray-600 text-[0.7em] rounded-[0.5em] transition-all duration-200 cursor-pointer border border-platformGreen border-dashed hover:bg-platformGreen/40"
                      >
                        Add Another
                      </div>
                    </div>
                  ) : item.type === "title_header" ? (
                    <Input
                      key={index}
                      label={"Header"}
                      editableLabel={false}
                      placeholder={"Enter text"}
                      value={item.data}
                      setValue={(newValue) => {
                        let newData = { ...data };
                        newData.content[index][itemIndex].data = newValue;
                        setData(newData);
                      }}
                      sizeBtn
                      size={item.size}
                      setSize={(newValue) => {
                        let newData = { ...data };
                        newData.content[index][itemIndex].size = newValue;
                        setData(newData);
                      }}
                      deleteBtn
                      onDelete={() => onDelete(index, itemIndex)}
                    />
                  ) : item.type === "key_elements" ? (
                    <ArrayInput
                      key={index}
                      label={"Key Elements"}
                      sizeBtn
                      size={item?.elType}
                      setSize={(newValue) => {
                        let newData = { ...data };
                        newData.content[index][itemIndex].elType = newValue;
                        setData(newData);
                      }}
                      items={item.data}
                      setItems={(newValue) => {
                        let newData = { ...data };
                        newData.content[index][itemIndex].data = newValue;
                        setData(newData);
                      }}
                      onDelete={() => onDelete(index, itemIndex)}
                    />
                  ) : item.type === "list" ? (
                    <ArrayInput
                      key={index}
                      label={"List"}
                      items={item.data}
                      setItems={(newValue) => {
                        let newData = { ...data };
                        newData.content[index][itemIndex].data = newValue;
                        setData(newData);
                      }}
                      mode={item.mode || "list"}
                      setMode={(newValue) => {
                        let newData = { ...data };
                        newData.content[index][itemIndex].mode = newValue;
                        setData(newData);
                      }}
                      onDelete={() => onDelete(index, itemIndex)}
                    />
                  ) : item.type.includes("progress") ? (
                    <ProgressTab
                      type={item.type}
                      setType={() => {
                        let newData = { ...data };
                        const type = newData.content[index][itemIndex].type;
                        newData.content[index][itemIndex].type =
                          type === "progress"
                            ? "circular_progress"
                            : "progress";
                        setData(newData);
                      }}
                      data={item.data}
                      setData={(newValue) => {
                        let newData = { ...data };
                        newData.content[index][itemIndex].data = newValue;
                        setData(newData);
                      }}
                      onDelete={() => onDelete(index, itemIndex)}
                    />
                  ) : null;
                })}
              <NewElementButtons
                addNewElement={(newEl) => {
                  let newData = { ...data };
                  newData.content[index] = [...newData.content[index], newEl];
                  setData(newData);
                }}
              />
            </div>
          );
        })}
      <div
        className="bg-platformPurple/30 w-full py-[1em] text-[0.7em] text-center text-gray-600 rounded-[1em] border border-platformPurple border-dashed cursor-pointer hover:bg-platformPurple/50 hover:border-platformPurple hover:text-white transition-all duration-200"
        onClick={() => {
          let newData = { ...data };
          newData.content = [...newData.content, []];
          setData(newData);
        }}
      >
        Add Another Section
      </div>
    </div>
  );
}

export const ResumeForm = ({
  allData,
  setAllData,
  categoryData,
  resumeID = "",
  type,
}) => {
  const [currentTabId, setCurrentTabId] = useState(0);
  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    setTabs([...Object.keys(allData), "Finish"]);
  }, []);

  const renderTab = (tabKey, finish = false) => {
    const Titles = {
      Contact: (
        <>
          Please enter your <span className="text-platformGreen">contact</span>{" "}
          info
        </>
      ),
      About: (
        <>
          Tell us <span className="text-platformGreen">about</span> yourself
        </>
      ),
      Experience: (
        <>
          Write down your{" "}
          <span className="text-platformGreen">experiences</span>
        </>
      ),
      Education: (
        <>
          What are your <span className="text-platformGreen">educations</span>
        </>
      ),
      Skills: (
        <>
          Write down your <span className="text-platformGreen">skills</span>
        </>
      ),
      Languages: (
        <>
          What <span className="text-platformGreen">languages</span> do you
          speak
        </>
      ),
      Strengths: (
        <>
          Write down your <span className="text-platformGreen">strengths</span>
        </>
      ),
    };

    // Handle drag-and-drop sorting
    const onDragEnd = (result) => {
      if (!result.destination) return;

      const items = Object.keys(allData);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      const newData = {};
      items.forEach((key) => {
        newData[key] = { ...allData[key] };
      });

      setAllData(newData);
    };

    // **Render Contact Component Separately**
    if (tabKey === "Contact") {
      return (
        <Contact
          key={tabKey}
          title={finish ? tabKey : Titles[tabKey] || tabKey}
          finish={finish}
          data={allData[tabKey].data}
          setData={(newData) => {
            setAllData((prevData) => ({
              ...prevData,
              [tabKey]: { ...prevData[tabKey], data: newData },
            }));
          }}
        />
      );
    }

    if (finish) {
      return (
        <DragDropContext onDragEnd={onDragEnd} key={tabKey}>
          <Droppable droppableId="tabs">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {Object.keys(allData).map((key, index) =>
                  key === "Contact" ? (
                    <div key={key}>
                      <Contact
                        key={key}
                        title={key.replaceAll("_", " ")}
                        finish={finish}
                        data={allData[key].data}
                        setData={(newData) => {
                          setAllData((prevData) => ({
                            ...prevData,
                            [key]: { ...prevData[key], data: newData },
                          }));
                        }}
                      />
                    </div>
                  ) : (
                    <Draggable key={key} draggableId={key} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Block
                            key={key}
                            title={key.replaceAll("_", " ")}
                            finish={finish}
                            data={allData[key].data}
                            deleteBlock={() => {
                              const newTabs = tabs.filter((tab) => key !== tab);
                              if (newTabs.length < tabs.length) {
                                setCurrentTabId((prevData) =>
                                  Math.max(prevData - 1, 0)
                                );
                                setTabs(newTabs);
                              }
                              setAllData((prevData) => {
                                let newData = { ...prevData };
                                delete newData[key];
                                return newData;
                              });
                            }}
                            setData={(newData) => {
                              setAllData((prevData) => ({
                                ...prevData,
                                [key]: { ...prevData[key], data: newData },
                              }));
                            }}
                            position={allData[key]?.position}
                            setPosition={
                              allData[key]?.position
                                ? (newValue) => {
                                    setAllData((prevData) => ({
                                      ...prevData,
                                      [key]: {
                                        ...prevData[key],
                                        position: newValue,
                                      },
                                    }));
                                  }
                                : undefined
                            }
                          />
                        </div>
                      )}
                    </Draggable>
                  )
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      );
    }

    // **Render Non-Finish State**
    return (
      <>
        {allData[tabKey]?.data ? (
          <Block
            key={tabKey}
            title={Titles[tabKey]}
            finish={finish}
            data={allData[tabKey].data}
            setData={(newData) => {
              setAllData((prevData) => ({
                ...prevData,
                [tabKey]: { ...prevData[tabKey], data: newData },
              }));
            }}
            position={allData[tabKey]?.position}
            setPosition={
              allData[tabKey]?.position
                ? (newValue) => {
                    setAllData((prevData) => ({
                      ...prevData,
                      [tabKey]: { ...prevData[tabKey], position: newValue },
                    }));
                  }
                : undefined
            }
          />
        ) : null}
      </>
    );
  };

  return (
    <div className="text-[7vw] md:text-[4.5vw] lg:text-[1.5vw]  mx-[2vw]">
      <div className="hidden sm:block">
        <div className="text-[7vw] md:text-[4.5vw] lg:text-[1vw] flex gap-[1em] flex-wrap">
          {tabs.map((tab, index) => {
            return (
              <div
                key={index}
                className={`${
                  currentTabId === index
                    ? "bg-platformGreen/30 text-gray-800"
                    : "text-gray-500"
                } text-center  px-[1em] rounded-[0.5em] cursor-pointer transition-all duration-200`}
                onClick={() => setCurrentTabId(index)}
              >
                {tab}
              </div>
            );
          })}
        </div>
      </div>
      <div className="block sm:hidden">
        <div
          className={`bg-platformGreen/30 text-gray-800 text-center  px-[1em] rounded-[0.5em] cursor-pointer transition-all duration-200`}
        >
          {tabs[currentTabId]}
        </div>
      </div>
      {renderTab(
        Object.keys(allData)[currentTabId],
        currentTabId === tabs.length - 1
      )}
      <div className=" space-y-[3vh] pt-[3vh]">
        {currentTabId === tabs.length - 1 && (
          <div
            className="bg-white w-full py-[1em] text-[0.7em] text-center text-gray-600 rounded-[1em] border border-gray-500 border-dashed cursor-pointer hover:bg-platformGreen/40 hover:border-platformGreen hover:text-white transition-all duration-200"
            onClick={() => {
              setAllData((prevData) => {
                const newDataSection = {
                  type: "data_section",
                  data: {
                    header: "Enter Header",
                    content: [],
                  },
                };
                if (type && type === "leftRight") {
                  newDataSection["position"] = "left";
                }
                let newData = { ...prevData };

                const newBloacks = Object.keys(newData).filter((key) =>
                  key.startsWith("New_Block_")
                );

                newData[`New_Block_${newBloacks.length + 1}`] = newDataSection;
                return newData;
              });
            }}
          >
            Add Another Block
          </div>
        )}
        <div
          className="text-[1.5em] sm:text-[2em] pb-[1em]"
          onClick={() => setCurrentTabId(currentTabId + 1)}
        >
          <Button
            text={currentTabId === tabs.length - 1 ? "Finish" : "Next"}
            icon={currentTabId !== tabs.length - 1}
            full
          />
        </div>
      </div>
    </div>
  );
};
