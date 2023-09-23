'use client'
import Botonerachat from '../../components/botonerachat/botonerachat';
import './layout.scss'

export default function ChatLayout({
  children,
}: {
    
  children: React.ReactNode

}) {
  return (
    <div>

     <Botonerachat/>   


{children}
</div>
  )
}
