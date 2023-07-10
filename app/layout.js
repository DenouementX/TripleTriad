import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <title>Triple Triad</title>
          <link rel="icon" href="favicon.png" />
      </head>
      <body className='bg-[#AC8E60]'>
        {children}
        <footer className="fixed bottom-0 py-1 bg-[#BD8E83] text-center w-full border border-[#AC8E60] text-2xl">
          Made with ❤️ by Lawrence Mao
        </footer>
      </body>
    </html>
  )
}