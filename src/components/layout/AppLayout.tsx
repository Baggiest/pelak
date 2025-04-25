'use client'

import { ReactNode } from 'react'
import BottomNav from './BottomNav'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <main className="flex-1">
        {children}
      </main>
      <BottomNav />
    </div>
  )
} 