import axios from '@/libs/axios'

type GetBoxes = {
  search: string
  pageSize: number
  pageNumber: number
  sortOrderBy: string
  sortType: string
}

const handleGetBoxes = async ({}: GetBoxes) => {
  const response = await axios.get(`/Boxes/GetAll`)
  return response
}

export default handleGetBoxes
