import { Fragment } from "react/jsx-runtime";
import List from "../Resume Componenets/List";

function NameHeader({ p }: any) {
  return <h1 className="text-black text-5xl font-bold ">{p}</h1>;
}
function InfoElement({ title, info }: any) {
  return (
    <div className={"text-black text-sm flex flex-wrap"}>
      <p className="mr-2 font-bold plutoSans-font">{title}:</p>
      <p>{info}</p>
    </div>
  );
}
function InfoLink({ title, info, link }: any) {
  return (
    <div className={"flex flex-col text-sm flex-wrap"}>
      <p className={"text-black font-bold  mr-2"}>{title}: </p>
      <a className={"text-black underline"} href={link}>
        {info}
      </a>
    </div>
  );
}

function SectionHeader({ title }: any) {
  return (
    <div className="relative pb-4">
      <p className={"uppercase text-2xl text-black font-semibold"}>{title}</p>
    </div>
  );
}
function Content({ data, className = "text-gray-600" }: any) {
  return (
    <p className={`text-justify text-[12px] ${className} leading-tight`}>
      {data}
    </p>
  );
}

function TitleHeader({ data, size }: any) {
  const pSize =
    size === "md" ? "text-base" : size === "sm" ? "text-sm" : "text-2xl";

  return <p className={`uppercase ${pSize} font-bold leading-none`}>{data}</p>;
}

const ProgressBar = ({
  label,
  progress,
  width,
}: {
  label: string;
  progress: number;
  width: string;
}) => {
  return (
    <div className={`flex flex-col ${width}`}>
      {/* Title */}
      <p className="text-gray-600 text-sm font-medium">{label}</p>

      {/* Progress Bar Container */}
      <div className="w-full ">
        <div className="relative flex-1 h-[6px] bg-gray-400">
          {/* Progress Bar */}
          <div
            className="absolute h-full bg-black"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function ProgressSection({ data, width = "small" }: any) {
  return (
    <div className={`flex flex-wrap w-full gap-y-2 `}>
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
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center relative">
        <svg width={100} height={100} className="transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="gray"
            strokeWidth={strokeWidth - 1}
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
          ? "text-sm text-gray-700"
          : "text-base text-wrap border border-gray-500 text-black px-4 py-1 rounded-xl"
      } inline-block`}
    >
      {data}
    </p>
  );
};

const KeyElementsSection = ({ data, type }: any) => {
  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-1`}>
      {data.map((item: any, index: number) => (
        <KeyElement key={index} data={item} type={type} />
      ))}
    </div>
  );
};

function Section({ data }: any) {
  return (
    <div
      className={
        "flex flex-col w-full px-[10px] relative border-b mb-6 border-black plutoSans-font"
      }
    >
      <SectionHeader title={data.header} />

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
                  <TitleHeader key={index} data={item.data} size={item.size} />
                ) : item.type === "content" ? (
                  <Content key={index} data={item.data} />
                ) : item.type === "list" ? (
                  <List
                    key={index}
                    data={item.data}
                    mode={item.mode}
                    className="text-[12px] leading-tight"
                  />
                ) : item.type === "progress" ? (
                  <ProgressSection key={index} data={item.data} />
                ) : item.type === "circular_progress" ? (
                  <CircularProgressSection key={index} data={item.data} />
                ) : item.type === "key_elements" ? (
                  <KeyElementsSection
                    key={index}
                    data={item.data}
                    type={item.elType}
                  />
                ) : null
              )}
            </div>
          );
        })}
    </div>
  );
}

export default function Template5({ data }: any) {
  const contactData = data["Contact"].data.find(
    (item: any) => item.type === "info_section"
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
      className={"bg-white py-12 px-6 w-full h-full flex flex-col "}
      style={{
        width: "794px",
        minHeight: "1123px",
      }}
    >
      <div className="flex flex-col pb-8 bg-white">
        {data["Contact"].data.map((dataItem: any, index: number) => (
          <Fragment key={index}>
            {dataItem.type === "name_header" ? (
              <NameHeader key={index} p={dataItem.data} />
            ) : dataItem.type === "content" ? (
              <p
                className={`text-base text-gray-600 tracking-widest uppercase leading-tight`}
              >
                {dataItem.data}
              </p>
            ) : null}
          </Fragment>
        ))}
      </div>
      <div className="w-full h-full flex border-t border-black">
        <div className="w-[30%] flex flex-col border-r border-black p-6 pl-0">
          {contactData && (
            <div className="mb-6 px-[10px]">
              <SectionHeader title="Contacts" />
              <div className="flex flex-col gap-y-1">
                {contactData.data.map((item: any, idx: number) =>
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
          )}

          {leftSectionData.map((key, index) => {
            return <Section key={index} data={data[key].data} />;
          })}
        </div>
        <div className="w-[70%] flex flex-col p-6 pr-0">
          {rightSectionData.map((key, index) => {
            return <Section key={index} data={data[key].data} />;
          })}
        </div>
      </div>
    </div>
  );
}
