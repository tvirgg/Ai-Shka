
'use client'

import { useState } from 'react'
import WelcomeNavigation from '@/components/WelcomeNavigation'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import ProtectedRoute from '../../components/ProtectedRoute' // Adjust the import path
export default function StartPage () {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <ProtectedRoute>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="lg:pl-72">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <WelcomeNavigation />
          </div>
        </main>
      </div>
      </ProtectedRoute>
  )
}