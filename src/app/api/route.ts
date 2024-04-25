import { sendMail } from '../../utils/mail';

export const POST = async (req: Request) => {
  const { formData, timestamp } = await req.json();
  const { SMTP_EMAIL } = process.env;

  const localeDataJP = {
    selectedPlan: "選択されたプラン：",
    selectedTests: "選択されたテスト：",
    personalInformation: "個人情報",
    name: "名前：",
    dateOfBirth: "生年月日：",
    age: "年齢：",
    phone: "電話番号：",
    email: "メールアドレス：",
    address: "住所：",
    consultationHistory: "相談履歴：",
    reservationInfo: "予約情報",
    additionalRequests: "追加のリクエスト：",
    metalInBody: "体内の金属の存在：",
    requests: "リクエスト：",
    consultationData: "相談データ",
    timestamp: "タイムスタンプ：",
    reservedBy: "HPによって予約済み",
    allRightsReserved: "© 2024 HP. 全著作権所有。",
    metalDetails: "金属の詳細：",
    preferredContact: "優先連絡手段："
  };

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
      <h1 style="color: #8C1515; font-size: 28px; text-align: center; margin-bottom: 20px;">🎉 ${localeDataJP.reservedBy} 🎉</h1>
      
      <div style="background-color: #ffffff; border-radius: 10px; padding: 20px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #8C1515; font-size: 24px; margin-bottom: 15px;">${localeDataJP.reservationInfo}</h2>
        <h1 style="font-size: 16px; font-weight: 600; margin-bottom: 5px;">${localeDataJP.selectedPlan}</h1>
        <p style="font-size: 16px;">${formData.selectedPlan || ""}</p>
        <h1 style="font-size: 16px; font-weight: 600; margin-bottom: 5px;">${localeDataJP.selectedTests}</h1>
        <p style="font-size: 16px;">${formData.selectedTests?.join(", ") || ""}</p>
        
        <div style="display: flex; flex-wrap: wrap;">
          <div style="flex: 1; margin-right: 20px;">
            <h3 style="color: #8C1515; font-size: 18px; margin-bottom: 10px;">${localeDataJP.personalInformation}</h3>
            <p style="font-size: 16px;"><span style="font-weight: 600;">👤 ${localeDataJP.name}</span> ${name}</p>
            <p style="font-size: 16px;"><span style="font-weight: 600;">📅 ${localeDataJP.dateOfBirth}</span> ${formData.dateOfBirth || ""}</p>
            <p style="font-size: 16px;"><span style="font-weight: 600;">👴 ${localeDataJP.age}</span> ${formData.age || ""}</p>
            <p style="font-size: 16px;"><span style="font-weight: 600;">📞 ${localeDataJP.phone}</span> ${formData.phoneNumber || ""}</p>
            <p style="font-size: 16px;"><span style="font-weight: 600;">📧 ${localeDataJP.email}</span> ${formData.email || ""}</p>
            <p style="font-size: 16px;"><span style="font-weight: 600;">🏠 ${localeDataJP.address}</span> ${formData.address || ""}</p>
          </div>
          <div style="flex: 1;">
            <p style="font-size: 16px;"><span style="font-weight: 600;">🗓️ ${localeDataJP.consultationHistory}</span> ${formData.consultationHistory || ""}</p>
            <p style="font-size: 16px;"><span style="font-weight: 600;">⚙️ ${localeDataJP.metalInBody}</span> ${formData.metalInBody || ""}</p>
            <p style="font-size: 16px;"><span style="font-weight: 600;">📝 ${localeDataJP.requests}</span> ${formData.requests || ""}</p>
            <p style="font-size: 16px;"><span style="font-weight: 600;">📝 ${localeDataJP.metalDetails}</span> ${formData.metalDetails || ""}</p>
            <p style="font-size: 16px;"><span style="font-weight: 600;">📝 ${localeDataJP.preferredContact}</span> ${formData.preferredContact || ""}</p>
          </div>
        </div>
        
        <hr style="border: none; border-top: 1px solid #8C1515; margin: 20px 0;">
        
        <h3 style="color: #8C1515; font-size: 18px; margin-bottom: 10px;">${localeDataJP.consultationData}</h3>
        ${consultationDataFormatted}
        
      </div>
      
      <p style="font-size: 16px;">${localeDataJP.timestamp} ${timestamp || ""}</p>
      
      <p style="color: #333; font-size: 14px; text-align: center; margin-top: 20px;">${localeDataJP.allRightsReserved}</p>
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
