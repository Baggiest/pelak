import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name='application-name' content='Pelak' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Pelak' />
        <meta name='description' content='Pelak - A Next.js Application' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='/icons/icon-192x192.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/icon-152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/icon-192.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='/icons/icon-152.png' />

        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Pelak' />
        <meta name='twitter:description' content='Pelak - A Next.js Application' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Pelak' />
        <meta property='og:description' content='Pelak - A Next.js Application' />
        <meta property='og:site_name' content='Pelak' />

        {/* Add apple splash screen images */}
        <link
          rel='apple-touch-startup-image'
          href='/icons/icon-512.png'
          sizes='512x512'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 