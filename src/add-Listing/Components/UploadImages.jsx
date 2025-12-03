import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { supabase } from "../../../Config/SupabaseImageUpload";

const UploadImages = () => {
  const [selectedFileList, setSelectedFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState([]);

  const onFileSelected = (event) => {
    const files = event.target.files;
    for (let i = 0; i < (files?.length || 0); i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image) => {
    const result = selectedFileList.filter((item) => item !== image);
    setSelectedFileList(result);
  };

  // ⬇⬇ ADDING UPLOAD LOGIC HERE ⬇⬇
  const uploadImages = async () => {
    try {
      setUploading(true);
      const urls = [];

      for (const file of selectedFileList) {
        const fileName = `${Date.now()}-${file.name}`;

        // Upload each file
        const { data, error } = await supabase.storage
          .from("car-image") // <-- change bucket name
          .upload(fileName, file);

        if (error) throw error;

        // Get public URL
        const { data: publicData } = supabase.storage
          .from("car-image")
          .getPublicUrl(fileName);

        urls.push(publicData.publicUrl);
      }

      setUploadedUrls(urls);
      alert("All images uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };
  // ⬆⬆ END UPLOAD LOGIC ⬆⬆

  return (
    <div>
      <h2 className="font-medium text-xl my-4 ">Upload car Image</h2>

      <div className="grid grid-col-2 md:grid-cols-4 gap-5 lg:grid-cols-6">
        {selectedFileList.map((image, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              className="absolute m-2 text-lg text-primary cursor-pointer"
              onClick={() => onImageRemove(image, index)}
            />
            <img
              src={URL.createObjectURL(image)}
              alt="image"
              className="w-full h-[110px] object-cover rounded-xl border"
            />
          </div>
        ))}

        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted text-center border-primary text-primary bg-blue-50 p-10 hover:shadow cursor-pointer">
            +
          </div>
        </label>
      </div>

      <input
        type="file"
        multiple
        id="upload-images"
        className="hidden"
        onChange={onFileSelected}
      />

      {/* UPLOAD BUTTON */}
      <button
        onClick={uploadImages}
        disabled={uploading || selectedFileList.length === 0}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-xl">
        {uploading ? "Uploading..." : "Upload Images"}
      </button>

      {/* SHOW UPLOADED URLs */}
      {uploadedUrls.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium">Uploaded Image URLs:</h3>
          <ul className="text-sm">
            {uploadedUrls.map((url, i) => (
              <li key={i} className="break-all text-blue-600">
                {url}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadImages;
