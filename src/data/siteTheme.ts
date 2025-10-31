import type { Theme } from "../interfaces/theme";

export const siteTheme: Theme =
  window.matchMedia('(prefers-color-scheme: dark)').matches ? {
    // Dark Theme
    accentColor: 'bg-[#4CAF50]',
    logoColor: 'text-white',
    navButtonColor: 'bg-[#3498DB]',
    navButtonHoverColor: 'hover:bg-[#45B3FA]',
    navButtonTextColor: 'text-gray-200',
    mainBackgroundColor: 'bg-[#333]',
    mainBackgroundTextColor: 'text-white',
    contentBoxBackgroundColor: 'bg-[#444]',
    contentBoxTextColor: 'text-gray-200',
    imageBorderColor: 'border-gray-600',
    footerBackgroundColor: 'bg-[#666]',
    footerTextColor: 'text-white',
  } : {
    // Light Theme
    accentColor: 'bg-[#8BC34A]',
    logoColor: 'text-black',
    navButtonColor: 'bg-[#FFA07A]',
    navButtonHoverColor: 'hover:bg-[#FFC080]',
    navButtonTextColor: 'text-[#032B44]',
    mainBackgroundColor: 'bg-[#E5E5EA]',
    mainBackgroundTextColor: 'text-black',
    contentBoxBackgroundColor: 'bg-[#C9C4CA]',
    contentBoxTextColor: 'text-[#444444]',
    imageBorderColor: 'border-gray-800',
    footerBackgroundColor: 'bg-[#032B44]',
    footerTextColor: 'text-[#F7F7F7]',
  };