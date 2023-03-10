import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from "@next/font/google"
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import React from "react";
import CartProvider from '@/context/CartProvider'
import { NotificationProvider } from '@/context/NotificationProvider'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function App({ Component, pageProps }: AppProps) {

  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CartProvider>
        <NotificationProvider>
          <div className={`${montserrat.variable}font-montserrat`}>
            <Navbar />
            <Component {...pageProps} />
          </div>
          </NotificationProvider>
        </CartProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
