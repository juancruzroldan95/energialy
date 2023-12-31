import './globals.css'
import { Montserrat, Josefin_Sans } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation'; 
import Footer from './components/Footer';
import Providers from './redux/provider';
import getLocalStorage from './Func/localStorage';
//import "@uploadthing/react/styles.css";



const montserrat = Montserrat({ subsets: ["latin"],display: 'swap', variable: "--montserrat" });
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--josefin",
});


export const metadata = {
  title: 'Energialy - El Marketplace de Licitaciones de Oil & Gas',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  // const user = getLocalStorage();
  // console.log('userPage:',user) 

  return (
    <html lang="en">
      <Providers>
        <body className={`${montserrat.className}bg-[#F7F7F7] flex flex-col`}>
          <div className="flex-grow">
            <Navigation />
            <main className="mx-auto">{children}</main>
          </div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}


