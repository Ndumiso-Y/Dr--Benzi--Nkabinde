import React from 'react'
export default function QualIcon({label, svgPath}){
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d={svgPath} stroke="#0B1E3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-medium text-sm md:text-base">{label}</span>
    </div>
  )
}
