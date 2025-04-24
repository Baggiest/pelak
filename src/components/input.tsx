'use client'

import { useState, useEffect } from 'react'
import PelakLogo from '../../public/pelak.svg'
import BackspaceIcon from '../../public/backspace.svg'
import PelakIran from '../../public/pelak-iran.svg'
// import { Lalezar } from 'next/font/google'
import Image from "next/image";
import toPersianNum from '@/utils/toPersianNum';
import { cityCodesObjectOfTuples } from '@/types/types'

export default function CityCodeLookup() {

    const [numbers, setNumbers] = useState(['', ''])
    const [activeInput, setActiveInput] = useState(0)
    const [matchedCity, setMatchedCity] = useState<string>('')
    const [cityCodes, setCityCodes] = useState<cityCodesObjectOfTuples>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    // const lalezar = Lalezar({ subsets: ['arabic'] })

    // Load city codes from external JSON file
    useEffect(() => {
        const loadCityCodes = async () => {

            try {
                setIsLoading(true)
                const response = await fetch('/city-codes.json')

                if (!response.ok) {
                    throw new Error(`Failed to load city codes: ${response.status}`)
                }

                const data: cityCodesObjectOfTuples = await response.json()
                console.log(data)
                setCityCodes(data)

            }

            catch (err: unknown) {
                console.error('Error loading city codes:', err)
                if (typeof (err) === "string") {
                    setError(true)
                    console.log(error)
                }
            }

            finally {
                setIsLoading(false)
            }
        }

        loadCityCodes()
    }, [])

    // Function to check if a city code exists in our mapping
    const lookupCity = (code: number) => {
        if (cityCodes![code]) {
            return cityCodes![code]
        }
        return null
    }

    // Whenever numbers change, check if we have a complete code to look up
    useEffect(() => {
        const completeCode = numbers.join('')

        if (completeCode.length === 2) {
            const city = lookupCity(parseInt(completeCode)) as string

            if (city) {
                setMatchedCity(city)
            }
        } else {
            setMatchedCity('')
        }
    }, [numbers, cityCodes])

    const handleNumberClick = (num: string) => {
        const newNumbers = [...numbers]

        // Only proceed if the current input isn't full
        if (newNumbers[activeInput].length < 1) {
            newNumbers[activeInput] = num
            setNumbers(newNumbers)

            // Auto-advance to the next input if this one is now full
            if (activeInput === 0) {
                setActiveInput(1)
            }
        }
    }

    const handleBackspace = () => {
        const newNumbers = [...numbers]

        // If second input is active but empty, move back to first input
        if (activeInput === 1 && newNumbers[1] === '') {
            setActiveInput(0)
        } else {
            newNumbers[activeInput] = ''
            setNumbers(newNumbers)
        }
    }

    const handleClear = () => {
        setNumbers(['', ''])
        setActiveInput(0)
        setMatchedCity('')
    }

    const handleInputFocus = (index: number) => {
        setActiveInput(index)
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center p-6 h-64">
                <div className="text-xl font-medium">Loading city data...</div>
            </div>
        )
    }



    return (
        <div className="flex flex-col items-center p-6 max-w-md mx-auto font-lalezar">
            <Image
                src={PelakLogo}
                alt="pelak\'s logo"
            />

            <Image
                className='p-2 mt-4'
                src={PelakIran}
                alt="pelak-ir"
                height={100}
                width={120}
            />

            {/* Number inputs */}
            <div className="flex p-6 bg-white mb-6 w-full">
                {[0, 1].map((index) => (
                    <div key={index} className="flex-1">
                        <input
                            id={`number-input-${index}`}
                            type="text"
                            inputMode="none"
                            className={`w-full aspect-square text-black p-2 text-7xl text-center font-bold border ${activeInput === index ? 'border-black border-2 ring-2 ring-blue-200' : 'border-gray-300'
                                }`}
                            value={toPersianNum(numbers[index])}
                            readOnly
                            onFocus={() => handleInputFocus(index)}
                        />
                    </div>
                ))}
            </div>
            <span className=''>
                {matchedCity ? (
                    <span className="ml-2 text-2xl font-bold text-black">{matchedCity}</span>
                ) : numbers.join('').length === 2 ? (
                    <span className="ml-2 text-2xl font-bold text-gray-500">نداریم :/</span>
                ) : (
                    <span className="ml-2 text-2xl font-bold text-gray-400 font-lalezar">برا کجاس</span>
                )}
            </span>

            {/* Current active number indicator */}
            {/* <div className="mb-4 text-center">
                <span className="text-sm font-medium">
                    Enter digit {activeInput + 1}
                </span>
            </div> */}

            {/* Numpad */}
            <div className="grid grid-cols-3 gap-2 mt-8 w-full max-w-2xs">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <button
                        key={num}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-4 text-xl"
                        onClick={() => handleNumberClick(num.toString())}
                    >
                        {num}
                    </button>
                ))}
                <button
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-4 text-xl"
                    onClick={handleClear}
                >
                    C
                </button>
                <button
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-4 text-xl"
                    onClick={() => handleNumberClick('0')}
                >
                    0
                </button>
                <button
                    className="flex justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-4 text-xl"
                    onClick={handleBackspace}
                >
                    <Image
                        src={BackspaceIcon}
                        alt='Backspace'
                    />
                </button>
            </div>

            {/* Result display */}
            {/* <div className="text-black mt-6 p-4 bg-gray-50 rounded-md w-full">
                <h3 className="text-lg font-medium mb-2">City Lookup Result</h3>
                <div className="flex flex-col">
                    <div className="mb-2">
                        <span className="text-sm font-medium">Code:</span>
                        <span className="ml-2 text-lg font-bold">{numbers.join('') || '--'}</span>
                    </div>
                    <div>
                        <span className="text-sm font-medium">City:</span>
                        {matchedCity ? (
                            <span className="ml-2 text-lg font-bold text-blue-600">{matchedCity}</span>
                        ) : numbers.join('').length === 2 ? (
                            <span className="ml-2 text-lg font-bold text-red-500">City not found</span>
                        ) : (
                            <span className="ml-2 text-lg font-bold text-gray-400">--</span>
                        )}
                    </div>
                </div>
            </div> */}

            {/* Available city codes */}
            {/* <div className="text-black mt-6 p-4 bg-gray-50 rounded-md w-full">
                <details>
                    <summary className="text-lg font-medium mb-2 cursor-pointer">
                        Available City Codes
                    </summary>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                        {Object.entries(cityCodes as cityCodesObjectOfTuples).map(([code, city]) => (
                            <div key={code} className="text-sm">
                                <span className="font-bold">{code}:</span> {city}
                            </div>
                        ))}
                    </div>
                </details>
            </div> */}
        </div>
    )
}