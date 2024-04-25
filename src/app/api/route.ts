import { sendMail } from '../../utils/mail';

export const POST = async (req: Request) => {
  const { formData, timestamp } = await req.json();
  const { SMTP_EMAIL } = process.env;

  const subject = "HP Reservation";
  const name = `${formData.name || ""} ${formData.surname || ""}`;

  const consultationDataFormatted = formData.consultationData
    .map((entry: { date: any; timeSlot: any }) => {
      const { date, timeSlot } = entry;
      // Check if date and timeSlot are defined before including them
      if (date && timeSlot) {
        return `<p>Date: ${date}</p><p>Time Slot: ${timeSlot}</p>`;
      } else {
        return ""; // Return an empty string if date or timeSlot is undefined
      }
    })
    .join("<br>");
  
    const body = `
    <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
    <h1 style="color: #8C1515; font-size: 28px; text-align: center; margin-bottom: 20px;">🎉 HP Reservation Form 🎉</h1>
    
    <div style="background-color: #ffffff; border-radius: 10px; padding: 20px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #8C1515; font-size: 24px; margin-bottom: 15px;">Reservation Details</h2>
      <h1 style="font-size: 16px; font-weight: 600; margin-bottom: 5px;">📝 Selected Plan:</h1>
      <p style="font-size: 16px;">${formData.selectedPlan || ""}</p>
      <h1 style="font-size: 16px; font-weight: 600; margin-bottom: 5px;">🔬 Selected Tests:</h1>
      <p style="font-size: 16px;">${formData.selectedTests?.join(", ") || ""}</p>
      
      <div style="display: flex; flex-wrap: wrap;">
        <div style="flex: 1; margin-right: 20px;">
          <h3 style="color: #8C1515; font-size: 18px; margin-bottom: 10px;">Personal Information</h3>
          <p style="font-size: 16px;"><span style="font-weight: 600;">👤 Name:</span> ${name}</p>
          <p style="font-size: 16px;"><span style="font-weight: 600;">📅 Date of Birth:</span> ${formData.dateOfBirth || ""}</p>
          <p style="font-size: 16px;"><span style="font-weight: 600;">👴 Age:</span> ${formData.age || ""}</p>
          <p style="font-size: 16px;"><span style="font-weight: 600;">📞 Phone:</span> ${formData.phoneNumber || ""}</p>
          <p style="font-size: 16px;"><span style="font-weight: 600;">📧 Email:</span> ${formData.email || ""}</p>
          <p style="font-size: 16px;"><span style="font-weight: 600;">🏠 Address:</span> ${formData.address || ""}</p>
          <p style="font-size: 16px;"><span style="font-weight: 600;">🗓️ Consultation History:</span> ${formData.consultationHistory || ""}</p>
        </div>
        <div style="flex: 1;">
          <h3 style="color: #8C1515; font-size: 18px; margin-bottom: 10px;">Reservation Info</h3>
          <p style="font-size: 16px;"><span style="font-weight: 600;">📝 Additional Requests:</span> ${formData.requests || ""}</p>
          <p style="font-size: 16px;"><span style="font-weight: 600;">⚙️ Presence of Metal in Body:</span> ${formData.metalInBody || ""}</p>
          <p style="font-size: 16px;"><span style="font-weight: 600;">📝 Requests:</span> ${formData.requests || ""}</p>
        </div>
      </div>
      
      <hr style="border: none; border-top: 1px solid #8C1515; margin: 20px 0;">
      
      <h3 style="color: #8C1515; font-size: 18px; margin-bottom: 10px;">Consultation Data</h3>
      ${consultationDataFormatted}
      
    </div>
    
    <p style="font-size: 16px;">📅 Timestamp: ${timestamp || ""}</p>
    
    <p style="color: #333; font-size: 14px; text-align: center; margin-top: 20px;">© 2024 HP. All rights reserved.</p>
  </div>
  `;

  
  try {
    await sendMail({ to: `${SMTP_EMAIL}`, name, subject, body });
    return Response.json({ success: true });
  } catch (e) {
    return new Response(JSON.stringify({ success: false }), {
      status: 500
    });
  }
}
