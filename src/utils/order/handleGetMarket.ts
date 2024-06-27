import axios from '@/libs/axios'

export type GetMarket = {
  search: string
  pageSize: number
  pageNumber: number
  sortOrderBy: string
  sortType: string
}

const handleGetMarket = async ({
  pageNumber,
  pageSize,
  search,
  sortOrderBy,
  sortType,
}: GetMarket) => {
  const response = await axios.get(`/Boxes/GetAll`, {
    params: {
      pageNumber,
      pageSize,
      search,
      sortOrderBy,
      sortType,
    },
  })
  return response
}

export default handleGetMarket
