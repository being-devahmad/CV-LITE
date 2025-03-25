import { Fragment } from "react/jsx-runtime";
import List from "../Resume Componenets/List";

function NameHeader({ p }: any) {
  return (
    <h1 className="text-3xl text-center font-bold mb-2 sairasemi-font">{p}</h1>
  );
}
function InfoElement({ title, info }: any) {
  return (
    <p className={"text-black text-sm sairasemi-font"}>
      <strong className="mr-2 sairasemi-font">{title}:</strong>
      {info}
    </p>
  );
}
function InfoLink({ title, info, link }: any) {
  return (
    <div className={"flex flex-row text-sm sairasemi-font"}>
      <p className={"text-black font-bold  mr-2 sairasemi-font"}>{title}: </p>
      <a className={"text-blue-500 underline sairasemi-font"} href={link}>
        {info}
      </a>
    </div>
  );
}

function SectionHeader({ title }: any) {
  return (
    <div>
      <p className={"text-2xl font-bold uppercase sairasemi-font"}>{title}</p>
    </div>
  );
}
function Content({ data }: any) {
  return (
    <p className={"text-justify text-gray-700 text-[14px] sairasemi-font"}>
      {data}
    </p>
  );
}

function TitleHeader({ data, size }: any) {
  const pSize =
    size === "md" ? "text-xl" : size === "sm" ? "text-base" : "text-2xl";

  return (
    <p className={`${pSize} font-bold leading-none sairasemi-font `}>{data}</p>
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
    <div className="flex flex-col items-start w-[30%]">
      <p className="text-gray-700 font-medium p-[12px] sairasemi-font">
        {label}
      </p>

      <div className="relative w-full h-[4px] bg-gray-400 sairasemi-font">
        {/* Progress Bar */}
        <div
          className="absolute h-full bg-black sairasemi-font"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Indicator Dot */}
        <div
          className="absolute bg-[#8A9942] rounded-full border border-white sairasemi-font"
          style={{
            left: `${progress}%`,
            transform: "translate(-50%, -50%)",
            width: "12px",
            height: "12px",
            top: "50%",
          }}
        ></div>
      </div>
    </div>
  );
};

function ProgressSection({ data }: any) {
  return (
    <div className={"flex flex-row  flex-wrap gap-4 w-full space-x-2"}>
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
  const radius = 36;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center relative">
        <svg
          width={100}
          height={100}
          className="transform -rotate-90 sairasemi-font"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#4e4e4e"
            strokeWidth={strokeWidth / 3}
          />
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#8A9942"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        {/* Percentage Text */}
        <div className="absolute flex flex-col items-center justify-center w-full h-full">
          <p className="text-xl font-bold sairasemi-font">{progress}%</p>
        </div>
      </div>
      <p className="text-base text-gray-500 leading-none sairasemi-font">
        {label}
      </p>
    </div>
  );
};

const CircularProgressSection = ({ data }: any) => {
  return (
    <div className={"flex flex-wrap gap-8 sairasemi-font"}>
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
      className={`sairasemi-font ${
        type == "secondary"
          ? "text-[12px] text-gray-700"
          : "text-lg  border-b-2 border-[#8A9942] "
      }`}
    >
      {data}
    </p>
  );
};

const KeyElementsSection = ({ data, type }: any) => {
  return (
    <div className={"flex flex-row flex-wrap space-x-6"}>
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
        "flex flex-row w-full p-[10px] py-0 border-t border-gray-300 relative sairasemi-font"
      }
    >
      <div className={"w-[30%] pl-[1%] pr-[5%] py-2"}>
        <SectionHeader title={data.header} />
      </div>
      <div
        className={
          "sairasemi-font w-[12px] h-[12px] rounded-full absolute bg-[#8A9942] left-[30%] -translate-x-[6px] -translate-y-[6px] "
        }
      ></div>
      <div
        className={
          "sairasemi-font w-[1.5px] h-full absolute bg-[#8A9942] left-[30%] translate-x-[-0.75px]"
        }
      ></div>
      <div className={"w-[70%] pl-[10px] py-2"}>
        {data.content.length > 0 &&
          data.content.map((blocks: any, index: number) => {
            return (
              <div className={"sairasemi-font mb-2 relative"} key={index}>
                {blocks.length > 0 && blocks[0].type === "title_header" && (
                  <div
                    className={
                      "sairasemi-font w-[8px] h-[8px] rounded-full absolute bg-[#8A9942] -left-[10px] -translate-x-[8px] translate-y-[4px]"
                    }
                  ></div>
                )}
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

export default function London({ data }: any) {
  return (
    <div
      className={"font bg-white p-8 w-full flex flex-col sairasemi-font"}
      style={{
        width: "794px",
        minHeight: "1123px",
      }}
    >
      <div>
        {data["Contact"].data.map((dataItem: any, index: number) => (
          <Fragment key={index}>
            {dataItem.type === "name_header" ? (
              <NameHeader key={index} p={dataItem.data} />
            ) : dataItem.type === "info_section" ? (
              <div
                key={index}
                className="mb-2 text-[12px] justify-center items-center gap-x-4 sairasemi-font "
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

        {Object.keys(data).map((key) => {
          return key === "Contact" ? null : (
            <Section key={key} data={data[key].data} />
          );
        })}
      </div>
    </div>
  );
}
