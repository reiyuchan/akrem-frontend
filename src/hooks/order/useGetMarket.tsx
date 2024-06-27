import {useQuery} from '@tanstack/react-query'
import handleGetMarket, {GetMarket} from '@/utils/order/handleGetMarket'

export const useGetMarket = ({
  pageNumber,
  search,
  pageSize,
  sortOrderBy,
  sortType,
}: GetMarket) =>
  useQuery({
    queryKey: [
      'getMarket',
      pageNumber,
      pageSize,
      sortOrderBy,
      sortType,
      search,
    ],
    queryFn: () =>
      handleGetMarket({pageNumber, pageSize, search, sortOrderBy, sortType}),
    enabled: false,
  })
