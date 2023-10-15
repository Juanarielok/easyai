'use client'
import Header from '@/components/header/header';
import Botonerachat from '../../components/botonerachat/botonerachat';
import './layout.scss'
import header from '@/components/header/header';
export default function ChatLayout({
  children,
}: {
    
  children: React.ReactNode

}) {
  return (
    <div>



{children}
</div>
  )
}
