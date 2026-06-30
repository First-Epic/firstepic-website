'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'

/**
 * LinkedIn Insight / ad pixel — loaded ONLY on the marketing site.
 *
 * The confidential client pages at /c/<token> ("Prepared exclusively for <client>")
 * must NOT beacon a visit to LinkedIn's ad network. This gates the px.ads.linkedin.com
 * + snap.licdn.com tags off every /c/* route while leaving them intact on the marketing
 * pages (/, /about, /agencies, etc.), which intentionally keep their ad tracking.
 */
export default function LinkedInInsight() {
  const pathname = usePathname()
  if (pathname?.startsWith('/c/')) return null

  return (
    <>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=8765564&fmt=gif"
        />
      </noscript>
      <Script id="linkedin-partner-id" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "8765564";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>
      <Script
        id="linkedin-insight"
        strategy="afterInteractive"
        src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
      />
    </>
  )
}
