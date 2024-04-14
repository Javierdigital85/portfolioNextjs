require("dotenv").config();
import { Resend } from "resend";

//const resend = new Resend(process.env.RESEND_API_KEY);
//const MyEmail = process.env.FROM_EMAIL;
// console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);
// console.log("RESENDDDDDDDDD", resend);
const resend = new Resend("re_S1ZwbAyX_NHH7NHsucYqQXM2NJt2fVS88");

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;
    console.log(email, subject, message);
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["javiercolodro@gmail.com"],
      subject: subject,
      reply_to: email,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contact me!</p>
          <p>{message}</p>
        </>
      ),
      // react: EmailTemplate({ firstName: 'John' }),
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

// // import { EmailTemplate } from "../../../components/EmailTemplate";
// import { Resend } from "resend";

// // const resend = new Resend(process.env.RESEND_API_KEY);
// const resend = new Resend("re_S1ZwbAyX_NHH7NHsucYqQXM2NJt2fVS88");

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: "javiercolodro@gmail.com",
//       to: ["javiercolodro@gmail.com"],
//       subject: "Hello world",
//       react: (
//         <>
//           <p>Email Body</p>
//         </>
//       ),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }
/////////////////////////////////////////////////////////////////////////////

// import { EmailTemplate } from "../../../components/EmailTemplate";
// import { Resend } from "resend";

// const resend = new Resend("re_UytNKp3u_LWAgvkcocME3nCX5FpLkxFQR");
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { body } = await  req.json();
//   const { email, subject, message } = body;
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: ["javiercolodro@gmail.com", email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contact us</p>
//           <p>New message submmited:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }

// import { Resend } from "resend";

// // const resend = new Resend(process.env.RESEND_API_KEY);
// const resend = new Resend("re_UytNKp3u_LWAgvkcocME3nCX5FpLkxFQR");

// resend.emails.send({
//   from: "onboarding@resend.dev",
//   to: "javiercolodro@gmail.com",
//   subject: "Hello World",
//   html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
// });
