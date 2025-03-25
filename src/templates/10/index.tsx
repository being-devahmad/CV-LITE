import List from "../Resume Componenets/List";
import placeholder_img from "@/assets/images/placeholder_img.jpeg";

function NameHeader({ p }: any) {
  return (
    <div className="border-b-2 border-black w-full">
      <h1 className="text-4xl font-bold px-4 py-2">{p}</h1>
    </div>
  );
}
function InfoElement({ title, info }: any) {
  return (
    <p className={"text-gray-600 text-[12px]"}>
      <span className="mr-2 text-black font-bold">{title}:</span>
      {info}
    </p>
  );
}
function InfoLink({ title, info, link }: any) {
  return (
    <div className={"flex flex-row text-[12px]"}>
      <p className={"text-black font-bold  mr-2"}>{title}: </p>
      <a className={"text-gray-600 underline"} href={link}>
        {info}
      </a>
    </div>
  );
}

function SectionHeader({ title }: any) {
  return (
    <div className="flex border-b-2 border-gray-500 items-center">
      <p className="w-[5%] text-[20px]">+</p>
      <p className={"text-base font-bold"}>{title}</p>
    </div>
  );
}
function Content({ data }: any) {
  return <p className={"text-justify text-gray-700 text-[12px]"}>{data}</p>;
}

function TitleHeader({ data, size }: any) {
  const pSize =
    size === "md" ? "text-base" : size === "sm" ? "text-sm " : "text-2xl";

  return <p className={`${pSize} font-bold leading-none`}>{data}</p>;
}
const ProgressBar = ({
  label,
  progress,
}: {
  label: string;
  progress: number;
}) => {
  return (
    <div className="flex items-center w-full space-x-4 justify-between ">
      {/* Title */}
      <p className="text-gray-700 font-medium text-[12px]">{label}</p>

      {/* Progress Bar Container */}
      <div className="w-[50%]">
        <div className="relative flex-1 h-[2px] bg-black">
          {/* Progress Bar */}
          <div
            className="absolute h-[6px] bg-black -translate-y-1/2"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function ProgressSection({ data }: any) {
  return (
    <div className={"flex flex-col gap-2 w-full"}>
      {data.map((item: any, index: number) => (
        <ProgressBar key={index} label={item.label} progress={item.progress} />
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
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center relative">
        <svg width={100} height={100} className="transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="black" // Light gray background
            strokeWidth={strokeWidth / 3}
          />
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="black" // Progress color (greenish shade)
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        {/* Percentage Text */}
        <div className="absolute flex flex-col items-center justify-center w-full h-full">
          <p className="text-xl font-bold">{progress}%</p>
        </div>
      </div>
      <p className="text-[12px] text-gray-500 leading-none">{label}</p>
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

const KeyElement = ({ data, type }: any) => {
  return (
    <p
      className={`${
        type == "secondary"
          ? "text-[12px] text-gray-700"
          : "text-lg text-wrap border-2 border-black px-[0.5em] py-[0.2em]"
      }`}
    >
      {data}
    </p>
  );
};

const KeyElementsSection = ({ data, type }: any) => {
  return (
    <div className={"flex flex-row flex-wrap gap-3"}>
      {data.map((item: any, index: number) => (
        <KeyElement key={index} data={item} type={type} />
      ))}
    </div>
  );
};

function Section({ data, bg = "#3b82f6" }: any) {
  return (
    <div className={"flex flex-col w-full p-[10px] py-0 relative"}>
      <SectionHeader title={data.header} bg={bg} />

      <div className={"w-full py-2 pl-[5%]"}>
        {data.content.length > 0 &&
          data.content.map((blocks: any, index: number) => {
            return (
              <div className={"mb-2 relative"} key={index}>
                {blocks.length > 0 &&
                  blocks.map((item: any, index: number) => {
                    if (item.type === "title_header") {
                      return (
                        <TitleHeader
                          key={index}
                          data={item.data}
                          size={item.size}
                        />
                      );
                    } else if (item.type === "content") {
                      return <Content key={index} data={item.data} />;
                    } else if (item.type === "list") {
                      return (
                        <List
                          key={index}
                          data={item.data}
                          className="leading-none text-[12px]"
                        />
                      );
                    } else if (item.type === "progress") {
                      return <ProgressSection key={index} data={item.data} />;
                    } else if (item.type === "circular_progress") {
                      return (
                        <CircularProgressSection key={index} data={item.data} />
                      );
                    } else if (item.type === "key_elements") {
                      return (
                        <KeyElementsSection
                          key={index}
                          data={item.data}
                          type={item.elType}
                        />
                      );
                    }
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default function Template10({ data }: any) {
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
      className={"font-sairasemi bg-white p-8 w-full flex flex-col "}
      style={{
        width: "794px",
        minHeight: "1123px",
      }}
    >
      <div>
        <div className="flex w-full pb-6">
          <div className="w-[50%] flex flex-col gap-2">
            {data["Contact"].data[0].data
              .split(" ")
              .map((word: string, i: number) => (
                <NameHeader key={i} p={word} />
              ))}
          </div>
          <div className="w-[50%] flex items-start justify-end relative">
            <div className="absolute w-28 h-28 border border-black translate-x-[10%] -translate-y-[10%]" />
            <img
              src={
                data["Contact"].data.at(-1)?.src
                  ? data["Contact"].data.at(-1).src.preview
                  : placeholder_img
              }
              className="w-28 h-28 object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full relative">
          <div className="flex flex-col w-[50%] relative">
            <div className="px-[10px] pb-4">
              <SectionHeader title={"Pesonal Details"} />
              <div className="flex flex-col px-[5%]">
                {data["Contact"].data[1].data.map((item: any, idx: number) =>
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
            {leftSectionData.map((key, index) => {
              return <Section key={index} data={data[key].data} />;
            })}
          </div>
          <div className="flex flex-col w-[50%] relative">
            {rightSectionData.map((key, index) => {
              return (
                <Section key={index} data={data[key].data} bg={"#96A5B4"} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
