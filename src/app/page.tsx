import Image from 'next/image'
import Link from 'next/link'
import PelakLogo from '../../public/pelak.svg'
import PelakIran from '../../public/pelak-iran.svg'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="mb-8">
        <Image src={PelakLogo} alt="Pelak Logo" width={120} height={120} priority />
      </div>
      
      <h1 className="text-2xl font-bold mb-2">Pelak</h1>
      <p className="text-gray-600 mb-8">ببین برا کجاس</p>
      
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        <Link 
          href="/find-city" 
          className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Find City Code
        </Link>
        
        <Link 
          href="/about" 
          className="bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          About
        </Link>
      </div>
      
      <div className="mt-12">
        <Image src={PelakIran} alt="Pelak Iran" width={80} height={80} />
      </div>
    </div>
  )
}
