import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="fixed bottom-0 py-3 bg-[#BD8E83] text-center w-full border border-[#AC8E60]">
          Made with ❤️ by Lawrence Mao
        </footer>
      </body>
    </html>
  )
}