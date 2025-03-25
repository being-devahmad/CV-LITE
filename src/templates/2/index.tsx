import { Fragment } from "react/jsx-runtime";
import placeholder_img from "@/assets/images/placeholder_img.jpeg";
import List from "../Resume Componenets/List";

function NameHeader({ p }: any) {
  return <h1 className="brokman-font text-4xl font-bold mb-4">{p}</h1>;
}
function InfoElement({ title, info }: any) {
  return (
    <p className={"brokman-font text-black text-sm"}>
      <strong className="brokman-font mr-2">{title}:</strong>
      {info}
    </p>
  );
}
function InfoLink({ title, info, link }: any) {
  return (
    <div className={"brokman-font flex flex-row text-sm"}>
      <p className={"brokman-font text-black font-bold  mr-2"}>{title}: </p>
      <a className={"brokman-font text-blue-500 underline"} href={link}>
        {info}
      </a>
    </div>
  );
}

function SectionHeader({ title, bg = "#3b82f6" }: any) {
  return (
    <div className="brokman-font relative">
      <div
        className="brokman-font  rounded-[0.5em] p-[0.2em] px-[0.5em] text-white"
        style={{
          backgroundColor: bg,
        }}
      >
        <p className={"brokman-font text-xl font-bold"}>{title}</p>
      </div>
      <svg
        className="brokman-font absolute -bottom-[12px] left-[2%]"
        width="16"
        height="12"
        viewBox="0 0 16 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 16,0 0,12" fill={bg} />
      </svg>{" "}
    </div>
  );
}
function Content({ data }: any) {
  return (
    <p className={"brokman-font text-justify text-gray-700 text-[12px]"}>
      {data}
    </p>
  );
}

function TitleHeader({ data, size }: any) {
  const pSize =
    size === "md" ? "text-xl" : size === "sm" ? "text-base" : "text-2xl";

  return (
    <p className={`brokman-font ${pSize} font-bold leading-none`}>{data}</p>
  );
}
const ProgressBar = ({
  label,
  progress,
}: {
  label: string;
  progress: number;
}) => {
  return (
    <div className="brokman-font flex items-center w-full space-x-4 justify-between ">
      {/* Title */}
      <p className="brokman-font text-gray-700 font-medium">{label}</p>

      {/* Progress Bar Container */}
      <div className="brokman-font w-[50%]">
        <div className="brokman-font relative flex-1 h-[4px] bg-gray-400 rounded-full">
          {/* Progress Bar */}
          <div
            className="brokman-font absolute h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>

          {/* Indicator Dot */}
          <div
            className="brokman-font absolute bg-black rounded-full border border-white"
            style={{
              left: `${progress}%`,
              transform: "translate(-50%, -50%)",
              width: "12px",
              height: "12px",
              top: "50%", // Centers the dot properly
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function ProgressSection({ data }: any) {
  return (
    <div className={"brokman-font flex flex-col gap-2 w-full"}>
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
    <div className="brokman-font flex flex-col">
      <div className="brokman-font flex flex-col items-center relative">
        <svg
          width={100}
          height={100}
          className="brokman-font transform -rotate-90"
        >
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
            stroke="#3b82f6" // Progress color (greenish shade)
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round" // Rounded ends for progress
          />
        </svg>
        {/* Percentage Text */}
        <div className="brokman-font absolute flex flex-col items-center justify-center w-full h-full">
          <p className="brokman-font text-xl font-bold">{progress}%</p>
        </div>
      </div>
      <p className="brokman-font text-base text-gray-500 leading-none">
        {label}
      </p>
    </div>
  );
};

const CircularProgressSection = ({ data }: any) => {
  return (
    <div className={"brokman-font flex flex-wrap gap-8 w-full"}>
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
      className={`brokman-font ${
        type == "secondary"
          ? "text-[12px] text-gray-700"
          : "text-lg text-wrap bg-blue-200 p-[0.5em] rounded-[0.5em]"
      }`}
    >
      {data}
    </p>
  );
};

const KeyElementsSection = ({ data, type }: any) => {
  return (
    <div className={"brokman-font flex flex-row flex-wrap gap-3"}>
      {data.map((item: any, index: number) => (
        <KeyElement key={index} data={item} type={type} />
      ))}
    </div>
  );
};

function Section({ data, bg = "#3b82f6" }: any) {
  return (
    <div className={"brokman-font flex flex-col w-full p-[10px] py-0 relative"}>
      <div className={"brokman-font pl-[1%] pr-[5%] py-2"}>
        <SectionHeader title={data.header} bg={bg} />
      </div>

      <div className={"brokman-font w-full py-2 pl-[5%]"}>
        {data.content.length > 0 &&
          data.content.map((blocks: any, index: number) => {
            return (
              <div className={"brokman-font mb-2 relative"} key={index}>
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
                      return <List key={index} data={item.data} />;
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

export default function Template2({ data }: any) {
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
      className={
        "brokman-font font-sairasemi bg-white p-8 w-full flex flex-col "
      }
      style={{
        width: "794px",
        minHeight: "1123px",
      }}
    >
      <div>
        <div className="brokman-font flex justify-between items-center">
          <div>
            {data["Contact"].data.map((dataItem: any, index: number) => (
              <Fragment key={index}>
                {dataItem.type === "name_header" ? (
                  <NameHeader key={index} p={dataItem.data} />
                ) : dataItem.type === "info_section" ? (
                  <div
                    key={index}
                    className="brokman-font flex flex-col flex-wrap mb-2 text-[12px]"
                  >
                    {dataItem.data.map((item: any, idx: number) =>
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
                ) : null}
              </Fragment>
            ))}
          </div>

          {data["Contact"].data.at(-1).type === "profile_pic" && (
            <img
              src={
                data["Contact"].data.at(-1)?.src
                  ? data["Contact"].data.at(-1).src.preview
                  : placeholder_img
              }
              className="brokman-font w-28 h-28 rounded-xl object-cover"
              alt=""
            />
          )}
        </div>
        <div className="brokman-font flex flex-wrap w-full relative">
          <div className="brokman-font flex flex-col w-[50%] relative">
            {leftSectionData.map((key, index) => {
              return <Section key={index} data={data[key].data} />;
            })}
          </div>
          <div className="brokman-font flex flex-col w-[50%] relative">
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
