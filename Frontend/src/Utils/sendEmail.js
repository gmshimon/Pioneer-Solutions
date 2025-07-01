import emailjs from '@emailjs/browser'

export const sendConsultationEmail = data => {
  // Replace with your actual EmailJS values
  const SERVICE_ID = 'service_iezxdgk'
  const TEMPLATE_ID = 'template_n2in52o'
  const PUBLIC_KEY = 'UEcZ9tAxfiOVQzzLC'

  // Optionally: adjust this if your template fields are named differently
  const templateParams = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    last: data.last,
    message: data.message
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
}

export const sendScheduleConsultation = data => {
  // Replace with your actual EmailJS values
  const SERVICE_ID = 'service_iezxdgk'
  const TEMPLATE_ID = 'template_nz4q6qx'
  const PUBLIC_KEY = 'UEcZ9tAxfiOVQzzLC'

  // Optionally: adjust this if your template fields are named differently
  const templateParams = {
    name: data.name,
    email: data.email,
    date: data.date,
    time: data.time,
    message: data.message
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
}
