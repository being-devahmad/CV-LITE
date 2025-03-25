import List from "../Resume Componenets/List";

function NameHeader({ p }: any) {
  return (
    <h1 className="engrez-font inline-flex text-4xl font-bold mb-4 border-2 border-blue-500 py-5 px-3 ml-5">
      {p}
    </h1>
  );
}
function InfoElement({ title, info }: any) {
  return (
    <p className={"engrez-font text-gray-600 text-[12px]"}>
      <span className="engrez-font mr-2 text-black font-bold">{title}:</span>
      {info}
    </p>
  );
}
function InfoLink({ title, info, link }: any) {
  return (
    <div className={"engrez-font flex flex-row text-[12px]"}>
      <p className={"engrez-font text-black font-bold  mr-2"}>{title}: </p>
      <a className={"engrez-font text-gray-600 underline"} href={link}>
        {info}
      </a>
    </div>
  );
}

function SectionHeader({ title }: any) {
  return (
    <div className="engrez-font rounded-[0.5em] text-blue-500 flex items-center gap-2 -ml-2">
      ● <p className={"engrez-font text-base font-bold"}>{title}</p>
    </div>
  );
}
function Content({ data }: any) {
  return (
    <p className={"engrez-font text-justify text-gray-700 text-[12px]"}>
      {data}
    </p>
  );
}

function TitleHeader({ data, size }: any) {
  const pSize =
    size === "md"
      ? "text-base"
      : size === "sm"
      ? "text-sm text-blue-500"
      : "text-2xl";

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
    <div className="engrez-font flex items-center w-full space-x-4 justify-between ">
      {/* Title */}
      <p className="engrez-font text-gray-700 font-medium">{label}</p>

      {/* Progress Bar Container */}
      <div className="engrez-font w-[50%]">
        <div className="engrez-font relative flex-1 h-[6px] bg-black">
          {/* Progress Bar */}
          <div
            className="engrez-font absolute h-full bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function ProgressSection({ data }: any) {
  return (
    <div className={"engrez-font flex flex-col gap-2 w-full"}>
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
    <div className="engrez-font flex flex-col">
      <div className="engrez-font flex flex-col items-center relative">
        <svg
          width={100}
          height={100}
          className="engrez-font transform -rotate-90"
        >
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="black" // Light gray background
            strokeWidth={strokeWidth - 1}
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
          />
        </svg>
        {/* Percentage Text */}
        <div className="engrez-font absolute flex flex-col items-center justify-center w-full h-full">
          <p className="engrez-font text-xl font-bold">{progress}%</p>
        </div>
      </div>
      <p className="engrez-font text-base text-gray-500 leading-none">
        {label}
      </p>
    </div>
  );
};

const CircularProgressSection = ({ data }: any) => {
  return (
    <div className={"engrez-font flex flex-wrap gap-8 w-full"}>
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
          ? "text-[12px] text-gray-700 engrez-font"
          : "text-lg text-wrap border-2 border-blue-500 px-[0.5em] py-[0.2em] rounded-[0.5em] engrez-font"
      }`}
    >
      {data}
    </p>
  );
};

const KeyElementsSection = ({ data, type }: any) => {
  return (
    <div className={"engrez-font flex flex-row flex-wrap gap-3"}>
      {data.map((item: any, index: number) => (
        <KeyElement key={index} data={item} type={type} />
      ))}
    </div>
  );
};

function Section({ data, bg = "#3b82f6" }: any) {
  return (
    <div
      className={
        "engrez-font flex flex-col w-full p-[10px] py-0 relative engrez-font"
      }
    >
      <SectionHeader title={data.header} bg={bg} />

      <div className={"engrez-font w-full py-2"}>
        {data.content.length > 0 &&
          data.content.map((blocks: any, index: number) => {
            return (
              <div className={"engrez-font mb-2 relative"} key={index}>
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

export default function Template8({ data }: any) {
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
        "engrez-font font-sairasemi bg-white p-8 w-full flex flex-col "
      }
      style={{
        width: "794px",
        minHeight: "1123px",
      }}
    >
      <div>
        <div className="engrez-font flex w-full items-center gap-5 pb-6">
          <div className="engrez-font w-[50%]">
            <NameHeader p={data["Contact"].data[0].data} />
          </div>
          <div className="engrez-font w-[50%]">
            <div className="engrez-font flex flex-col flex-wrap mb-2">
              {data["Contact"].data[1].data.map((item: any, idx: number) =>
                item.link ? (
                  <InfoLink
                    key={idx}
                    title={item.title}
                    info={item.info}
                    link={item.link}
                  />
                ) : (
                  <InfoElement key={idx} title={item.title} info={item.info} />
                )
              )}
            </div>
          </div>
        </div>
        <div className="engrez-font flex flex-wrap w-full relative">
          <div className="engrez-font flex flex-col w-[50%] relative">
            {leftSectionData.map((key, index) => {
              return <Section key={index} data={data[key].data} />;
            })}
          </div>
          <div className="engrez-font flex flex-col w-[50%] relative">
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
