/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      textColor:{
        skin:{
          navLinkText:'var(--color-text-navText)',
          textWhite:'var(--color-text-white)',
          count:'var(--color-text-count)',
          footerButtonText:'var(--color-text-FooterButtonText)',
          footerText:'var(--color-text-FooterText)',
          navLinkTextHover:'var(--color-text-navTextHover)',
          bannerIcon:'var(--color-text-bannerIcon)',
          Heading:'var(--color-text-Heading)',
          navSubHeading:'var(--color-text-navSubHeading)',
          subHeading:'var(--color-text-subHeading)',
          linkHover:'var(--color-button-navHover)'
        }
      },
      backgroundColor:{
        skin:{
            navButtonHover:'var(--color-button-navHover)',
            fillServicesBg:'var(--color-fillServicesBg)',
            contactUsCardBg:'var(--color-fillContactUsCardBg)'

        }
      },
      gradientColorStops:{
        skin:{
          BannerTitleStart:'var(--color-fillBannerTitleStart)',
          BannerTitleEnd:'var(--color-fillBannerTitleEnd)',
          
        }
      },
    },
  },
  plugins: [require("daisyui")],
}

