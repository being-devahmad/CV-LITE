import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, AlertTriangle, AlertCircle } from "lucide-react";
import { AIChatSession } from "@/services/AIModal";
import { useNavigate, useParams } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Image } from "@nextui-org/react";

import { useTemplates } from "@/hooks/useTemplates";

interface TemplatePreviewProps {
  fileName: string;
  fileContent: string | ArrayBuffer | null;
}

async function getData(sample: any, fileContent: any, key: any) {
  const prompt = `
Task: Extract and Update JSON Data from Resume Content

Instructions:
1. Below is a sample JSON structure:
json
   ${sample}

Here is the resume content to analyze:
${fileContent}
Your task is to extract information related to the key "${key}" from the resume content and update the corresponding fields in the sample JSON. Ensure that:
Only the fields present in the sample JSON are updated.
The structure and keys of the JSON remain unchanged.
The JSON response is valid, properly formatted, and strictly adheres to JSON syntax rules.
Strict JSON Formatting Rules:
All property names and string values must be enclosed in double quotes (").
Do not use single quotes (') or unescaped quotes in strings.
Ensure all commas, brackets, and braces are correctly placed.
Escape special characters in strings (e.g., \\n, \\t, \\").
If the data is too large, prioritize extracting and returning only one section to avoid broken JSON.
Output Guidelines:
Respond ONLY with the updated JSON object. Do not include any additional text, explanations, or annotations.
Validate the JSON output to ensure it is not broken or malformed before returning it.
    `;
  // const prompt = `
  //     Here is a sample JSON data:
  //     ${sample}

  //     Here's the resume content:
  //     ${fileContent}

  //     I want you to extract info for the "${key}" from resume content and update all the info in sample accordingly, make sure to update all the fields and only the feilds available in the sample json.
  //     Make sure to follow the formate keep the structure and keys the same.
  //     Make sure you checked the json if its not broken. dont give me too much data only return one section if its too much
  //     Respond only with the JSON object, no additional text.
  //   `;

  const result = await AIChatSession.sendMessage(prompt);

  try {
    // Ensure result.response is a valid JSON string before parsing
    const parsedData = JSON.parse(result.response.text());
    console.log("Sample:", JSON.stringify(sample, null, 2));
    console.log("AI Result:", JSON.stringify(parsedData, null, 2));

    return parsedData;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return false;
  }
}

export const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  fileName,
  fileContent,
}) => {
  const { id } = useParams<{ id: string }>();
  const [parsingError, setParsingError] = useState<string | null>(null);
  const [parsingProgress, setParsingProgress] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState<any | null>(null);
  const [gettingData, setGettingData] = useState(false);
  // const [categoryData, setCategoryData] = useState('')
  const navigate = useNavigate();
  const { templates }: any = useTemplates();

  useEffect(() => {
    const template = templates.find((t: any) => t.id == id);

    setSelectedTemplate(template || null);
  }, [id]);

  async function getAllData(fileContent: any, id: any, setProgress: any) {
    const allData: any = {};
    const template = templates.find((t: any) => t.id == id);
    const templateData = template.data;
    const keys = Object.keys(templateData);
    for (const key of keys as Array<keyof typeof templateData>) {
      const result: any = await getData(
        JSON.stringify(templateData[key], null, 2),
        fileContent,
        key
      );
      setProgress(80 / keys.length);

      if (result) {
        if (key !== "Contact") {
          const flatArray = result.data.content.flat();
          result.data.content = [flatArray];
          allData[key] = result;
        } else {
          allData[key] = result;
        }
      } else {
        allData[key] = templateData[key];
      }
    }

    return allData;
  }

  const parseResume = useCallback(async () => {
    if (!fileContent || typeof fileContent !== "string") {
      setParsingError("Invalid file content");
      return;
    }

    try {
      setParsingProgress(10);
      const jsonResponse = await getAllData(fileContent, id, (progress: any) =>
        setParsingProgress((prevData) => prevData + progress)
      );

      setParsingProgress(100);
      setGettingData(false);

      // console.log("FinalResult---->", jsonResponse);

      // Navigate to ResumeStart with parsed data
      navigate(`/select/${id}/start`, {
        state: { categoryData: jsonResponse },
      });
    } catch (error) {
      console.error("Error parsing resume:", error);
      setParsingError(
        "An error occurred while parsing the resume. Please try again."
      );
      setParsingProgress(0);
    }
  }, [fileContent, navigate, id]);

  useEffect(() => {
    if (gettingData) {
      // parseResume();
    }
  }, [gettingData, parseResume]);

  useEffect(() => {
    if (!gettingData) {
      setGettingData(true);
    }
  }, [gettingData]);

  if (parsingError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
        >
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-xl font-semibold text-center text-red-600 mb-2">
            Error Processing Document
          </h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
            <div className="flex items-center">
              <AlertCircle className="h-6 w-6 text-red-500 mr-3" />
            </div>
            <p className="mt-2 text-sm text-red-700">
              {parsingError ||
                "We're experiencing high demand. Please try again in a few minutes or contact support if the issue persists."}
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="text-[7min] md:text-[4.5vw] lg:text-[3vmin] h-screen px-[10vw] lg:px-[30vw] flex items-center justify-center *:overflow-hidden my-[10vh]">
      <div className="w-full">
        <div className=" space-y-[3vh] bg-platformPurple/20 rounded-[0.5em] p-[1em] backdrop-blur-sm border border-platformPurple/50">
          <div className="flex items-center space-x-[1em]">
            <div className="bg-platformPurple rounded-full p-3 w-[10vmin] h-[10vmin]">
              <FileText className="w-full h-full text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">{fileName}</h2>
              <p className="text-[0.7em] text-gray-500">
                Processing your resume...
              </p>
            </div>
          </div>

          <Progress value={parsingProgress} className="w-full" />

          <p className="text-center text-[0.7em] font-medium text-gray-600">
            {parsingProgress < 100
              ? "Analyzing your resume..."
              : "Resume analysis complete!"}
          </p>
        </div>

        {selectedTemplate && (
          <div className="">
            <motion.div
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mt-[5vh]"
            >
              {/* <h3 className="text-lg font-semibold text-gray-800">Selected Template: {selectedTemplate.name}</h3> */}
              <div className="relative aspect-[8.5/11] w-[60%] sm:w-[20vw] mx-auto border border-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={selectedTemplate.image}
                  alt={selectedTemplate.name}
                  className="w-full h-full object-contain"
                />
                <div
                  className="absolute inset-0 bg-blue-500 opacity-20"
                  style={{ clipPath: `inset(0 ${100 - parsingProgress}% 0 0)` }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
