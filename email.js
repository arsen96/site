const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Bienvenue <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  sendMail(req.body, info => {
    console.log(`The mail has beed send 😃`);
    res.send(info);
  });
});

async function sendMail(data, callback) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  const mailOptions = {
    from: `${data.email}`, 
    to: details.email, 
    subject: data.subject, 
    html: `<p>${data.firstName} ${data.lastName} ${data.tel}</p> <br/>
      <h3>${data.content}</h3>`, 
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}