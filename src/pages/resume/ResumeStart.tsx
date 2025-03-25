import React, { useState, useRef, useCallback, useEffect } from "react";
import { ResumeProvider } from "@/hooks/useResume";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ResumeForm } from "@/components/forms/ResumeForm/ResumeForm";

import { useReactToPrint } from "react-to-print";
import Button from "@/components/ui/Custom Ui/Button";

import { useAuth } from "@/hooks/useAuth";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { deleteImage, uploadImage } from "@/lib/actions";
import SavingOverlay from "@/components/ui/Custom Ui/SavingOverlay";
import html2canvas from "html2canvas";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useTemplates } from "@/hooks/useTemplates";
import { templateMapping } from "@/data/templates";

const ResumeStart: React.FC = () => {
  const navigate = useNavigate();
  const { templates }: any = useTemplates();

  const { user } = useAuth();
  const { id }: any = useParams();
  const [scale, setScale] = useState(1);
  const [resumeID, setResumeID] = useState(null);

  const location = useLocation();
  const { categoryData, resume } = location.state || {};

  const templateRef = useRef(null);

  const [allData, setAllData] = useState<any>(null);
  const [SelectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const selectedTemplate = templates.find((t: any) => t.id == id);

  useEffect(() => {
    if (id && selectedTemplate) {
      setAllData(selectedTemplate.data);

      setSelectedTemplate(
        () => templateMapping[selectedTemplate.name].Template
      );
    }
    console.log("id", id);
  }, [id, selectedTemplate]);
  useEffect(() => {
    if (categoryData) {
      setAllData(categoryData);
    }
    if (resume) {
      const resumeData = JSON.parse(resume.resumeData);
      setResumeID(resume.id);
      setAllData(resumeData);
    }
  }, []);
  useEffect(() => {
    console.log("selectedTemplate", selectedTemplate);
  }, [selectedTemplate]);
  const updateResume = async () => {
    if (!user?.id) {
      throw new Error("User not authenticated");
    }
    if (!resumeID) {
      throw new Error("Invalid resume ID");
    }
    try {
      await deleteImage(resume.thumbnail);
      const thumbnail = await captureAndUpload();

      const isImg = allData["Contact"].data.at(-1);
      let resumeData = JSON.parse(JSON.stringify(allData));

      if (isImg.type === "profile_pic" && isImg.src) {
        const prevData = JSON.parse(resume.resumeData);
        const previousImageUrl = prevData["Contact"].data.at(-1).src.preview;
        if (previousImageUrl !== isImg.src.preview) {
          if (previousImageUrl) {
            await deleteImage(previousImageUrl);
          }
          const imageSrc = await uploadImage(isImg.src, user.id);
          resumeData["Contact"].data.at(-1).src.preview = imageSrc;
        }
      }
      resumeData = JSON.stringify(resumeData);

      const resumeRef = doc(db, "resumes", resumeID);

      await updateDoc(resumeRef, {
        ...resume,
        resumeData: resumeData,
        thumbnail,
        updatedAt: new Date(),
      });
      printFn();
    } catch (error) {
      console.error("Error updating resume:", error);
      throw new Error("Failed to update resume. Please try again.");
    }
  };

  const saveAndDownload = async () => {
    if (!user?.id) {
      throw new Error("User not authenticated");
    }

    try {
      const thumbnail = await captureAndUpload();

      const isImg = allData["Contact"].data.at(-1);
      let resumeData = JSON.parse(JSON.stringify(allData));

      if (isImg.type === "profile_pic" && isImg.src) {
        const imageSrc = await uploadImage(isImg.src, user.id);
        resumeData["Contact"].data.at(-1).src.preview = imageSrc;
      }
      resumeData = JSON.stringify(resumeData);
      const resumesCollection = collection(db, "resumes");
      const newResumeRef = doc(resumesCollection);
      const newResume = {
        resumeData,
        userId: user.id,
        templateId: id,
        thumbnail,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await setDoc(newResumeRef, newResume);
      printFn();
    } catch (error) {
      console.error("Error saving resume:", error);
      throw new Error("Failed to save resume. Please try again.");
    }
  };
  async function captureAndUpload() {
    if (!templateRef.current) return;

    try {
      // Capture the component as an image
      const canvas = await html2canvas(templateRef.current, { scale: 2 });
      const dataUrl = canvas.toDataURL("image/png");

      // Convert to Blob
      const blob = await (await fetch(dataUrl)).blob();

      // Upload to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `screenshots/${Date.now()}.png`);
      await uploadBytes(storageRef, blob);

      // Get and return the download URL
      const downloadURL = await getDownloadURL(storageRef);
      console.log("Image URL:", downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error capturing or uploading image:", error);
    }
  }
  const handleAfterPrint = useCallback(() => {
    console.log("`onAfterPrint` called");
    navigate("/dashboard", { replace: true });
  }, []);

  const handleBeforePrint = useCallback(() => {
    console.log("`onBeforePrint` called");
    setShowOverlay(false);

    return Promise.resolve();
  }, []);

  const printFn = useReactToPrint({
    contentRef: templateRef,
    documentTitle: "AwesomeFileName",
    onAfterPrint: handleAfterPrint,
    onBeforePrint: handleBeforePrint,
  });

  return (
    <div className="pt-[15vh] bg-platformGreen/5 overflow-hidden">
      <SavingOverlay show={showOverlay} />
      <ResumeProvider>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 max-h-screen overflow-y-auto">
            {allData && (
              <ResumeForm
                allData={allData}
                setAllData={setAllData}
                categoryData={categoryData}
                type={selectedTemplate?.type}
                // resumeID={resumeID}
              />
            )}
          </div>
          <div className="w-full max-h-screen lg:w-1/2 flex flex-col relative ">
            <div className="sticky top-0 z-10 bg-white p-[0.3em] flex justify-between items-center  text-[7vw] md:text-[4.5vw] lg:text-[1.5vw]">
              <div
                className="text-[1em] sm:text-[1.5em] flex text-center justify-center"
                onClick={() => {
                  if (showOverlay) return;
                  try {
                    setShowOverlay(true);
                    if (resumeID) {
                      updateResume();
                    } else {
                      saveAndDownload();
                    }
                  } catch (error) {
                    console.error(error);
                    setShowOverlay(false);
                  }
                }}
              >
                <Button text={resumeID ? "Update" : "Save & Download"} />
              </div>

              <div className="text-[0.7em]">{scale * 100}%</div>
              <div className="inline-flex text-[0.7em] text-white z-10 bg-platformGreen rounded-full select-none space-x-[1em] p-[0.5em] px-[1em]">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setScale((prevData) => Math.min(prevData + 0.25, 2));
                  }}
                >
                  +
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setScale((prevData) => Math.max(prevData - 0.25, 0.25));
                  }}
                >
                  -
                </span>
              </div>
            </div>
            {/* <div ref={resumeRef}>{renderTemplate()}</div> */}
            <div className="overflow-auto w-full h-full bg-gray-500">
              <div className="w-full h-full flex justify-center">
                <div
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                    width: `${100 * scale}%`, // Ensures the container recognizes the scaled width
                    height: `${100 * scale}%`, // Ensures the container recognizes the scaled height
                    minWidth: "100%", // Prevents shrinking
                    minHeight: "100%", // Prevents shrinking
                  }}
                >
                  <div ref={templateRef}>
                    {SelectedTemplate && allData && (
                      <SelectedTemplate data={allData} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResumeProvider>
    </div>
  );
};

export default ResumeStart;
