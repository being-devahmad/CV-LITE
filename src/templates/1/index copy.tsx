// import {
//   Document,
//   Font,
//   Link,
//   Page,
//   Path,
//   Svg,
//   Text,
//   View,
// } from "@react-pdf/renderer";
// import { createTw } from "react-pdf-tailwind";
// Font.register({
//   family: "Sairasemi",
//   fonts: [
//     { src: "/fonts/sairasemicondensed/SairaSemiCondensed-Regular.ttf" },
//     {
//       src: "/fonts/sairasemicondensed/SairaSemiCondensed-Bold.ttf",
//       fontWeight: 700,
//     },
//   ],
// });
// Font.registerHyphenationCallback((word) => [word]);
// const tw = createTw({
//   theme: {
//     fontFamily: {
//       sans: ["Sairasemi"],
//     },
//     extend: {
//       colors: {
//         custom: "#bada55",
//       },
//     },
//   },
// });
// function NameHeader({ text }: any) {
//   return (
//     <Text style={tw("text-[30px] text-center font-bold mb-2")}>{text}</Text>
//   );
// }
// function InfoElement({ title, info }: any) {
//   return (
//     <View style={tw("mr-4")}>
//       <Text style={tw("text-black")}>
//         <Text style={tw("font-bold")}>{title}: </Text>
//         {info}
//       </Text>
//     </View>
//   );
// }
// function InfoLink({ title, info, link }: any) {
//   return (
//     <View style={tw("flex-row mr-4")}>
//       <Text style={tw("text-black font-bold")}>{title}: </Text>
//       <Link style={tw("text-blue-500 underline")} src={link}>
//         {info}
//       </Link>
//     </View>
//   );
// }

// function SectionHeader({ title }: any) {
//   return (
//     <View style={{ flexWrap: "wrap", width: "100%" }}>
//       <Text
//         style={tw("text-[20px] font-bold uppercase")}
//         wrap={true} // Ensures it wraps to a new line
//       >
//         {title}
//       </Text>
//     </View>
//   );
// }
// function Content({ data }: any) {
//   return (
//     <Text style={tw("text-justify text-gray-700 text-[12px]")}>{data}</Text>
//   );
// }
// function List({ data }: any) {
//   return (
//     <View style={tw("ml-4 text-gray-700 text-sm flex flex-col")}>
//       {data.map((item: any, index: any) => (
//         <Text key={index} style={tw("mb-1")}>
//           • {item}
//         </Text>
//       ))}
//     </View>
//   );
// }
// function TitleHeader({ data, size }: any) {
//   const textSize =
//     size === "md" ? "text-lg" : size === "sm" ? "text-base" : "text-xl";

//   return <Text style={tw(`${textSize} font-bold leading-none`)}>{data}</Text>;
// }
// const ProgressBar = ({ label, progress }: any) => {
//   return (
//     <View style={tw("flex flex-col items-start w-[30%]")}>
//       <Text style={tw("text-gray-700 font-medium text-[12px]")}>{label}</Text>

//       <View style={tw("relative w-full h-[2px] bg-gray-400")}>
//         <View style={tw(`absolute h-full bg-black w-[${progress}%]`)}></View>
//         <View
//           style={tw(
//             `absolute bg-[#8A9942] rounded-full border-[1px] border-white w-[10px] h-[10px] left-[${progress}%] -translate-y-[5px]`
//           )}
//         ></View>
//       </View>
//     </View>
//   );
// };

// function ProgressSection({ data }: any) {
//   return (
//     <View style={tw("flex flex-row  flex-wrap gap-4 w-full")}>
//       {data.map((item: any, index: number) => (
//         <ProgressBar key={index} label={item.label} progress={item.progress} />
//       ))}
//     </View>
//   );
// }

// const CircularProgressBar = ({ progress, label }: any) => {
//   const circleRadius = 36; // Adjusted radius to account for stroke width
//   const strokeWidth = 8; // Stroke width
//   const circumference = 2 * Math.PI * circleRadius;

//   // Calculate the progress angle (in radians) for the arc path
//   const progressAngle = (progress / 100) * 360;
//   const largeArcFlag = progress > 50 ? 1 : 0; // Determines if the arc is large or small

//   // Define the arc path (clockwise arc)
//   const pathData = `
//     M 50 50
//     m ${circleRadius} 0
//     a ${circleRadius} ${circleRadius} 0 ${largeArcFlag} 1 0 ${-progressAngle} 0
//   `;

//   return (
//     <View style={tw("flex flex-col items-center")}>
//       {/* Circular Progress Bar */}
//       <Svg style={tw("w-24 h-24")} viewBox="0 0 100 100">
//         {/* Background Circle */}
//         <Path
//           d={`M 50 50
//             m -${circleRadius} 0
//             a ${circleRadius} ${circleRadius} 0 1 1 ${2 * circleRadius} 0
//             a ${circleRadius} ${circleRadius} 0 1 1 -${2 * circleRadius} 0`}
//           fill="transparent"
//           stroke="#e0e0e0" // Light gray color for background circle
//           strokeWidth={strokeWidth}
//         />
//         {/* Progress Path */}
//         <Path
//           d={pathData}
//           fill="transparent"
//           stroke="#8A9942"
//           strokeWidth={strokeWidth}
//           strokeLinecap="round"
//         />
//         {/* Progress Text */}
//         <Text
//           x="50"
//           y="50"
//           textAnchor="middle"
//           dominantBaseline="middle"
//           style={tw("text-xl font-bold text-black font-sans")}
//         >
//           {progress}%
//         </Text>
//       </Svg>

//       {/* Label - Using Text instead of span for React-PDF */}
//       <Text style={tw("text-gray-700 font-medium font-sans")}>{label}</Text>
//     </View>
//   );
// };

// const CircularProgressSection = ({ data }: any) => {
//   return (
//     <View style={tw("flex flex-wrap gap-6")}>
//       {data.map((item: any, index: number) => (
//         <CircularProgressBar
//           key={index}
//           progress={item.progress}
//           label={item.label}
//         />
//       ))}
//     </View>
//   );
// };

// const KeyElement = ({ data, type }: any) => {
//   console.log(type);
//   return (
//     <Text
//       style={tw(
//         `${
//           type == "secondary"
//             ? "text-[12px] text-gray-700"
//             : "text-lg  border-b-2 border-[#8A9942]"
//         }`
//       )}
//     >
//       {data}
//     </Text>
//   );
// };

// const KeyElementsSection = ({ data, type }: any) => {
//   return (
//     <View style={tw("flex flex-row flex-wrap gap-6")}>
//       {data.map((item: any, index: number) => (
//         <KeyElement key={index} data={item} type={type} />
//       ))}
//     </View>
//   );
// };

// function Section({ data }: any) {
//   return (
//     <View
//       style={tw(
//         "flex flex-row w-full p-[10px] py-0 border-t border-black relative"
//       )}
//     >
//       <View style={tw("w-[30%] pl-[1%] pr-[5%] py-2")}>
//         <SectionHeader title={data.header} />
//       </View>
//       <View
//         style={tw(
//           "w-[12px] h-[12px] rounded-full absolute bg-[#8A9942] left-[30%] -translate-x-[6px] -translate-y-[6px] "
//         )}
//       ></View>
//       <View
//         style={tw(
//           "w-[1.5px] h-full absolute bg-[#8A9942] left-[30%] translate-x-[-0.75px]"
//         )}
//       ></View>
//       <View style={tw("w-[70%] pl-[10px] py-2")}>
//         {data.content.map((blocks: any, index: number) => {
//           return (
//             <View style={tw("mb-2 relative")} key={index}>
//               {blocks[0].type === "title_header" && (
//                 <View
//                   style={tw(
//                     "w-[8px] h-[8px] rounded-full absolute bg-[#8A9942] -left-[10px] -translate-x-[8px] translate-y-[4px]"
//                   )}
//                 ></View>
//               )}
//               {blocks.map((item: any, index: number) => {
//                 if (item.type === "title_header") {
//                   return (
//                     <TitleHeader
//                       key={index}
//                       data={item.data}
//                       size={item.size}
//                     />
//                   );
//                 } else if (item.type === "content") {
//                   return <Content key={index} data={item.data} />;
//                 } else if (item.type === "list") {
//                   return <List key={index} data={item.data} />;
//                 } else if (item.type === "progress") {
//                   return <ProgressSection key={index} data={item.data} />;
//                 } else if (item.type === "circular_progress") {
//                   return (
//                     <CircularProgressSection key={index} data={item.data} />
//                   );
//                 } else if (item.type === "key_elements") {
//                   return (
//                     <KeyElementsSection
//                       key={index}
//                       data={item.data}
//                       type={item.elType}
//                     />
//                   );
//                 }
//               })}
//             </View>
//           );
//         })}
//       </View>
//     </View>
//   );
// }

// // {
// //   type: "data_section",
// //   data: {
// //     header: "Languages",
// //     content: [
// //       [
// //         {
// //           type: "circular_progress",
// //           data: [
// //             { label: "Communication", progress: 90 },
// //             { label: "Communication", progress: 50 },
// //             { label: "Communication", progress: 70 },
// //           ],
// //         },
// //       ],
// //     ],
// //   },
// // },
// export default function CVTemplate1({ data }: any) {
//   return (
//     <Document>
//       <Page
//         size="A4"
//         style={tw(`bg-white p-8 overflow-hidden flex flex-col font-sans`)}
//       >
//         {data &&
//           data.map((section: any, index: any) => {
//             if (section.type === "name_header") {
//               return <NameHeader key={index} text={section.data} />;
//             } else if (section.type === "info_section") {
//               return (
//                 <View
//                   key={index}
//                   style={tw(
//                     "flex flex-row flex-wrap mb-2 text-[12px] justify-center items-center"
//                   )}
//                 >
//                   {section.data.map((item: any, index: any) =>
//                     item.link ? (
//                       <InfoLink
//                         key={index}
//                         title={item.title}
//                         info={item.info}
//                         link={item.link}
//                       />
//                     ) : (
//                       <InfoElement
//                         key={index}
//                         title={item.title}
//                         info={item.info}
//                       />
//                     )
//                   )}
//                 </View>
//               );
//             } else if (section.type === "data_section") {
//               return <Section key={index} data={section.data} />;
//             }
//           })}
//       </Page>
//     </Document>
//   );
// }
