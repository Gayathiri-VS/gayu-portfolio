import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Gayathiri V S | Portfolio | CSE Student & Developer",
  description: "Personal portfolio of Gayathiri V S, a computer science engineering student, software engineer, and SQL developer.",
  keywords: ["Gayathiri V S", "Gayathiri V S Portfolio", "Sethu Institute of Technology", "Computer Science Student", "Software Engineer", "SQL Developer"],
  authors: [{ name: "Gayathiri V S" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
