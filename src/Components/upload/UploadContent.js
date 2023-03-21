import React, { useReducer } from "react";
import "./UploadContent.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  changeinput,
  addtag,
  removetag,
  fileinput,
  typeinput,
} from "../Formslice";
import { useDispatch, useSelector } from "react-redux";

// const validationSchema = yup.object({
//   name : yup.string().min(3,'name is too short').required('name is required'),
//   image:yup.mixed().test("file", "You need to provide a file", (value) => {
//     if (value.length > 0) {
//       return true;
//     }
//     return false;
//     }),
//     keywords:yup.array().min(1).max(4)
// })

const UploadContent = () => {
  //  console.log(state);
  const dispatch = useDispatch();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("Upload:");
  const [uploadedFile, setUploadedFile] = useState({});
  const [img, setImg] = useState(null);
  const [touch, setTouch] = useState({
    file: false,
    image: false,
    name: false,
    keywords: false,
  });

  const handleFile = (e) => {
    if (e.target.name === "file") {
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
    } else if (e.target.name == "image") {
      setImg(e.target.files[0]);
    }
    let name = e.target.files[0].name;
    let formattedname = name
      .split(" ")
      .join("")
      .split(",")
      .join("")
      .split("#")
      .join("");

    dispatch(fileinput({ name: e.target.name, value: formattedname }));
  };

  function remTag(index) {
    dispatch(removetag(index));
  }

  const fornametext = (e) => {
    dispatch(changeinput({ name: e.target.name, value: e.target.value }));
  };
  const handleType = (e) => {
    dispatch(typeinput({ value: e.target.value }));
  };
  const fortext = (e) => {
    console.log(e.target.name);

    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(addtag(value));
      e.target.value = "";
    }
  };

  const handleBlur = (e) => {
    setFormErrors(validate(form));
    const truetouch = {
      ...touch,
      [e.target.name]: true,
    };
    setTouch(truetouch);
    // console.log(touch);
  };

  const Reset = () => {
    setFormErrors(validate(form));
    setTouch({ file: false, image: false, name: false, keywords: false });
  };
  const form = useSelector((state) => state.form);
  console.log(form);

  const validate = (values) => {
    const errors = {};
    if (!values.file) {
      errors.file = "file is required !!!";
    }
    if (!values.name) {
      errors.name = "name is required !!!";
    }
    if (!values.image) {
      errors.image = "No image Uploaded !!!";
    }
    if (values.keywords.length == 0) {
      errors.keywords = "Please select at least one keyword !!!";
    } else if (values.keywords.length > 4) {
      errors.keywords = "Not more than 4 Keywords!!";
    }
    return errors;
  };

  const postData = async (formdata) => {
    try {
      const res = await axios.post("/uploader", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      console.log("submitted");
    } catch (err) {
      if (err.status === 500) {
        console.log("there was a problem with the server");
      } else {
        console.log(err || "error from post");
      }
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    // alert(JSON.stringify(values))
    console.log(isSubmit);
    setFormErrors(validate(form));

    // console.log(form);
    // console.log(formErrors);
    // console.log('submited');
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("filename", file.name);
    formdata.append("image", img);
    formdata.append("size", file.size);
    formdata.append("imagename", form.image);
    formdata.append("packname", form.name);
    formdata.append("keywords", form.keywords);
    formdata.append("artiste", form.artiste);
    formdata.append("type", form.type);

    if (Object.keys(formErrors).length == 0) {
      // const dod = formdata.getAll('file')
      // console.log(dod);

      postData(formdata);
    } else {
      console.log(formErrors);
      console.log(isSubmit);
    }

    setTimeout(() => {
      setIsSubmit(false);
    }, 3000);

    // console.log(formdata.get("size"));
  };

  return (
    <div className='container'>
      {
        Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className='success'>Uploaded Successfully!!!</div>
        ) : null
        // <pre>{JSON.stringify(form, undefined, 2)}</pre>
      }

      <form onSubmit={(e) => e.preventDefault()}>
        {uploadedFile ? (
          <div className='imgbox'>
            <h3 style={{ justifyContent: "center" }}>
              {uploadedFile.fileName}
            </h3>
            <img style={{ width: "50%" }} src={uploadedFile.filePath} alt='' />
          </div>
        ) : null}

        {/* <Select
          name='type'
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        /> */}

        <label htmlFor='type'>Type:</label>
        <select defaultValue={"Samplepack"} onChange={handleType}>
          <option>Samplepack</option>
          <option>Song</option>
          <option>Art</option>
          <option>Merch</option>
        </select>
        <label htmlFor='image'>Image:</label>

        <input
          type='file'
          name='image'
          accept='image/jpg'
          onBlur={handleBlur}
          onChange={handleFile}
          onFocus={Reset}
        />
        {
          <div
            className={
              touch.image || (isSubmit && formErrors.image)
                ? "opacity-100  duration-[1500ms] ease-linear"
                : "opacity-0"
            }
          >
            <p className='text-sm text-myGreen bg-myYellow p-[2px] transition-all duration-1000'>
              {formErrors.image}
            </p>
          </div>
        }

        <label htmlFor='Name'>Name:</label>
        <input
          type='text'
          name='name'
          onBlur={handleBlur}
          onChange={fornametext}
          onFocus={Reset}
          required={true}
        />
        {
          <div
            className={
              touch.name || (isSubmit && formErrors.name)
                ? "opacity-100  duration-[1500ms] ease-linear"
                : "opacity-0"
            }
          >
            <p className='text-sm text-myGreen bg-myYellow p-[2px] transition-all duration-1000'>
              {formErrors.name}
            </p>
          </div>
        }
        <label htmlFor='Artiste'>Artiste:</label>
        <input
          type='text'
          name='artiste'
          onBlur={handleBlur}
          onChange={fornametext}
          onFocus={Reset}
          required={true}
        />
        {
          <div
            className={
              touch.name || (isSubmit && formErrors.artiste)
                ? "opacity-100  duration-[1500ms] ease-linear"
                : "opacity-0"
            }
          >
            <p className='text-sm text-myGreen bg-myYellow p-[2px] transition-all duration-1000'>
              {formErrors.artiste}
            </p>
          </div>
        }

        <label htmlFor='Keys'>Keywords: </label>
        <div className='keywords'>
          {form.keywords.map((keywords, index) => {
            return (
              <div className='tag-item' key={index}>
                <span className='text'>{keywords}</span>
                <span className='close' onClick={() => remTag(index)}>
                  &times;
                </span>
              </div>
            );
          })}

          <input
            type='text'
            name='keywords'
            placeholder='Keywords'
            onBlur={handleBlur}
            onFocus={Reset}
            onKeyDown={fortext}
          />
        </div>
        {
          <div
            className={
              touch.keywords || (isSubmit && formErrors.keywords)
                ? "opacity-100  duration-[1500ms] ease-linear"
                : "opacity-0"
            }
          >
            <p className='text-sm text-myGreen bg-myYellow p-[2px] transition-all duration-1000'>
              {formErrors.keywords}
            </p>
          </div>
        }
        <label htmlFor='file'>{filename}</label>
        <input
          type='File'
          name='file'
          id='sofia'
          onBlur={handleBlur}
          onChange={handleFile}
          onAbort={Reset}
        />
        {
          <div
            className={
              touch.file || (isSubmit && formErrors.file)
                ? "opacity-100  duration-[1500ms] ease-linear"
                : "opacity-0"
            }
          >
            <p className='text-sm text-myGreen bg-myYellow p-[2px] transition-all duration-1000'>
              {formErrors.file}
            </p>
          </div>
        }

        <button
          onClick={Submit}
          disabled={false}
          type='submit'
          className='butt disabled:opacity-5'
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadContent;
