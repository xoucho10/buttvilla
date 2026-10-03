import "./globals.css";
import AnnouncementBar from "../components/AnnouncementBar";

export const metadata = {
  title: "Buttvilla Kindergarten Iganga | 40 Years of Heritage",
  description: "Premium early childhood education in Iganga, Uganda since 1986",
  icons: { icon: "/logo.png" }
};

export default function RootLayout({ children }) { 
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        {children}
      </body>
    </html>
  ); 
}