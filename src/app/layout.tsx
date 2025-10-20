import Navbar from "@/components/Navbar";
import Footer from "@/components/shared/Footer";
import ReactQueryProvider from "@/providers/ReactQueryProvider"; // 👈 import the new provider
import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik, Russo_One } from "next/font/google";
import "../styles/App.css";
import "./globals.css";









// Rubik font import
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"], // যেই ওজন লাগবে সেগুলো দাও
  variable: "--font-rubik", // optional, চাইলে CSS variable হিসেবেও ব্যবহার করতে পারো
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const russo = Russo_One({
  subsets: ['latin'],
  weight: ['400']
})


export const metadata: Metadata = {
  title: "Developer Imran Portfolio",
  description: "Fullstack web developer.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">


       <body
        className={`${rubik.variable} ${rubik.variable} antialiased`}
      >
        <ReactQueryProvider>
   
          {/* <ToastContainer />
          <Toaster /> */}
          {/* <ChatBot
            steps={steps}
            floating={true}
            speechSynthesis={{ enable: false, lang: 'en' }}
          /> */}
                <Navbar />

    {children}

      <Footer></Footer>
        
        </ReactQueryProvider>
      </body>
    </html>
  );
}
