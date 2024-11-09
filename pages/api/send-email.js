import nodemailer from 'nodemailer';

const toEmail = "contact@mauritaniahorizons.com"
const fromEmail = "maurtianiahorizons@outlook.com"
const smtpUser = "maurtianiahorizons@outlook.com"
const smtpPass = "LOUlou95@"

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com', // Outlook SMTP server
  port: 587, // Port for Outlook SMTP
  secure: false, // true for 465, false for other ports
  auth: {
    user: smtpUser, // Your Outlook email address
    pass: smtpPass // Your Outlook email password
  }
})







export default function handler(req, res) {
  let body = req.body;
  transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    subject: 'Nouveaux message de contact de votre site web',
    html: `<div>

      <h1>Sujet:${req.body.subject}</h1>
      <h1>Name:${req.body.email}</h1>
      <h3>Email:${req.body.email}</h3>
      <p>Message:${req.body.message}</p>
    </div>`
  })
    .then((r) => res.status(200).send({ status: 'OK', ...r }))
    .catch((error) => res.status(500).send({ status: 'error', error }))

}
