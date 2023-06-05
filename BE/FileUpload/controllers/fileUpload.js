const File = require('../models/File');

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
