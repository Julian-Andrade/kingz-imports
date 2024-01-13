import Image, { ImageProps } from 'next/image'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const promoBannerVariants = cva('h-auto w-full rounded-lg', {
  variants: {
    variant: {
      rounded: 'h-auto w-full rounded-lg',
      roundedNone: 'h-auto w-full rounded-none',
    },
  },
  defaultVariants: {
    variant: 'rounded',
  },
})

export interface PromoBannerProps
  extends ImageProps,
    VariantProps<typeof promoBannerVariants> {}

const PromoBanner = ({
  alt,
  variant,
  className,
  ...props
}: PromoBannerProps) => {
  return (
    <Image
      {...props}
      height={0}
      width={0}
      className={cn(promoBannerVariants({ variant }), className)}
      sizes='100vw'
      priority
      alt={alt}
    />
  )
}

export default PromoBanner
