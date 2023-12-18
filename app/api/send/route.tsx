// import { EmailTemplate } from "../../../components/EmailTemplate";
import { EmailRequest } from "@/app/components/typings";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);
const fromEmail = process.env.FROM_EMAIL;
export async function POST(req: any, res: any) {
  const { body } = await req.json();
  const { email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      from: fromEmail || "",
      to: ["ishajn2812@gmail.com", email],
      subject,
      react: (
        <div>
          <p>{message}</p>
        </div>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
