import React from "react";

const UploadImages = () => {
  return (
    <div>
      <div>
        <label htmlFor="upload-images">
          <div
            className="border rounded-xl border-dotted 
        border-primary bg-blue-50 p-4"
          >
            {" "}
            +{" "}
          </div>{" "}
        </label>
      </div>
      <div>
        <input
          type="file"
          multiple={true}
          id="upload-images"
          className="opacity"
        />
      </div>
    </div>
  );
};
export default UploadImages;
