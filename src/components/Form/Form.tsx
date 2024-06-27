import classnames from '@/libs/classnames'
import {FunctionComponent} from 'react'

interface FormProps {
  children?: React.ReactNode
  method?: string & ('post' | 'get' | 'dialog')
}

export const Form: FunctionComponent<
  FormProps & React.HTMLAttributes<HTMLFormElement>
> = ({
  className,
  id,
  style,
  onClick,
  onSubmit,
  onEnded,
  onAnimationEnd,
  onChange,
  onBlur,
  method,
  children,
}) => {
  const classname = classnames(
    'z-10 form-control bg-slate-100 bg-opacity-90 shadow-md shadow-zinc-800 w-full p-5 rounded-2xl',
    className,
  )
  return (
    <form
      id={id}
      style={style}
      className={classname}
      onClick={onClick}
      onSubmit={onSubmit}
      onChange={onChange}
      onEnded={onEnded}
      onAnimationEnd={onAnimationEnd}
      onBlur={onBlur}
      method={method}
      noValidate>
      {children}
    </form>
  )
}
