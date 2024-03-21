import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GlobalContextProvider } from "./Context/store";

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
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBIC_MAPS_API_KEY}&loading=async&callback=initMap`}
      ></script>
      <body className="noto-serif w-full h-full pt-16 md:pt-40">
        <GlobalContextProvider>
          <Navbar />
          {children}
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
