const File = require('../models/File');
const cloudinary = require('cloudinary').v2;

//local file upload handler function
exports.localFileUpload = async (req, res) => {
  try {
    //fetch file
    const file = req.files.file;
    console.log('FILE ', file);

    //the path on which i want to store on server
    let path =
      __dirname + '/files/' + Date.now() + `.${file.name.split('.')[1]}`;
    console.log(path);

    //add path to move function
    file.mv(path, (err) => {
      if (err) console.log(err);
    });

    res.json({
      success: true,
      message: 'Local File Uploaded successfully',
    });
  } catch (err) {
    console.log(err);
  }
};

function isFileTypeSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  console.log(file.tempFilePath);
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = 'auto';
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log(file);

    //validate file type
    const supportedTypes = ['jpg', 'jpeg', 'png'];
    const fileType = file.name.split('.')[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        msg: 'File Type not supported',
      });
    }

    //file format is supported , so upload it
    //we are passing file and the folder name we created in cloudinary
    const response = await uploadFileToCloudinary(file, 'learncode');
    console.log(response);

    //save entry to DB
    const fileData = await File.create({
      name,
      email,
      tags,
      imageUrl: response.secure_url,
    });

    return res.json({
      success: true,
      imageUrl: response.secure_url,
      message: 'Image Successfully uploaded',
    });
  } catch (err) {
    console.error(err);
    return res.json({
      success: false,
      msg: err.message,
    });
  }
};

//video upload
exports.videoUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.videoFile;

    //validation
    const supportedTypes = ['mp4', 'mov'];
    const fileType = file.name.split('.')[1].toLowerCase();
    console.log('File Type ', fileType);

    //Add a upper limit of 5MB for video file
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        msg: 'File Format not supported',
      });
    }

    console.log('Uploading file');
    const response = await uploadFileToCloudinary(file, 'learncode');
    console.log(response);

    //db entry
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    return res.status(200).json({
      success: true,
      imageUrl: response.secure_url,
      message: 'Image Successfully uploaded',
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      data: err.message,
      msg: 'Something went wrong',
    });
  }
};

//Image reducer upload
exports.imageReducerUpload = async (req, res) => {
  try {
    //data fetch
    const { name, email, tags } = req.body;
    console.log(name, email, tags);

    const file = req.files.imageFile;
    console.log(file);

    //validation
    const supportedTypes = ['jpg', 'jpeg', 'png'];
    const fileType = file.name.split('.')[1].toLowerCase();
    console.log('File Type ', fileType);

    //add a upper limit of file size 5MB
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: 'File Format not supported',
      });
    }

    console.log('Uploading File');
    //compress the file , for this we send a parameter that specifies the qaulity - here 90
    const response = await uploadFileToCloudinary(file, 'learncode', 90);
    console.log(response);

    //db entry
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    return res.status(200).json({
      success: true,
      imageUrl: response.secure_url,
      message: 'Image Successfully uploaded',
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      data: err.message,
      msg: 'Something went wrong',
    });
  }
};
