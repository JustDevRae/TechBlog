import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // 다크 모드 클래스 방식
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        mobile: { max: "450px" }, // 450px 미만
        tablet: { min: "450px", max: "1280px" }, // 450px 이상 1280px 미만
        desktop: { min: "1280px" }, // 1280px 이상
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--foreground)", // 기본 텍스트 색상
            a: {
              color: "var(--link-color)",
              "&:hover": {
                color: "var(--link-hover-color)",
              },
            },
            h1: {
              fontSize: "2.25rem", // h1 폰트 크기
              fontWeight: "700", // h1 폰트 굵기
            },
            h2: {
              fontSize: "1.875rem",
              fontWeight: "600",
            },
            h3: {
              fontSize: "1.5rem", // h3 폰트 크기
              fontWeight: "500",
              marginTop: "1rem", // 추가된 여백
              marginBottom: "0.5rem",
            },
            p: {
              fontSize: "1rem",
              lineHeight: "1.75",
            },
          },
        },
        dark: {
          css: {
            color: "var(--foreground-dark)", // 다크 모드 텍스트 색상
            a: {
              color: "var(--link-color-dark)",
              "&:hover": {
                color: "var(--link-hover-color-dark)",
              },
            },
            h1: {
              color: "var(--heading-color-dark)", // 다크 모드 h1 색상
              fontSize: "2.25rem",
              fontWeight: "700",
            },
            h2: {
              color: "var(--heading-color-dark)", // 다크 모드 h2 색상
              fontSize: "1.875rem",
              fontWeight: "600",
            },
            h3: {
              color: "var(--heading-color-dark)", // 다크 모드 h2 색상
              fontSize: "1.5rem", // h3 폰트 크기
              fontWeight: "500",
              marginTop: "1rem", // 추가된 여백
              marginBottom: "0.5rem",
            },
            p: {
              color: "var(--paragraph-color-dark)", // 다크 모드 본문 색상
              lineHeight: "1.75",
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
