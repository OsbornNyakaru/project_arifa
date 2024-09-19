import '@/styles/globals.css';

import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { ToasterProvider } from '@/providers/toast-provider';

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
});

export const metadata = {
    title: "Arifa",
    description: 'Discover & Share AI Prompts'    
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body className={cn('font-sans', fontSans.variable)}>
          <Provider>     
            <div className='main absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'>         
                <div className='gradient'/>
            </div>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              d
            >
              <ToasterProvider />
              <main className='app'>
                  <Nav />              
                  {children}
              </main>
            </ThemeProvider>
          </Provider>
        </body>    
    </html>
  )
}

export default RootLayout;