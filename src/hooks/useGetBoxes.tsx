import {useQuery} from '@tanstack/react-query'
import handleGetBoxes from '@/utils/boxes/handleGetBoxes'

export const useGetBoxes = () =>
  useQuery({
    queryKey: ['getBoxes'],
    queryFn: () => handleGetBoxes,
    enabled: false,
  })
