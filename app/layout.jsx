import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Event Door - Your One-Stop Event Solution",
  description:
    "Event Door provides corporate swags, bespoke event planning, and speaker arrangements with innovation and excellence.",
  keywords: "events, corporate swags, event planning, speakers, Event Door",
  authors: [{ name: "Event Door Team" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
