import Image from 'next/image'
import PelakLogo from '../../../public/pelak.svg'

export default function About() {
  return (
    <div className="flex flex-col items-center p-6 max-w-md mx-auto">
      <div className="mb-6">
        <Image src={PelakLogo} alt="Pelak Logo" width={80} height={80} />
      </div>
      
      <h1 className="text-2xl font-bold mb-4">About Pelak</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6 w-full">
        <h2 className="text-lg font-semibold mb-2">What is Pelak?</h2>
        <p className="text-gray-700 mb-4">
          Pelak is a tool to help you identify Iranian license plate city codes. 
          Simply enter the numeric code from a license plate to find out which city it belongs to.
        </p>
        
        <h2 className="text-lg font-semibold mb-2">How to use</h2>
        <p className="text-gray-700 mb-4">
          Go to the Find City page and enter the numeric code from an Iranian license plate. 
          The app will instantly show you which city the plate belongs to.
        </p>
        
        <h2 className="text-lg font-semibold mb-2">Data source</h2>
        <p className="text-gray-700">
          The city code data is sourced from official Iranian vehicle registration information.
        </p>
      </div>
      
      <div className="text-center text-gray-500 text-sm">
        <p>Version 1.0.0</p>
        <p>© 2024 Pelak</p>
      </div>
    </div>
  )
} 