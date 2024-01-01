import { Category } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="flex h-[150px] w-full items-center justify-center rounded-t-lg bg-gradient-to-r from-zinc-700 to-zinc-500">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className="rounded-b-lg bg-zinc-800 py-2">
          <p className="text-md text-center font-bold text-gray-100">
            {category.name}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CategoryItem
