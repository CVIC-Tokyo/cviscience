import type { Metadata } from "next";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Cardiovascular Imaging Clinic",
  description: "CVIC Iidabashi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        async
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBIC_MAPS_API_KEY}&loading=async`}
      />
      <body className="noto-serif w-full h-full text-center">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
