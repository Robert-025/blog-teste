const nodemailer = require("nodemailer");

export default function sendFormMail(req, res) {
  const body = req.body;

  if (!body && !body.name && !body.email && !body.phone && !body.mensagem) {
    console.log("Não exite");
    res.status(401).json({
      status:
        "Não foram informados parametros necessários para o envio do email!",
    });
  } else {
    let transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: process.env.NODEMAILER_SECURE,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
      default: {
        from: `Thiago Pereira Advogados <${process.env.NODEMAILER_USER}>`,
      },
      tls: {
        secureProtocol: "TLSv1_method",
      },
    });

    transporter
      .sendMail({
        to: `Thiago Pereira Advogados <${process.env.NODEMAILER_USER}>`,
        subject: "[THPADV] - Contato Através do Site",
        replyTo: "gabriel.santos.docs@gmail.com",
        html: `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Contato atráves do site</title></head><body style="padding: 0; margin: 0; font-family: Arial, Helvetica, sans-serif;"><div style="width: 100%; max-width: 720px; margin: 0 auto;"><div style="width: 100%; background-color: #E3DCD7; text-align: center;"><img src="https://site-thiagopereira.vercel.app/images/Logo.webp" alt="Thiago Pereira Advogado" style="height: 100px; width: 250px; margin: 20px 0"></div><div style="width: 95%; margin: 0 auto;"><h1 style="margin-top: 60px;">Temos boas notícias!</h1><span style="font-size: 14px;">Houve um novo contato atráves do site, as seguintes informações foram preenchidas no formulário:</span><p style="font-size: 14px;"><span style="font-weight: bold;">Nome: </span>${body.name}</p><p style="font-size: 14px;"><span style="font-weight: bold;">E-mail: </span>${body.email}</p><p style="font-size: 14px;"><span style="font-weight: bold;">WhatsApp: </span>${body.phone}</p><p style="font-size: 14px; margin-bottom: 40px;"><span style="font-weight: bold;">Menssagem: </span>${body.mensagem}</p><span>Boa sorte 🚀</span></div></div></body></html>`,
      })
      .then((response) => {
        res.status(200).json({ status: "E-mail enviado com sucesso!" });
        console.log(response);
      })
      .catch((error) => {
        res.status(400).json({ status: "Não foi possível enviar o e-mail" });
        console.log(error);
      });
  }
}
