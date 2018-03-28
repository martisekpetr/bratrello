var nodemailer = require('nodemailer');

var state = {
  transporter: null,
}

exports.init = function(){
  state.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "bratrello@gmail.com",
        pass: "KatapultKakaFurt"
    }
  });
}

exports.sendMail = function(params){ 
  var mail = {
    from: "BraTrello <bratrello@gmail.com>",
    to: params.to || "martisekpetr@gmail.com",
    subject: params.subject || "Your BraTrello reminder",
    text: params.text || 'No text',
    html: params.html || 'No html',
  }

  let status;
  state.transporter.sendMail(
    mail,
    function(error, info) {
      if (error) {
          console.log(error);
          status = "error";
      } else{
          console.log(`Message sent: ${info.messageId}\nfrom ${info.envelope.from} to: ${info.envelope.to}`);
          status = "ok"
      }
  });
  return status;
}
