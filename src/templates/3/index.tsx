import { Fragment } from "react/jsx-runtime";
import placeholder_img from "@/assets/images/placeholder_img.jpeg";
import List from "../Resume Componenets/List";

function NameHeader({ p }: any) {
  return <h1 className="text-blue-700 text-2xl font-bold">{p}</h1>;
}
function InfoElement({ title, info }: any) {
  return (
    <p className={"text-black text-sm"}>
      <strong className="mr-2">{title}:</strong>
      {info}
    </p>
  );
}
function InfoLink({ title, info, link }: any) {
  return (
    <div className={"flex flex-row text-sm"}>
      <p className={"text-black font-bold  mr-2"}>{title}: </p>
      <a className={"text-blue-500 underline"} href={link}>
        {info}
      </a>
    </div>
  );
}

function SectionHeader({ title }: any) {
  return (
    <div className="relative pb-2">
      <p className={"text-xl font-bold"}>{title}</p>
    </div>
  );
}
function Content({ data, className = "text-gray-700" }: any) {
  return <p className={`text-justify text-[14px] ${className}`}>{data}</p>;
}

function TitleHeader({ data, size }: any) {
  const pSize =
    size === "md" ? "text-base" : size === "sm" ? "text-sm" : "text-2xl";

  return <p className={`${pSize} font-bold leading-none`}>{data}</p>;
}

const ProgressBar = ({
  label,
  progress,
}: {
  label: string;
  progress: number; // Progress in a range of 0 to 100
}) => {
  // Define the total number of dots (e.g., 5 dots for a 100% scale)
  const totalDots = 5;
  const activeDots = Math.round((progress / 100) * totalDots); // Calculate how many dots should be active

  return (
    <div className="flex flex-row items-center">
      {/* Label */}
      <p className="text-gray-700 font-medium pr-[12px]">{label}</p>

      {/* Dots */}
      <div className="flex gap-[6px]">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={`w-[10px] h-[10px] rounded-full ${
              index < activeDots ? "bg-blue-700" : "bg-blue-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

function ProgressSection({ data }: any) {
  return (
    <div className={"flex gap-x-8 flex-wrap w-full"}>
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
            stroke="#3b82f6" // Progress color (greenish shade)
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

const KeyElement = ({ data, type }: any) => {
  return (
    <p
      className={`${
        type == "secondary"
          ? "text-sm text-blue-700"
          : "text-lg text-wrap bg-blue-700 text-white px-4 py-1 rounded-full"
      } inline-block`}
    >
      {data}
    </p>
  );
};

const KeyElementsSection = ({ data, type }: any) => {
  return (
    <div
      className={`${
        type === "secondary"
          ? "w-[30%] max-w-[30%] flex flex-col"
          : "flex flex-wrap gap-x-4 gap-y-1"
      }`}
    >
      {data.map((item: any, index: number) => (
        <KeyElement key={index} data={item} type={type} />
      ))}
    </div>
  );
};

function Section({ data }: any) {
  return (
    <div className={"flex flex-col w-full px-[10px] relative"}>
      <SectionHeader title={data.header} />

      {data.content.length > 0 &&
        data.content.map((blocks: any, index: number) => {
          if (blocks.length < 1) return;
          const firstEl = blocks[0].type === "key_elements" ? blocks[0] : null;
          let block = [...blocks];
          if (firstEl) {
            block = block.splice(1);
          }
          return (
            <div className={`flex relative w-full gap-4 pb-4`} key={index}>
              {firstEl && (
                <KeyElementsSection data={firstEl.data} type={firstEl.elType} />
              )}
              <div>
                {block.map((item: any, index: number) => {
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
                      <List key={index} data={item.data} mode={item.mode} />
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
            </div>
          );
        })}
    </div>
  );
}

export default function Template3({ data }: any) {
  return (
    <div
      className={"font-sairasemi bg-white p-12 w-full flex flex-col "}
      style={{
        width: "794px",
        minHeight: "1123px",
      }}
    >
      <div className="flex items-center pb-10">
        <img
          src={
            data["Contact"].data.at(-1)?.src
              ? data["Contact"].data.at(-1).src.preview
              : placeholder_img
          }
          className="w-28 h-28 mr-4 rounded-full object-cover aspect-square"
          alt="profile pic"
        />
        <div>
          {data["Contact"].data.map((dataItem: any, index: number) => (
            <Fragment key={index}>
              {dataItem.type === "name_header" ? (
                <NameHeader key={index} p={dataItem.data} />
              ) : dataItem.type === "content" ? (
                <Content
                  data={dataItem.data}
                  className={"text-[16px] text-blue-700 italic"}
                />
              ) : dataItem.type === "info_section" ? (
                <div
                  key={index}
                  className="flex flex-row gap-x-2 flex-wrap mb-2 text-[12px]"
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
      </div>
      {Object.keys(data).map((key) => {
        return key === "Contact" ? null : (
          <Section key={key} data={data[key].data} />
        );
      })}
    </div>
  );
}
