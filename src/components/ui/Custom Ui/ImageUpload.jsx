import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { X } from "lucide-react";

export default function ImageUpload({ image, setImage }) {
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(Object.assign(file, { preview: URL.createObjectURL(file) }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const removeImage = () => setImage(null);

  return (
    <div className="inline-flex relative">
      {/* Upload Box */}
      <div
        {...getRootProps()}
        className="w-[50vw] h-[50vw] sm:w-[10vw] sm:h-[10vw] flex items-center justify-center bg-platformGreen/30 border-2 border-dashed border-platformGreen hover:bg-platformGreen/60 transition rounded-lg cursor-pointer relative overflow-hidden"
      >
        <input {...getInputProps()} />
        {image ? (
          <img
            src={image.preview}
            alt="Uploaded"
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="text-gray-600 text-xs text-center">
            Drag & drop or click to upload
          </p>
        )}
      </div>

      {/* Remove Button */}
      {image && (
        <button
          onClick={removeImage}
          className="absolute bg-red-500 text-white p-1 rounded-full shadow-md hover:bg-red-600 transition top-2 right-2"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
