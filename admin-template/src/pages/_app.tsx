import { AuthProvider } from '../data/context/AuthContext'
import { AppProvider } from '../data/context/AppContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  )
}
