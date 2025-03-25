import List from "../Resume Componenets/List";
import placeholder_img from "@/assets/images/placeholder_img.jpeg";

function NameHeader({ p }: any) {
  return (
    <h1 className="timesTen-font text-[#E3D5C8] text-5xl font-bold tracking-wide ">
      {p}
    </h1>
  );
}
function InfoElement({ title, info }: any) {
  return (
    <p className={"timesTen-font text-black text-[12px]"}>
      <p className="timesTen-font mr-2 uppercase leading-none">{title}</p>
      <span className="timesTen-font text-[12px] text-gray-600">{info}</span>
    </p>
  );
}
function InfoLink({ title, info, link }: any) {
  return (
    <div className={"timesTen-font flex flex-col flex-wrap"}>
      <p className={"timesTen-font text-black text-[12px] uppercase mr-2"}>
        {title}
      </p>
      <a className={"timesTen-font text-[12px] text-gray-600"} href={link}>
        {info}
      </a>
    </div>
  );
}

function SectionHeader({
  title,
  className = "border-b-2 border-gray-300 mb-4  text-xl",
}: any) {
  return (
    <div className="timesTen-font relative">
      <p
        className={`timesTen-font uppercase text-black tracking-widest ${className}`}
      >
        {title}
      </p>
    </div>
  );
}
function Content({ data, className = "text-gray-600" }: any) {
  return (
    <p
      className={`timesTen-font text-justify text-[12px]  leading-tight ${className}`}
    >
      {data}
    </p>
  );
}

function TitleHeader({ data, size }: any) {
  const pSize =
    size === "md" ? "text-base" : size === "sm" ? "text-sm" : "text-2xl";

  return <p className={`timesTen-font  ${pSize}  leading-none`}>{data}</p>;
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
    <div className={`timesTen-font flex flex-col ${width}`}>
      {/* Title */}
      <p className="timesTen-font text-black text-sm font-medium">{label}</p>

      {/* Progress Bar Container */}
      <div className="timesTen-font w-full ">
        <div className="timesTen-font relative flex-1 h-[6px] bg-gray-400">
          {/* Progress Bar */}
          <div
            className="timesTen-font absolute h-full bg-[#343537]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function ProgressSection({ data, width = "small" }: any) {
  return (
    <div className={`timesTen-font flex flex-wrap w-full gap-y-2 `}>
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
  size = 100, // Default size, customizable
}: {
  label: string;
  progress: number;
  size?: number; // Allow dynamic sizing
}) => {
  const radius = size / 2.5; // Adjust radius relative to size
  const strokeWidth = size / 16; // Scale stroke thickness
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="timesTen-font flex flex-col items-center">
      <div className="timesTen-font flex flex-col items-center relative">
        <svg
          width={size}
          height={size}
          className="timesTen-font transform -rotate-90"
        >
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#4e4e4e"
            strokeWidth={strokeWidth - 2}
          />
          {/* Progress Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#343537"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        {/* Percentage Text */}
        <div className="timesTen-font absolute flex flex-col items-center justify-center w-full h-full">
          <p
            className={`timesTen-font ${
              size === 100 ? "text-xl" : "text-sm"
            } font-bold`}
          >
            {progress}%
          </p>
        </div>
      </div>
      <p
        className={`timesTen-font ${
          size === 100 ? "text-base" : "text-[12px]"
        } text-black leading-none`}
      >
        {label}
      </p>
    </div>
  );
};

const CircularProgressSection = ({ data, position }: any) => {
  return (
    <div
      className={
        position === "left"
          ? "flex flex-wrap w-full justify-start gap-y-4 timesTen-font "
          : "flex flex-wrap gap-8 w-full timesTen-font "
      }
    >
      {data.map((item: any, index: number) => (
        <div
          key={index}
          className={
            position === "left"
              ? "w-1/2 flex justify-center timesTen-font "
              : "timesTen-font "
          }
        >
          <CircularProgressBar
            progress={item.progress}
            label={item.label}
            size={position === "left" ? 50 : 100}
          />
        </div>
      ))}
    </div>
  );
};

const KeyElement = ({ data, type }: any) => {
  return (
    <p
      className={`timesTen-font ${
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
    <div className={`timesTen-font flex flex-wrap gap-x-4 gap-y-1`}>
      {data.map((item: any, index: number) => (
        <KeyElement key={index} data={item} type={type} />
      ))}
    </div>
  );
};

function Section({ data, position = "right" }: any) {
  return (
    <div
      className={"timesTen-font flex flex-col w-full px-[10px] relative mb-4"}
    >
      <SectionHeader
        title={data.header}
        className={
          position === "left" ? "text-base pb-4 timesTen-font " : undefined
        }
      />

      {data.content.length > 0 &&
        data.content.map((blocks: any, index: number) => {
          if (blocks.length < 1) return;

          return (
            <div
              className={`timesTen-font flex flex-col relative w-full gap-1 pb-4`}
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
                    className="timesTen-font text-[12px] leading-tight"
                  />
                ) : item.type === "progress" ? (
                  <ProgressSection
                    key={index}
                    data={item.data}
                    width={position === "left" ? "full" : "small"}
                  />
                ) : item.type === "circular_progress" ? (
                  <CircularProgressSection
                    key={index}
                    data={item.data}
                    position={position}
                  />
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
  const contactData = data["Contact"].data.filter(
    (item: any) => item.type === "info_section"
  );
  const headerData = data["Contact"].data.filter(
    (item: any) => item.type !== "name_header" || item.type !== "content"
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
    <div className="timesTen-font w-full h-full flex bg-white">
      <div className="timesTen-font w-[30%] min-h-[1123px] flex flex-col p-6 bg-[#E3D5C8]">
        <div className="timesTen-font flex items-center justify-center pb-6">
          <img
            src={
              data["Contact"].data.at(-1)?.src
                ? data["Contact"].data.at(-1).src.preview
                : placeholder_img
            }
            className="timesTen-font w-28 h-28 mr-4 rounded-full object-cover aspect-square  border border-[#343537]"
            alt="profile pic"
          />
        </div>
        {contactData.map((dataItem: any, index: number) => (
          <div
            key={index}
            className={`timesTen-font ${
              dataItem.type !== "title_header"
                ? "border-t border-black py-6"
                : ""
            }`}
          >
            {index === 1 && (
              <div className="timesTen-font pb-4">
                <SectionHeader
                  title={"Personal Details"}
                  className="timesTen-font text-base"
                />
              </div>
            )}
            {dataItem.type === "info_section" ? (
              <div
                key={index}
                className="timesTen-font flex flex-col gap-2 flex-wrap text-[12px]"
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
          </div>
        ))}
        {leftSectionData.map((key, index) => {
          return (
            <Section key={index} data={data[key].data} position={"left"} />
          );
        })}
      </div>
      <div className="timesTen-font w-[70%] flex flex-col ">
        <div className="timesTen-font flex flex-col bg-[#343537] p-8">
          {headerData.length > 0 && <NameHeader p={headerData[0].data} />}
          {headerData.length > 1 && (
            <Content
              data={headerData[1].data}
              className={"timesTen-font text-white tracking-widest"}
            />
          )}
        </div>
        <div className="timesTen-font p-6 pr-0">
          {rightSectionData.map((key, index) => {
            return <Section key={index} data={data[key].data} />;
          })}
        </div>
      </div>
    </div>
  );
}
