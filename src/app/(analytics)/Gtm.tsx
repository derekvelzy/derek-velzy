"use client";

import Script from "next/script";

export default function Gtm() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  // Block by default; Cookiebot will unlock based on consent
  // We also set Google Consent Mode defaults to "denied"
  return (
    <>
      {/* Google Consent Mode defaults (denied) */}
      <Script id="google-consent-defaults" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            ad_storage: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted'
          });
        `}
      </Script>

      {/* GTM bootstrap - BLOCKED until Cookiebot "statistics" is granted */}
      <Script
        id="gtm"
        type="text/plain"
        data-cookieconsent="statistics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />

      {/* Keep consent in sync with Cookiebot */}
      <Script id="cookiebot-consent-sync" strategy="afterInteractive">
        {`
          function syncConsent() {
            try {
              var C = window.Cookiebot;
              var stats = !!(C && C.consent && C.consent.statistics);
              var mkt   = !!(C && C.consent && C.consent.marketing);

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              gtag('consent','update', { analytics_storage: stats ? 'granted' : 'denied' });
              gtag('consent','update', {
                ad_storage: mkt ? 'granted' : 'denied',
                ad_user_data: mkt ? 'granted' : 'denied',
                ad_personalization: mkt ? 'granted' : 'denied'
              });
            } catch(e) {}
          }

          // Run once on load (after Cookiebot init) and on every change
          window.addEventListener('CookiebotOnAccept', syncConsent);
          window.addEventListener('CookiebotOnDecline', syncConsent);
          if (document.readyState !== 'loading') setTimeout(syncConsent, 0);
          else document.addEventListener('DOMContentLoaded', syncConsent);
        `}
      </Script>
    </>
  );
}
