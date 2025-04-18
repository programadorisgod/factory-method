import { createTransport } from "nodemailer";
import dotenv from 'dotenv'

dotenv.config()

export const transporter = createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS,
  },
});