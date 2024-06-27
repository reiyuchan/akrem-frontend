import classnames from '@/libs/classnames'
import React, {FunctionComponent} from 'react'

interface DrawerProps {
  children?: React.ReactNode
  handleMobileToggle?: React.MouseEventHandler<HTMLElement>
  Icon?: React.ReactNode
  btnStyle?: string
  listStyle?: string
}

export const Drawer: FunctionComponent<DrawerProps> = ({
  children,
  handleMobileToggle,
  Icon,
  btnStyle,
  listStyle,
}) => {
  const listStyles = classnames(
    'menu p-4 w-10/12 min-h-full bg-blue-500 gap-5 uppercase',
    listStyle,
  )
  return (
    <div className='drawer drawer-end'>
      <input id='app-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <label
          onClick={handleMobileToggle}
          htmlFor='app-drawer'
          className={`btn ${btnStyle}`}>
          {Icon}
        </label>
      </div>
      <div className='drawer-side'>
        <label
          onClick={handleMobileToggle}
          htmlFor='app-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'></label>
        <ul className={listStyles}>{children}</ul>
      </div>
    </div>
  )
}
