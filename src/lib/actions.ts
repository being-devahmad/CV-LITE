import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
export const addMessageToFirestore = async (
  message: any,
  userId: string | null
) => {
  try {
    const messageWithUserId = {
      ...message,
      userId: userId || "anonymous",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const docRef = await addDoc(collection(db, "messages"), messageWithUserId);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const uploadImage = async (file: File, userId: string) => {
  return new Promise<string>(async (resolve, reject) => {
    if (!file) {
      reject(new Error("No file provided"));
      return;
    }

    try {
      const resizedFile = await resizeImage(file, 500, 500);
      const storage = getStorage();
      const storageRef = ref(storage, `images/${userId}/${file.name}`); // Store image in a user-specific folder
      const uploadTask = uploadBytesResumable(storageRef, resizedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Optional: Handle upload progress (if needed)
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        async () => {
          // Get the image URL after upload
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log(downloadURL);
          resolve(downloadURL);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};

export const resizeImage = (
  file: File,
  maxWidth: number,
  maxHeight: number
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      reject(new Error("Canvas context not supported"));
      return;
    }

    img.onload = () => {
      let width = img.width;
      let height = img.height;

      // Calculate new dimensions while maintaining aspect ratio
      if (width > maxWidth || height > maxHeight) {
        const aspectRatio = width / height;
        if (width > height) {
          width = maxWidth;
          height = maxWidth / aspectRatio;
        } else {
          height = maxHeight;
          width = maxHeight * aspectRatio;
        }
      }

      // Set canvas size and draw resized image
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      // Convert canvas to Blob
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("Image resizing failed"));
        }
      }, file.type);
    };

    img.onerror = (error) => reject(error);
    img.src = URL.createObjectURL(file); // Load image into canvas
  });
};

export const deleteImage = async (imageUrl: string) => {
  try {
    const storage = getStorage();
    const filePath = imageUrl.split("/o/")[1].split("?")[0]; // Extract path
    const decodedPath = decodeURIComponent(filePath); // Decode URL encoding

    const imageRef = ref(storage, decodedPath);
    await deleteObject(imageRef);
    console.log("Previous image deleted successfully.");
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};
