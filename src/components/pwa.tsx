"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"

export function InstallPrompt() {
    const [isIOS, setIsIOS] = useState(false)
    const [isStandalone, setIsStandalone] = useState(false)

    useEffect(() => {
        setIsIOS(
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
        )

        setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)
    }, [])

    if (isStandalone) {
        return null // Don't show install button if already installed
    }

    return (
        <div className="text-black p-8 text-center font-extrabold">
            {isIOS && (
                <p>
                    بذار هوم اسکرین آیفونت مثل اپ دم دستت باشه
                </p>
            )}
            {!isIOS && (
                <p>
                    بذار هوم اسکرین گوشیت که مثل اپ دم دستت باشه
                </p>
            )}
        </div>
    )
}

