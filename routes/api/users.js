const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = mongoose.model("User");
const { 
  singlePublicFileUpload, 
  multiplePublicFileUpload, 
  singlePrivateFileUpload, 
  multiplePrivateFileUpload, 
  retrievePrivateFile, 
  singleMulterUpload, 
  multipleMulterUpload
} = require("../../awsS3");

router.get("/", async (req, res) => {
  let users = await User.find({});
  
  // if single image is private file:
  users = users.map(user => {
    user.image = retrievePrivateFile(user.image);
    return user;
  });

  res.json(users);
});

// single private file
router.post("/", singleMulterUpload("image"), async (req, res) => {
  const userData = req.body;
  userData.image = await singlePrivateFileUpload(req.file);
  const user = new User(userData);
  await user.save();
  user.image = retrievePrivateFile(user.image);
  res.json(user);
});

// // multiple public files
// router.post("/", multipleMulterUpload("images"), async (req, res) => {
//   const userData = req.body;
//   userData.images = await multiplePublicFileUpload(req.files);
//   const user = new User(userData);
//   await user.save();
//   res.json(user);
// });

module.exports = router;
