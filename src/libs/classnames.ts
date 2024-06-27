import {ClassValue, clsx} from 'clsx'

const classnames = (...inputs: ClassValue[]) => {
  return clsx(...inputs)
}

export default classnames
