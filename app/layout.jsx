import localFont from 'next/font/local';

import './globals.css';
import Aside from '@/components/Navbar/Aside';

export const metadata = {
    title: {
        default: 'Jorgram an Instagram Clone',
        template: '%s | Jorgram an Instagram Clone',
    },
    description: 'Creted by Adit, Arul, Billy, Bimo dan Yovi',
};

const instagramFont = localFont({
    src: '../public/font/InstagramSans-Regular.woff2',
    display: 'swap',
});

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={instagramFont.className}>
                <div className='flex flex-row items-stretch justify-between self-auto'>
                    <Aside />
                    {children}
                </div>
            </body>
        </html>
    );
}
