const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");
const multer = require("multer");

// File Storage

const FileStorageEngine = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(
      null,
      (req.body.filename = file.originalname
        .split(" ")
        .join("_")
        .split(",")
        .join("_")
        .split("#")
        .join("_")
        .split("A")
        .join("_"))
    );

    // req.body.filename.pop();
  },
  destination: (req, file, cb) => {
    if (file.fieldname === "image") {
      cb(null, "./public/assets/images");
    } else if (file.fieldname === "file") {
      cb(null, "./public/assets/uploads");

      // req.body.filename = file.filename;
      {
      }
    }
  },
  //  console.log(file)
});

const upload = multer({ storage: FileStorageEngine });

//Upload Endpoint
route.post("/get", (req, res) => {
  const UploadObj = {
    size: req.body.size,
  };
  res.send(UploadObj);

  console.log(UploadObj);
});

route.post("/uploader", upload.any(), controller.create);
route.post("/uploadersong", upload.any(), controller.create3);

route.post("/upload", controller.create2);

route.get("/uploader", controller.getdata);

route.put("/uploader/:id", controller.update);

route.delete("/uploader/:id", controller.delete);

module.exports = route;
