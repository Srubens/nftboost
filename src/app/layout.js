import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const inter = Inter({
  subsets:["latin"],
  weight:["400","500","600","700"],
  display:"swap",
  variable:"--font-inter"
})

export const poppins = Poppins({
  subsets:["latin"],
  weight:["600"],
  display:"swap",
  variable:"--font-poppins"
})

export const metadata = {
  title: "NFTBoost | Explore o universo digital de colecionáveis únicos",
  description: "Projeto criado no CodeBoost",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
