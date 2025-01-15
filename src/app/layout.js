 
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import Header from './components/headers'
import Footer from './components/footer'
import "./style.css"; 
import "./nav.css"; 
import "./form.css";  

import "./globals.css";  

import "bootstrap/dist/css/bootstrap.min.css";

 

const geistSans = {
  variable: "--font-geist-sans",  
};

const geistMono = {
  variable: "--font-geist-mono",  
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
 <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Example Product",
              "image": "https://www.myad-dev.com/product-image.jpg",
              "description": "This is an example product description for a service related to online ads.",
              "sku": "12345",
              "brand": {
                "@type": "Brand",
                "name": "Example Brand"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://www.myad-dev.com/product",
                "priceCurrency": "USD",
                "price": "19.99",
                "priceValidUntil": "2025-12-31",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>

    
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "รับจ้างยิงแอดทำโฆษณาออนไลน์",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "รับทำโฆษณาออนไลน์ รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google สายเทา"
                  }
                },
                {
                  "@type": "Question",
                  "name": "รับทำโฆษณาออนไลน์",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "รับทำโฆษณาออนไลน์ รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google สายเทา"
                  }
                }
              ]
            }
          `}
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="myadsdev" />
<meta name="title" content="รับจ้างยิงแอดทำโฆษณาออนไลน์ 
" />
<meta name="description" content="รับจ้างยิงแอดทำโฆษณาออนไลน์
รับทำโฆษณา Facebook Ads
รับทำโฆษณา Google
ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท
" />

 
<meta property="og:type" content="website" />
<meta property="og:url" content="https://myads.dev/" />
<meta property="og:title" content="รับจ้างยิงแอดทำโฆษณาออนไลน์ 
" />
<meta property="og:description" content="รับจ้างยิงแอดทำโฆษณาออนไลน์
รับทำโฆษณา Facebook Ads
รับทำโฆษณา Google
ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท
" />
<meta property="og:image" content="https://myads.dev/logo.png" />

 
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://myads.dev/" />
<meta property="twitter:title" content="รับจ้างยิงแอดทำโฆษณาออนไลน์ 
" />
<meta property="twitter:description" content="รับจ้างยิงแอดทำโฆษณาออนไลน์
รับทำโฆษณา Facebook Ads
รับทำโฆษณา Google
ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท
" />
<meta property="twitter:image" content="https://myads.dev/logo.png" />
<meta name="google-site-verification" content="ryOmDGaWXKrwl4E9xiLHh2maGVlmpjzyFN8m9QfAyyM" />
<meta name="robots" content="index" />
<link rel="canonical" href="https://www.myads.dev" />

<meta name="keywords" content="ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google, รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่างๆ, การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook, การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,ads,สอนยิงแอด, สอนยิงแอด Conversion,สอนยิงแอดสายเทา,ยิงแอดสายเทา,ยิงโฆษณาสายเทา,รับทำ seo สายเทา,รับทำ seo สายดำ,แอดสายเทา,รับยิงแอดสายเทา,กูเกิ้ลแอดสายเทา,รับทํา google ads,สายเทา seo สายเทา, ตลาดสีเทา,แอดสีเทา,adsสีเทา,กราฟฟิกสายเทา,ยิงแอดเทา,รับยิงแอดfacebookสายเทา,รูปยิงแอดสายเทา,รับจ้างสายเทา,รับโฆษณาสายเทา"/>



      <meta name="google-site-verification" content="mFESL3SA5vVBU7zoYemzaPAw5NuqtNcvkAa2aSQ1QEA" />
      <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16714335017"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
        
              gtag('config', 'AW-16714335017');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header/>
    
        {children}
 
         


        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
     
        <GoogleTagManager gtmId="GTM-MNDXXQCF" />

        <GoogleAnalytics gaId="G-X3BDJ31PJ0" />

        <Footer/>
      </body>
    </html>
  );
}
