import { createTransport } from "nodemailer";

export const transporter = createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS,
  },
});