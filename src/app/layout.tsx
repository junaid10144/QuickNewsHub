import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "../../styles/globals.scss"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "USNews-Multipurpose News, Magazine and Blog HTML Template",
  description: "USNews-Multipurpose News, Magazine and Blog HTML Template",
  keywords:
    "News, Magazine, Blog, Newspaper, Article, Editorial, Publish, Journal, Blogging, Bloggers, Lifestyle, Travel, Modern",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
