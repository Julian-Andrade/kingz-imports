'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProductImagesProps {
  name: string
  imageUrls: string[]
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0])

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl)
  }

  return (
    <div className='mt-8 flex flex-col px-5'>
      <div className='flex h-[380px] w-full items-center justify-center rounded-xl bg-white'>
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes='100vw'
          className='h-auto max-h-[70%] w-auto max-w-[80%]'
          style={{
            objectFit: 'contain',
          }}
        />
      </div>

      <div className='mt-5 grid grid-cols-4 gap-5'>
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex items-center justify-center rounded-xl bg-white
              ${
                imageUrl === currentImage &&
                'border-2 border-solid border-primary border-zinc-400'
              }
            `}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes='100vw'
              className='h-auto max-h-[70%] w-auto max-w-[80%]'
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
