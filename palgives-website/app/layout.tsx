import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';
import Navbar from './components/Navbar';
import AutoTranslator from './components/AutoTranslator';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <AutoTranslator />
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}