import classnames from '@/libs/classnames'
import React, {FunctionComponent} from 'react'

interface BadgeProps {
  text: string
}

export const Badge: FunctionComponent<
  BadgeProps & React.HTMLAttributes<HTMLDivElement>
> = ({text, className}) => {
  const classname = classnames(
    'badge badge-lg bg-transparent border-blue-500 text-blue-500',
    className,
  )
  return <div className={classname}>{text}</div>
}
