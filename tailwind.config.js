/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          navLinkText:'var(--color-text-navText)',
          navLinkTextHover:'var(--color-text-navTextHover)',
          bannerIcon:'var(--color-text-bannerIcon)',
          Heading:'var(--color-text-Heading)',
          navSubHeading:'var(--color-text-navSubHeading)',
          subHeading:'var(--color-text-subHeading)',
        }
      },
      backgroundColor:{
        skin:{
            navButtonHover:'var(--color-button-navHover)'
        }
      },
      gradientColorStops:{
        skin:{
          BannerTitleStart:'var(--color-fillBannerTitleStart)',
          BannerTitleEnd:'var(--color-fillBannerTitleEnd)'
        }
      },
    },
  },
  plugins: [require("daisyui")],
}

