import React from 'react'

const base = 'w-6 h-6 shrink-0'

export const CapIcon = (props) => (
  <svg className={base} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M2 8l10-4 10 4-10 4-10-4z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 10v4c0 1 4 3 6 3s6-2 6-3v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const RibbonIcon = (props) => (
  <svg className={base} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M9 12l-3 9 6-3 6 3-3-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const StethoscopeIcon = (props) => (
  <svg className={base} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 3v5a4 4 0 1 0 8 0V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M14 8a6 6 0 0 1-12 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="18" cy="10" r="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M18 12v2a6 6 0 0 1-6 6h-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

export const DiplomaIcon = (props) => (
  <svg className={base} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 8l9-5 9 5-9 5-9-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 13v8m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const UsersIcon = (props) => (
  <svg className={base} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M3 20v-1a6 6 0 0 1 12 0v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="17" cy="9" r="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M17 20v-1a4 4 0 0 0-3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

export const BadgeIcon = (props) => (
  <svg className={base} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M9 8h6M8 12h8M10 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)
