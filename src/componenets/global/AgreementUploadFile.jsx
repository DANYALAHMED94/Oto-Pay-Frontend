import React, { useRef, useState } from "react";
import Image from "../../assets/image-plus.svg";

function AgreementUploaFile({
  setProperty,
  setCurrentStep,
  complete,
  setComplete,
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [files, setFiles] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  const fileInputRef = useRef(null);

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    let droppedFiles = Array.from(e.dataTransfer.files); // Convert FileList to an array

    if (files.length + droppedFiles.length <= 30) {
      // Only update if the total number of files is <= 30
      setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    } else {
      alert("You can only upload up to 30 files at a time.");
    }
  };

  const onBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full mt-5">
      <div
        className={`flex w-full flex-col mt-3 items-center lg:py-20 md:py-20 py-14 px-8 ${
          isDragOver ? "bg-gray-300" : "bg-transparent"
        } border-2 border-dashed border-[#866FA3] rounded`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <label htmlFor="file-upload" className="cursor-pointer">
          <img src={Image} alt="drag&drop" />
        </label>
        <label
          className="block text-[#312245] cursor-pointer text-center text-2xl font-normal leading-8 mb-2"
          htmlFor="file-upload"
        >
          Drag & Drop <br /> or
          <span className="font-semibold"> &nbsp;Browse</span>
        </label>
        <input
          className="hidden"
          type="file"
          id="file-upload"
          ref={fileInputRef}
          onChange={(e) =>
            setPreviewImage(URL.createObjectURL(e.target.files[0]))
          }
          accept=".png,.jpeg,.jpg,.mp4"
          multiple
        />
        <button
          className="text-xs font-medium leading-4"
          onClick={onBrowseClick}
        >
          Supports : JPEG,JPG,PNG
        </button>
      </div>
      <div className="w-full h-auto">
        <p className="text-base font-bold py-5 text-[#18171B]">
          Preview of your agreement
        </p>
        <div>
          {previewImage ? (
            <img src={previewImage} alt="agreement" className="w-full h-full" />
          ) : null}
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-end gap-4 py-3">
        <button
          type="button"
          className="md:text-sm text-xs text-[#312245] font-bold lg:w-[244px] px-6 py-3 h-12 mt-3 border-2 border-[#312245] rounded-lg"
          // onClick={() => setShowModal(false)}
        >
          Go, Back
        </button>

        {!complete && (
          <button
            type="button"
            // disabled={isSubmitting}
            onClick={() => {
              setProperty("success");
              setComplete(true);
              //   setCurrentStep((prev) => prev + 1);
            }}
            className="flex items-center justify-center lg:w-[244px] font-bold text-sm px-6 py-4 h-12 bg-[#17062F] mt-3 text-white rounded-lg"
          >
            <p className="ml-2 md:text-sm text-xs">Continue</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame">
                <path
                  id="Vector"
                  d="M16.15 13.001H5C4.71667 13.001 4.479 12.905 4.287 12.713C4.095 12.521 3.99934 12.2837 4 12.001C4 11.7177 4.096 11.48 4.288 11.288C4.48 11.096 4.71734 11.0004 5 11.001H16.15L13.3 8.15104C13.1 7.95104 13.004 7.71771 13.012 7.45104C13.02 7.18437 13.116 6.95104 13.3 6.75104C13.5 6.55104 13.7377 6.4467 14.013 6.43804C14.2883 6.42937 14.5257 6.52537 14.725 6.72604L19.3 11.301C19.4 11.401 19.471 11.5094 19.513 11.626C19.555 11.7427 19.5757 11.8677 19.575 12.001C19.575 12.1344 19.554 12.2594 19.512 12.376C19.47 12.4927 19.3993 12.601 19.3 12.701L14.725 17.276C14.525 17.476 14.2877 17.572 14.013 17.564C13.7383 17.556 13.5007 17.4517 13.3 17.251C13.1167 17.051 13.0207 16.8177 13.012 16.551C13.0033 16.2844 13.0993 16.051 13.3 15.851L16.15 13.001Z"
                  fill="#FDFCFF"
                />
              </g>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default AgreementUploaFile;
