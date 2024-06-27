import classnames from '@/libs/classnames'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {FunctionComponent} from 'react'
import {Url} from 'url'

interface CheckboxProps {
  children?: React.ReactNode
  text?: string
  textPosition?: 'left' | 'right' | (string & {})
  redirect?: string | Url
  containerStyle?: string
  textStyle?: string
}

export const Checkbox: FunctionComponent<
  CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  children,
  textPosition,
  text,
  className,
  containerStyle,
  textStyle,
  redirect,
  ...restProps
}) => {
  const router = useRouter()
  const classname = classnames(
    'checkbox w-5 h-5 border-blue-400 [--chkbg:theme(colors.blue.600)] [--chkfg:white] ',
    className,
  )
  const isHorizontal = textPosition !== 'top' && textPosition !== 'bottom'
  const containerStyles = classnames(
    'flex',
    {
      'flex-row': isHorizontal,
    },
    'items-center text-blue-600 font-medium',
    containerStyle,
  )
  const textContainer = classnames('label-text text-inherit', {
    'hover:underline': redirect,
  })
  if (!isHorizontal) return
  else
    return (
      <div className={containerStyles}>
        {textPosition === 'left' ? (
          <span className='label-text text-inherit hover:underline'>
            {text && (
              <p
                className={`whitespace-nowrap ${textStyle}`}
                onClick={() => redirect && router.push(redirect)}
                aria-label='redirect'>
                {text}
              </p>
            )}
          </span>
        ) : null}
        <label className={`label text-blue-600`}>
          <input
            {...restProps}
            className={classname}
            type='checkbox'
            name='terms'
            id='terms'
            required
          />
        </label>
        {textPosition === 'right' ? (
          <span className={textContainer}>
            {text && (
              <p
                className={`whitespace-nowrap ${textStyle}`}
                onClick={() => redirect && router.push(redirect)}
                aria-label='redirect'>
                {text}
              </p>
            )}
          </span>
        ) : null}
        {children}
      </div>
    )
}
