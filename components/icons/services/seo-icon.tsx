

import { cn } from '@/lib/utils'
import React from 'react'

const SeoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('w-6 h-6', className)}

    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M7 8H4a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 011 1v2a1 1 0 01-1 1H3M14 16h-4V8h4M11 12h2M17 9a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1z" />
    </svg>

  )
}

export default SeoIcon