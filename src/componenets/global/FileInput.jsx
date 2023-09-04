import React, { useRef, useState } from "react";
import Image from "../../assets/image-plus.svg";
import FormSlider from "./FormSlider";

function FileInput() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [files, setFiles] = useState([]);
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

  const onFileInputChange = (e) => {
    let selectedFiles = Array.from(e.target.files); // Convert FileList to an array

    if (files.length + selectedFiles.length <= 30) {
      // Only update if the total number of files is <= 30
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    } else {
      alert("You can only upload up to 30 files at a time.");
    }
  };

  const onBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full mt-5">
      <div className="space-y-1">
        <p className="text-[#312245] text-base font-bold leading-5">
          Upload Property Pictures
        </p>
        <p className="text-[#5A4278] text-sm font-medium leading-4">
          Up to 30 Images
        </p>
      </div>
      <div
        className={`flex w-full flex-col mt-3 items-center lg:py-32 md:py-20 py-14 px-8 ${
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
          onChange={onFileInputChange}
          accept=".png,.jpeg,.jpg,.mp4"
          multiple
        />
        <button
          className="text-xs font-medium leading-4"
          onClick={onBrowseClick}
        >
          Supports : JPEG,JPG,PNG Video
        </button>
      </div>
      {files?.length > 0 ? <FormSlider files={files} /> : null}
    </div>
  );
}

export default FileInput;