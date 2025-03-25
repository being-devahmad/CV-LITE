import MaxWidthContainer from "@/components/MaxWidthContainer";
import LogoShowcase from "@/components/LogoShowcase";
import HeroSection from "@/components/HeroSection";

import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FeatureGrid from "@/components/FeatureGrid";

import { NavLink } from "react-router-dom";
import ResumeSlider from "@/components/ResumeSlider";
import AnimatedHeroSection from "@/components/Home/AnimatedHero";
import TemplatesAnimation from "@/components/Home/TemplatesAnimation";
import LandingAnimtion from "@/components/Home/LandingAnimation";

import Button from "@/components/ui/Custom Ui/Button";
import { Check } from "lucide-react";

import bg from "@/assets/illustrations/bg.svg";
// import {
//   addDoc,
//   collection,
//   deleteDoc,
//   doc,
//   getDocs,
//   serverTimestamp,
// } from "firebase/firestore";
// import { db } from "@/lib/firebaseConfig";
// import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// import london from "@/assets/resumes/london.jpg";
// import paris from "@/assets/resumes/paris.jpg";
// import copenhagan from "@/assets/resumes/copenhagen.jpg";
// import stockholm from "@/assets/resumes/stockholm.png";
// import chicago from "@/assets/resumes/chicago.jpg";
// import rotterdam from "@/assets/resumes/rotterdam.jpg";
// import zurich from "@/assets/resumes/zurich.png";
// import oslo from "@/assets/resumes/960.png";
// import berlin from "@/assets/resumes/2560.png";
// import madrid from "@/assets/resumes/image.jpg";
// // Mapping of template names to local image paths
// const templateMapping = {
//   London: london,
//   Paris: paris,
//   Oslo: oslo,
//   Copenhagen: copenhagan,
//   Chicago: chicago,
//   Rotterdam: rotterdam,
//   Madrid: madrid,
//   Berlin: berlin,
//   Stockholm: stockholm,
//   Zurich: zurich,
// };
// const storage = getStorage();
// // Function to upload a single image to Firebase Storage
// async function uploadImage(templateName) {
//   try {
//     const imagePath = templateMapping[templateName]; // Get the image path
//     if (!imagePath) throw new Error(`No image found for ${templateName}`);

//     const response = await fetch(imagePath);
//     const blob = await response.blob(); // Convert to Blob

//     const storageRef = ref(storage, `templates/${templateName}.jpg`); // Storage Path
//     await uploadBytes(storageRef, blob); // Upload to Firebase
//     const downloadURL = await getDownloadURL(storageRef); // Get URL
//     console.log(downloadURL);
//     return downloadURL;
//   } catch (error) {
//     console.error(`Error uploading image for ${templateName}:`, error);
//     return null;
//   }
// }

// // Function to upload a template document with the image URL
// async function uploadTemplate(template) {
//   try {
//     const imageUrl = await uploadImage(template.name); // Upload image and get URL

//     if (!imageUrl) {
//       console.error(`Skipping template ${template.name} due to missing image.`);
//       return;
//     }

//     const docRef = await addDoc(collection(db, "templates"), {
//       ...template,
//       image: imageUrl, // Add image URL to Firestore
//     });

//     console.log(`Template '${template.name}' uploaded with ID: ${docRef.id}`);
//   } catch (error) {
//     console.error(`Error uploading template '${template.name}':`, error);
//   }
// }

// // Data array with template details
// const array = [
//   {
//     id: 0,
//     name: "London",
//     isVisible: true,
//     isPaid: false,
//     planStatus: "Free",
//     author: "Admin",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   },
//   {
//     id: 1,
//     name: "Paris",
//     isVisible: true,
//     isPaid: false,
//     planStatus: "Free",
//     author: "Admin",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   },
//   {
//     id: 2,
//     name: "Oslo",
//     isVisible: true,
//     isPaid: false,
//     planStatus: "Free",
//     author: "Admin",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   },
//   {
//     id: 3,
//     name: "Copenhagen",
//     isVisible: true,
//     isPaid: false,
//     planStatus: "Free",
//     author: "Admin",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   },
//   {
//     id: 4,
//     name: "Chicago",
//     isVisible: true,
//     isPaid: false,
//     planStatus: "Free",
//     author: "Admin",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   },
//   {
//     id: 5,
//     name: "Rotterdam",
//     isVisible: true,
//     isPaid: false,
//     planStatus: "Free",
//     author: "Admin",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   },
//   {
//     id: 6,
//     name: "Madrid",
//     isVisible: true,
//     isPaid: false,
//     planStatus: "Free",
//     author: "Admin",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   },
//   {
//     id: 7,
//     name: "Berlin",
//     isVisible: true,
//     isPaid: false,
//     planStatus: "Free",
//     author: "Admin",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   },
//   {
//     id: 8,
//     name: "Stockholm",
//     isVisible: true,
//     isPaid: false,
//     planStatus: "Free",
//     author: "Admin",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   },
//   {
//     id: 9,
//     name: "Zurich",
//     isVisible: true,
//     isPaid: false,
//     planStatus: "Free",
//     author: "Admin",
//     createdAt: serverTimestamp(),
//     updatedAt: serverTimestamp(),
//   },
// ];

// // Upload all templates
// async function uploadAllTemplates() {
//   for (const template of array) {
//     await uploadTemplate(template);
//   }
// }

// // Start uploading

// async function deleteAllDocuments(collectionName) {
//   try {
//     const colRef = collection(db, collectionName);
//     const snapshot = await getDocs(colRef);

//     if (snapshot.empty) {
//       console.log(`No documents found in collection: ${collectionName}`);
//       return;
//     }

//     const deletePromises = snapshot.docs.map((docSnap) =>
//       deleteDoc(doc(db, collectionName, docSnap.id))
//     );

//     await Promise.all(deletePromises);

//     console.log(`All documents in '${collectionName}' have been deleted.`);
//   } catch (error) {
//     console.error("Error deleting documents:", error);
//   }
// }
const Home = () => {
  return (
    <div className="overflow-hidden pt-[10vh]">
      {/* <BlurDiv /> */}
      <div className="absolute inset-0 -z-10 pointer-events-none ">
        <img src={bg} className="w-full" />
      </div>
      {/* <div
        className="my-10"
        onClick={() => {
          deleteAllDocuments("templates");
        }}
      >
        Delete
      </div>
      <div
        className="my-10"
        onClick={async () => {
          uploadAllTemplates();
        }}
      >
        Upload
      </div> */}
      <MaxWidthContainer>
        <div className="flex items-center justify-center text-[10vw] md:text-[5vw] lg:text-[4vw] mt-[10vh] md:my-0 ">
          <div className="w-full mx-auto flex flex-col md:flex-row items-center px-6 relative ">
            {/* Text Section */}
            <div className="text-center md:text-left w-full md:w-[70%] h-full">
              <h1 className="text-[1em] font-bold leading-tight text-black mb-4">
                Your
                <span className="text-platformGreen">
                  &nbsp;Career Transformation
                </span>{" "}
                <br />
                Starts Here!
              </h1>
              <div className="mb-6  p-0 md:pr-[12%]">
                <p className="text-[0.5em] text-gray-600  font-semibold">
                  Create job-winning resumes with AI-powered tools trusted by
                  professionals at top companies.
                  <br />
                  Get noticed.
                  <span className="text-platformGreen">&nbsp;Get hired.</span>
                </p>
              </div>
              <div className="inline-flex flex-col">
                <NavLink to={"/select"} onPointerEnter={() => {}}>
                  <Button text={"Build my Resume Now"} />
                </NavLink>
                <p className="text-[0.4em] text-gray-500 text-center py-5">
                  No credit card required
                </p>
              </div>
            </div>

            {/* Image Section */}
            <LandingAnimtion />
          </div>
        </div>
      </MaxWidthContainer>

      {/* Logos */}
      <MaxWidthContainer>
        <LogoShowcase />
      </MaxWidthContainer>

      {/* Resume SLider */}

      {/* <MaxWidthContainer> */}
      <ResumeSlider />
      {/* </MaxWidthContainer> */}

      {/* Hero Section */}
      <MaxWidthContainer>
        <AnimatedHeroSection />
      </MaxWidthContainer>

      {/* Resume Animation Section */}
      <MaxWidthContainer>
        <div className="flex flex-col items-center md:px-10">
          {/* Main Container */}
          <div className="grid lg:grid-cols-2 gap-10 w-full mx-auto">
            {/* Left Section */}
            <div className="text-[10vw] md:text-[5vw] lg:text-[4vw]">
              <h1 className="text-[1em] font-bold text-[#151B23] leading-snug">
                Your{" "}
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  Career Success
                </span>
                , Simplified.
              </h1>
              <ul className="text-[0.5em] sm:text-[0.36em] space-y-2 text-gray-600 ">
                <li className="flex items-center gap-2">
                  <Check color="#31D0AD" size={"1.5em"} />
                  <span>
                    <strong>Choose a professional template</strong> – Get
                    noticed with recruiter-approved designs.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check color="#31D0AD" size={"1.5em"} />
                  <span>
                    <strong>Let AI enhance your CV </strong> – Save time & craft
                    a standout resume effortlessly.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check color="#31D0AD" size={"1.5em"} />
                  <span>
                    <strong>Ensure ATS & industry fit </strong> – Optimized for
                    50+ fields & seamless applications.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check color="#31D0AD" size={"1.5em"} />
                  <span>
                    <strong>Increase interview chances </strong>– Proven
                    strategies to land your next job faster.
                  </span>
                </li>
              </ul>
              <NavLink
                to={"/select"}
                onPointerEnter={() => {}}
                className="block"
              >
                <Button text={"Start Building My CV"} />
              </NavLink>

              <TemplatesAnimation />
            </div>

            {/* Right Section Grid */}

            <FeatureGrid />
          </div>
        </div>
      </MaxWidthContainer>

      {/* Testimonials */}
      {/* <MaxWidthContainer> */}
      <Testimonials />
      {/* </MaxWidthContainer> */}

      {/* Hero Banner */}
      {/* <MaxWidthContainer> */}
      <HeroSection />
      {/* </MaxWidthContainer> */}

      {/* FAQs */}
      {/* bg-[#F1F1F1] */}
      <div className=" mt-4 ">
        <MaxWidthContainer>
          <FAQ />
        </MaxWidthContainer>
      </div>
    </div>
  );
};

export default Home;
