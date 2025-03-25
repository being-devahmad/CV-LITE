import List from "../Resume Componenets/List";

function NameHeader({ p }: any) {
  return (
    <h1 className="uppercase text-teal-100 text-2xl font-[400] break-words mb-6">
      {p}
    </h1>
  );
}
function InfoElement({ title, info }: any) {
  return (
    <p className={"flex items-center text-black text-[12px]"}>
      <p className="mr-2  leading-none">{title}:</p>
      <span className="text-[12px] text-gray-600">{info}</span>
    </p>
  );
}
function InfoLink({ title, info, link }: any) {
  return (
    <div className={"flex flex-row items-center"}>
      <p className={"text-black text-[12px] mr-2"}>{title}: </p>
      <a className={"text-[12px] text-gray-600"} href={link}>
        {info}
      </a>
    </div>
  );
}

function SectionHeader({
  title,
  className = "text-black border-b-2 border-gray-300 mb-2",
}: any) {
  return (
    <div className="relative">
      <p className={`uppercase text-lg border-b ${className}`}>{title}</p>
    </div>
  );
}
function Content({ data, className = "text-gray-600" }: any) {
  return (
    <p className={`text-justify text-[12px]  leading-tight ${className}`}>
      {data}
    </p>
  );
}

function TitleHeader({ data, size, className }: any) {
  const pSize =
    size === "md" ? "text-base" : size === "sm" ? "text-sm" : "text-2xl";

  return <p className={` ${pSize}  leading-none ${className}`}>{data}</p>;
}

const ProgressBar = ({
  label,
  progress,
  width,
}: {
  label: string;
  progress: number; // Progress in a range of 0 to 100
  width: string; // Progress in a range of 0 to 100
}) => {
  // Define the total number of dots (e.g., 5 dots for a 100% scale)
  const totalDots = 5;
  const activeDots = Math.round((progress / 100) * totalDots); // Calculate how many dots should be active

  return (
    <div className={`flex flex-row items-center ${width}`}>
      {/* Label */}
      <p
        className={`${
          width.includes("full") ? "text-teal-100" : "text-gray-700"
        } font-medium pr-[12px]`}
      >
        {label}
      </p>

      {/* Dots */}
      <div className="flex gap-[6px]">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] rounded-full ${
              index < activeDots
                ? width.includes("full")
                  ? "bg-teal-100"
                  : "bg-teal-700"
                : width.includes("full")
                ? "bg-black/30"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

function ProgressSection({ data, width = "small" }: any) {
  return (
    <div
      className={`flex ${
        width === "full" ? "flex-col" : "flex-wrap flex-row"
      }  w-full gap-y-2 `}
    >
      {data.map((item: any, index: number) => (
        <ProgressBar
          key={index}
          label={item.label}
          progress={item.progress}
          width={
            width === "full"
              ? "w-full"
              : `w-[50%] ${index % 2 === 0 ? "pr-4" : "pl-4"}`
          }
        />
      ))}
    </div>
  );
}

const CircularProgressBar = ({
  label,
  progress,
}: {
  label: string;
  progress: number;
}) => {
  const radius = 36; // Radius of the circle
  const strokeWidth = 6; // Thickness of the progress stroke
  const circumference = 2 * Math.PI * radius; // Total circumference
  const offset = circumference - (progress / 100) * circumference; // Offset for progress

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center relative">
        <svg width={100} height={100} className="transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#4e4e4e" // Light gray background
            strokeWidth={strokeWidth / 3}
          />
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#343537" // Progress color (greenish shade)
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round" // Rounded ends for progress
          />
        </svg>
        {/* Percentage Text */}
        <div className="absolute flex flex-col items-center justify-center w-full h-full">
          <p className="text-xl font-bold">{progress}%</p>
        </div>
      </div>
      <p className="text-base text-black leading-none">{label}</p>
    </div>
  );
};

const CircularProgressSection = ({ data }: any) => {
  return (
    <div className={"flex flex-wrap gap-8 w-full"}>
      {data.map((item: any, index: number) => (
        <CircularProgressBar
          key={index}
          progress={item.progress}
          label={item.label}
        />
      ))}
    </div>
  );
};

const KeyElement = ({ data, type, last, className }: any) => {
  return (
    <p
      className={`${
        type == "secondary" ? "text-sm text-teal-500" : "text-base text-wrap"
      } inline-block ${className}`}
    >
      {data}
      {!last && (
        <span className={`text-gray-600 ${className}`}>
          {type !== "secondary" && " ●"}
        </span>
      )}
    </p>
  );
};

const KeyElementsSection = ({ data, type, className }: any) => {
  return (
    <div className={`flex flex-wrap gap-y-1`}>
      {data.map((item: any, index: number) => (
        <div
          className={`${
            index !== data.length - 1 &&
            type == "secondary" &&
            `border-r ${className ? "border-white/80" : "border-teal-500"} pr-2`
          } ${index !== 0 && "pl-2"}`}
          key={index}
        >
          <KeyElement
            data={item}
            type={type}
            last={index === data.length - 1}
            className={className}
          />
        </div>
      ))}
    </div>
  );
};
const SectionInfo = ({ data }: any) => {
  return (
    <div className={`flex flex-col gap-y-1`}>
      {data.map((item: any, index: number) => (
        <div
          className={`flex justify-between items-center relative w-full`}
          key={index}
        >
          <div className="max-w-[70%]">
            <p
              className={`text-base ${
                index !== 0 && "text-teal-500"
              } leading-none break-words`}
            >
              {item[0]}
            </p>
          </div>
          <div className="max-w-[30%]">
            <p className={`text-sm break-words`}>{item[1]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

function Section({ data, position }: any) {
  return (
    <div className={"flex flex-col w-full px-[10px] relative mb-2"}>
      <SectionHeader
        title={data.header}
        className={
          position === "left"
            ? "text-base text-white/80 border-white/50 mb-2"
            : undefined
        }
      />

      {data.content.length > 0 &&
        data.content.map((blocks: any, index: number) => {
          if (blocks.length < 1) return;

          return (
            <div
              className={`flex flex-col relative w-full gap-1 pb-4`}
              key={index}
            >
              {blocks.map((item: any, index: number) =>
                item.type === "title_header" ? (
                  <TitleHeader
                    key={index}
                    data={item.data}
                    size={item.size}
                    className={
                      position === "left" ? "text-white/80" : undefined
                    }
                  />
                ) : item.type === "section_info" ? (
                  <SectionInfo key={index} data={item.data} />
                ) : item.type === "content" ? (
                  <Content
                    key={index}
                    data={item.data}
                    className={
                      position === "left" ? "text-white/80" : undefined
                    }
                  />
                ) : item.type === "list" ? (
                  <List
                    key={index}
                    data={item.data}
                    mode={item.mode}
                    className={`${
                      position === "left" ? "text-white/80" : "text-gray-600 "
                    }  text-[12px] leading-tight`}
                  />
                ) : item.type === "progress" ? (
                  <ProgressSection
                    key={index}
                    data={item.data}
                    width={position === "left" ? "full" : undefined}
                  />
                ) : item.type === "circular_progress" ? (
                  <CircularProgressSection key={index} data={item.data} />
                ) : item.type === "key_elements" ? (
                  <KeyElementsSection
                    key={index}
                    data={item.data}
                    type={item.elType}
                    className={
                      position === "left" ? "text-white/80" : undefined
                    }
                  />
                ) : null
              )}
            </div>
          );
        })}
    </div>
  );
}

export default function Template7({ data }: any) {
  const name = data["Contact"].data.find(
    (item: any) => item.type === "name_header"
  );
  const infoSection = data["Contact"].data.find(
    (item: any) => item.type === "info_section"
  );
  const keyEls = data["Contact"].data.find(
    (item: any) => item.type === "key_elements"
  );
  const leftSectionData = Object.keys(data).filter((key) => {
    if (data[key]?.position === "left") {
      return true;
    }
  });
  const rightSectionData = Object.keys(data).filter((key) => {
    if (data[key]?.position === "right") {
      return true;
    }
  });
  return (
    <div
      className={"font-sairasemi bg-white w-full flex flex-col "}
      style={{
        width: "794px",
        minHeight: "1123px",
      }}
    >
      <div className="w-full h-full flex relative">
        <div className="w-[30%] min-h-[1123px] flex flex-col p-6 bg-[#006766]">
          {name && <NameHeader p={name.data} />}
          {leftSectionData.map((key, index) => {
            return (
              <Section key={index} data={data[key].data} position={"left"} />
            );
          })}
        </div>
        <div className="w-[70%] h-full flex flex-col ">
          <div className="flex flex-col p-8 pb-2">
            {keyEls && (
              <KeyElementsSection data={keyEls.data} type={keyEls.elType} />
            )}
            <div className="flex flex-row gap-x-2 flex-wrap text-[12px]">
              {infoSection &&
                infoSection.data.map((item: any, idx: number) =>
                  item.link ? (
                    <InfoLink
                      key={idx}
                      title={item.title}
                      info={item.info}
                      link={item.link}
                    />
                  ) : (
                    <InfoElement
                      key={idx}
                      title={item.title}
                      info={item.info}
                    />
                  )
                )}
            </div>
          </div>
          <div className="p-6">
            {rightSectionData.map((key, index) => {
              return <Section key={index} data={data[key].data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
