import localFont from 'next/font/local'

import './globals.css'

export const metadata = {
    title: 'Instagram Clone',
    description: 'Creted by Adit, Arul, Billy, Bimo dan Yovi',
}

const instagramFont = localFont({
    src: '../font/InstagramSans-Regular.woff2',
    display: 'swap',
})

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={instagramFont.className}>{children}</body>
        </html>
    )
}
