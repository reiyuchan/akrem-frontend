import {createJSONStorage} from 'jotai/utils'

export const createLocalStorage = <T>() =>
  createJSONStorage<T>(() => window.localStorage)
