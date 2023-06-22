import Header from "@/components/header"
import './globals.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white">
    <head>
      <title>FrontEnd App For Beelder</title>
    </head>
    <body>
      <Header />
      <div className="bg-white"> {children} </div>
    </body>
  </html>
  )
}

