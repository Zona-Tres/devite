import './css/style.css'

import localFont from 'next/font/local'

import WalletProviderComponent from "@/app/web3/WalletProvider";
import "@solana/wallet-adapter-react-ui/styles.css";

const aspekta = localFont({
  src: [
    {
      path: '../public/fonts/Aspekta-350.woff2',
      weight: '350',
    },
    {
      path: '../public/fonts/Aspekta-500.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/Aspekta-700.woff2',
      weight: '700',
    },
  ],
  variable: '--font-aspekta',
  display: 'swap',
})

const cabinet = localFont({
  src: [
    {
      path: '../public/fonts/CabinetGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/CabinetGrotesk-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/CabinetGrotesk-Extrabold.woff2',
      weight: '800',
    },    
  ],
  variable: '--font-cabinet-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${aspekta.variable} ${cabinet.variable} font-aspekta antialiased bg-white text-gray-900 font-[350]`}>
        <WalletProviderComponent>
          {children}
        </WalletProviderComponent>
      </body>
    </html>
  )
}
