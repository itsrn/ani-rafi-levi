import "./globals.css";
import { Secular_One } from "next/font/google";

const secone = Secular_One({ subsets: ["hebrew"], weight: "400" });

export const metadata = {
  title: "אני רפי לוי...",
  description: "קבלו משפט רנדומלי שרפי לוי אמר פעם (או אחד שהמצאתי). נוצר על ידי רון נוס",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={secone.className}>{children}</body>
    </html>
  );
}
