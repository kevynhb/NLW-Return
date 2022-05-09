import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "./mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",  
  port: 2525,
  auth: {
    user: "b91b734a210b54",
    pass: "fb2162db4be3ae"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject,body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Kevyn Bicas <kevynh36@gmail.com>',
      subject,
      html: body,
  })
  }
}