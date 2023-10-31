import React from "react";
import { Field, useFormikContext, Formik, Form } from "formik";

const ImageUploadField = ({ name }) => {
  const { setFieldValue } = useFormikContext();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFieldValue(name, file);
  };

  return (
    <Field name={name}>
      {({ field, form }) => (
        <div className="relative inline-block">
          <img
            src={
              field.value instanceof File
                ? URL.createObjectURL(field.value)
                : field.value
            }
            alt=""
            className="w-32 h-32 rounded-full object-cover"
          />
          <input
            type="file"
            id={name}
            name={name}
            accept="image/*"
            onChange={(e) => {
              handleImageChange(e);
              field.onChange(e);
            }}
            className="absolute bottom-2 right-2 opacity-0 cursor-pointer"
          />
          <label
            htmlFor={name}
            className="absolute bottom-0 right-0 cursor-pointer"
          >
            <span role="img" aria-label="upload" className="text-2xl">
              📁
            </span>
          </label>
          {form.touched[name] && form.errors[name] ? (
            <div className="text-red-600">{form.errors[name]}</div>
          ) : null}
        </div>
      )}
    </Field>
  );
};

// Usage in a Formik form
<Formik
  initialValues={{
    image: "", // Initialize with your image URL or a File object if editing
  }}
  onSubmit={(values) => {
    // Handle form submission here
  }}
>
  {({ handleSubmit }) => (
    <Form onSubmit={handleSubmit}>
      <ImageUploadField name="image" />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
      >
        Submit
      </button>
    </Form>
  )}
</Formik>;
export default ImageUploadField;
