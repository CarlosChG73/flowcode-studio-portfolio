/* global process */

// Librería para enviar correos desde Node.js
import nodemailer from 'nodemailer'

// Escapa texto para evitar inyección básica en HTML
function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

// Función serverless para manejar el formulario de contacto
export default async function handler(request, response) {
  // Solo permite solicitudes POST
  if (request.method !== 'POST') {
    return response.status(405).json({
      ok: false,
      message: 'Método no permitido.',
    })
  }

  try {
    const { name, email, message, company } = request.body || {}

    // Honeypot antispam: este campo debe llegar vacío
    if (company) {
      return response.status(200).json({
        ok: true,
        message: 'Mensaje recibido.',
      })
    }

    // Validación básica
    if (!name || !email || !message) {
      return response.status(400).json({
        ok: false,
        message: 'Todos los campos son obligatorios.',
      })
    }

    // Validación simple de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return response.status(400).json({
        ok: false,
        message: 'El correo no tiene un formato válido.',
      })
    }

    // Validación de variables de entorno
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      return response.status(500).json({
        ok: false,
        message: 'El servidor no tiene configurado el envío de correo.',
      })
    }

    // Configuración SMTP segura mediante variables de entorno
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Datos seguros para el HTML del correo
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replaceAll('\n', '<br />')

    // Envío del correo
    await transporter.sendMail({
      from: `"Flowcode Studio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nuevo mensaje de ${name} desde el portafolio`,
      text: `
Nombre: ${name}
Correo: ${email}

Mensaje:
${message}
      `,
      html: `
        <h2>Nuevo mensaje desde el portafolio</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Correo:</strong> ${safeEmail}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage}</p>
      `,
    })

    return response.status(200).json({
      ok: true,
      message: 'Mensaje enviado correctamente.',
    })
  } catch {
    return response.status(500).json({
      ok: false,
      message: 'No se pudo enviar el mensaje. Intenta nuevamente.',
    })
  }
}