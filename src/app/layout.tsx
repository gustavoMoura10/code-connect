import { Prompt } from 'next/font/google'


import './globals.css'
import { SearchForm } from '@/components/SearchForm'
import Aside from '@/components/Aside'

export const metadata = {
  title: 'Code Connect',
  description: 'Uma rede social para devs!',
}

const prompt = Prompt({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
          <div>
            <Aside />
          </div>
          <div className='main-content'>
            <SearchForm />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}