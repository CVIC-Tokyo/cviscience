import { sendMail } from '../../utils/mail';


export const POST = async (req: Request) => {
  const { to, name, subject, body } = await req.json()

  try {
    await sendMail({ to, name, subject, body });

      return Response.json({ success: true })
  } catch (e) {
      return new Response(JSON.stringify({ success: false }), {
          status: 500
      })
  }
}