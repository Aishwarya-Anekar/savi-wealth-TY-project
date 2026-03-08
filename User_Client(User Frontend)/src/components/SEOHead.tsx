import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'SaviWealth - Professional Wealth Management',
  description = 'Comprehensive financial advisory services with personalized investment strategies and expert guidance. NSE certified and AMFI registered wealth management firm.',
  keywords = 'wealth management, financial advisory, investment planning, mutual funds, portfolio management, tax planning, SIP calculator',
  image = '/images/hero/financial-planning.jpg',
  url = 'https://saviwealth.in',
  type = 'website'
}) => {
  const fullTitle = title.includes('SaviWealth') ? title : `${title} | SaviWealth`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SaviWealth" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="SaviWealth" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#2563eb" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "SaviWealth",
          "description": description,
          "url": url,
          "logo": "/images/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-98765-43210",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://linkedin.com/company/saviwealth",
            "https://twitter.com/saviwealth"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;