import './globals.css'

export const metadata = {
  title: 'Shopify Navbar',
  description: 'This is Shopify Navbar as Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
