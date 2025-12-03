import Header from "@/ScreenComponents/Header";
import React from "react";
import CarDetails from "@/Shared/CarDetails";
import InputField from "./Components/inputField";
import DropDownField from "./Components/DropDownField";
import { useState } from "react";

import TextAreaField from "./Components/TextAreaField";
import { Separator } from "@/components/ui/separator";

import Features from "@/Shared/Features.json";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { db } from "../../Config/index";
import { CarListing } from "../../Config/schema";
import UploadImages from "./Components/UploadImages";

const AddListing = () => {
  const [formData, setFormData] = useState([]);

  const [featuresData, setfeaturesData] = useState([]);
  // used to cature input from from
  const handleInputChange = (name, value) => {
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log(formData);
  };
  // used to save selected Feature List
  const handleFeatureChange = (name, value) => {
    setfeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(featuresData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const result = await db.insert(CarListing).values({
        ...formData,
        features: featuresData,
      });
      if (result) {
        console.log("data saved");
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div>
      <Header />
      <h2 className="font-bold text-4xl">Add new Listing</h2>
      <form className="p-10 border rounded-xl mt-10">
        <div>
          <h2 className="font-medium text-xl mb-6">Car Detail</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {CarDetails.carDetails.map((type, index) => (
              <div key={index}>
                <label className="text-sm">
                  {type.label}
                  {type.required && <span className="text-red-500">*</span>}
                </label>
                {type.fieldType == "text" || type.fieldType == "number" ? (
                  <InputField
                    item={type}
                    handleInputChange={handleInputChange}
                  />
                ) : type.fieldType == "dropdown" ? (
                  <DropDownField
                    item={type}
                    handleInputChange={handleInputChange}
                  />
                ) : type.fieldType == "textarea" ? (
                  <TextAreaField
                    item={type}
                    handleInputChange={handleInputChange}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <Separator className="my-6" />
        {/*  feature List */}
        <div>
          <h2 className="font-medium text-xl my-6">Features </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
            {Features.features.map((item, index) => (
              <div key={index} className="flex items-center gap-1.5 ">
                <Checkbox
                  onCheckedChange={(value) =>
                    handleFeatureChange(item.name, value)
                  }
                />{" "}
                <h1>{item.label}</h1>
              </div>
            ))}
          </div>
        </div>
        {/* Car Images */}
        <Separator className="my-10" />

        <div className="mt-10 flex justify-end">
          <Button type="submit" onClick={(e) => onSubmit(e)}>
            Submit
          </Button>
        </div>
      </form>
      <UploadImages />
    </div>
  );
};
export default AddListing;
