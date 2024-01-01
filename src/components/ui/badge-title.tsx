import { ReactNode } from 'react'
import { Badge } from './badge'

interface BadgeTitleProps {
  title?: string
  iconSvg: ReactNode
}

const BadgeTitle = ({ title, iconSvg }: BadgeTitleProps) => {
  return (
    <Badge
      className="w-fit gap-1 border-2 px-3 py-2 text-base uppercase"
      variant="outline"
    >
      {iconSvg}
      {title}
    </Badge>
  )
}

export default BadgeTitle
