

import { cn } from '@/lib/utils'
import React from 'react'

const StarIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('w-6 h-6', className)}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8.243 7.34l-6.38.925-.113.023a1 1 0 00-.44 1.684l4.622 4.499-1.09 6.355-.013.11a1 1 0 001.464.944l5.706-3 5.693 3 .1.046a1 1 0 001.352-1.1l-1.091-6.355 4.624-4.5.078-.085a1 1 0 00-.633-1.62l-6.38-.926-2.852-5.78a1 1 0 00-1.794 0L8.243 7.34z" />
    </svg>

  )
}

export default StarIcon