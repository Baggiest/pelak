import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pelak',
    short_name: 'Pelak',
    description: 'Social media based on your license plate',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icons/pelak-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/pelak-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}