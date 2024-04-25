import { sendMail } from '../../utils/mail';

export const POST = async (req: Request) => {
  const { formData, timestamp } = await req.json();
  const { SMTP_EMAIL } = process.env;

  const subject = "HP Reservation";
  const name = `${formData.name} ${formData.surName}`;
  const consultationDataFormatted = formData.consultationData.map((entry: { date: any; timeSlot: any; }) => {
    return `<p>Date: ${entry.date}</p><p>Time Slot: ${entry.timeSlot}</p>`;
  }).join('<br>'); // Join each consultation entry with a line break

  const body = `
    <div>
      <div>
        <h1>HP Reservation</h1>
        <h2>${formData.selectedPlan}</h2>
        <h2>${formData.selectedTests.join(', ')}</h2>
        <h3>Name</h3>
        <p>${formData.name} ${formData.surname}</p>
        <h3>Name (Furigana)</h3>
        <p>${formData.nameFurigana} ${formData.surnameFurigana}</p>
        <h3>Date of Birth</h3>
        <p>${formData.dateOfBirth}</p>
        <h3>Age</h3>
        <p>${formData.age}</p>
        <h3>Phone</h3>
        <p>${formData.phone}</p>
        <h3>Email</h3>
        <p>${formData.email}</p>
        <h3>Preferred Contact</h3>
        <p>${formData.preferredContact}</p>
        <h3>Request/Time of Contact</h3>
        <p>${formData.request}</p>
        <h3>History</h3>
        <p>${formData.consultationHistory}</p>
        <h3>Presence of metal in the body</h3>
        <p>${formData.metalInBody}</p>
        <h3>Reservation Preference</h3>
        ${consultationDataFormatted} <!-- Insert formatted consultation data here -->
      </div>
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
