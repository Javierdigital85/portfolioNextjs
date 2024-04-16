require("dotenv").config({
  path: `.env.local`,
});

import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;

const resend = new Resend(apiKey);

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;
    console.log(email, subject, message);
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: fromEmail,
      subject: subject,
      reply_to: email,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contact me!</p>
          <p>{message}</p>
        </>
      ),
    });
    if (error) {
      return Response.json({ error });
    }
    console.log(data);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
