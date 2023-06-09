//Component.
import MainHeader from "@/components/mainheader/page"
import Footer from "@/components/footer/page";

//CSS Global. 
import './global.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body>
        <div className="px-8 pt-8">
          <MainHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
