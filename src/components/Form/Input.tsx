import classnames from '@/libs/classnames'
import React from 'react'

interface InputProps {
  value?: string
  type?: string
  name?: string
  required?: boolean
  errMessageProperty?: string
  pattern?: string
  label?: string
  autoComplete?: string
  labelStyle?: string
  containerStyle?: string
}

export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      onChange,
      id,
      className,
      type,
      name,
      required,
      value,
      errMessageProperty,
      placeholder,
      pattern,
      label,
      title,
      autoCapitalize,
      autoComplete,
      labelStyle,
      containerStyle,
      ...restProps
    },
    ref,
  ) => {
    const labelStyles = classnames('label-text', labelStyle)
    const containerStyles = classnames(containerStyle)
    const classname = classnames('grow bg-transparent', className)
    const inputLabelContainer = classnames(
      'input input-bordered flex items-center gap-2 bg-transparent focus-within:outline-blue-400 border-blue-600 text-black',
      {
        'focus-within:outline-red-500 focus-within:border-red-400':
          errMessageProperty,
      },
      classname,
    )
    const spanErrorMsg = classnames({
      'text-red-500 w-56 mt-5 block': errMessageProperty,
    })
    return (
      <div className={containerStyles}>
        {label && (
          <div className='label'>
            <label className={`text-gray-500 font-semibold ${labelStyles}`}>
              {label}
            </label>
          </div>
        )}
        <label className={inputLabelContainer}>
          <input
            id={id}
            ref={ref}
            className={classname}
            onChange={onChange}
            value={value}
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            pattern={pattern}
            title={title}
            autoComplete={autoComplete}
            spellCheck='false'
            {...restProps}
          />
        </label>
        {errMessageProperty && (
          <span className={spanErrorMsg}>{errMessageProperty}</span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
