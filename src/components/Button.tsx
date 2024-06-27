import classnames from '@/libs/classnames'
import {FunctionComponent} from 'react'

interface ButtonProps {
  children?: React.ReactNode
  btnRef?: React.MutableRefObject<HTMLButtonElement | null>
}

export const Button: FunctionComponent<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  type,
  className,
  name,
  btnRef,
  onSubmit,
  onClick,
  onKeyDown,
  disabled,
}) => {
  const classname = classnames(
    'bg-blue-600 p-2 text-center rounded-md active:bg-blue-300 hover:bg-blue-800 inline-flex justify-center flex-wrap whitespace-nowrap',
    className,
  )
  return (
    <button
      ref={btnRef}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      onKeyDown={onKeyDown}
      name={name}
      disabled={disabled}
      className={classname}>
      {children}
    </button>
  )
}
