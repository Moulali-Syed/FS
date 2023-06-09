const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

//adding middleware
fileSchema.post('save', async function (doc) {
  //doc - parameter refers to the entry that is created in DB
  try {
    console.log('From Schema ', doc);

    //create transporter
    //shift this configuration under config folder
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    //send mail
    let info = await transporter.sendMail({
      from: `Shopping App`,
      to: doc.email,
      subject: 'New File uploaded on Cloudinary',
      html: `<h2>Hi There</h2>
      <p>File Uploaded successfully View Here: <a href="${doc.imageUrl}">${doc.imageUrl}</a> </p>`,
    });

    console.log('INFO', info);
  } catch (err) {
    console.error(err);
  }
});
module.exports = mongoose.model('File', fileSchema);
