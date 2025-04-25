'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import SearchIcon from '../../../public/pelak-search.svg'
import PostIcon from '../../../public/pelak-post.svg'

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    // { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Find City', path: '/find-city', icon: SearchIcon },
    { name: 'Post', path: '/post', icon: PostIcon }
    // { name: 'About', path: '/about', icon: AboutIcon },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 px-4 flex justify-around items-center h-24 z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.path

        return (
          <Link
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center justify-center w-1/3 py-2 ${isActive ? 'text-blue-600' : 'text-gray-500'
              }`}
          >
            <div className={`relative ${isActive ? 'active-icon' : ''}`}>
              <Image
                src={item.icon}
                alt={item.name}
                width={50}
                height={50}
                className={isActive ? 'brightness-100' : 'brightness-75'}
              />
              {isActive && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
              )}
            </div>
            {/* <span className="text-xs mt-1">{item.name}</span> */}
          </Link>
        )
      })}
    </nav>
  )
} 