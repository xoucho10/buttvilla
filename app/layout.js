import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Buttvilla Kindergarten Iganga | 40 Years Est. 1986 P.O Box 580",
  description: "Same place 100m Bulaga Post Office, same auntie 3 years, QR gate, reddish maroon uniform since 1986. Baby to Top Class.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFFCF7] text-[#2a0a0d] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}