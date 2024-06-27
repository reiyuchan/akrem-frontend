import {useQuery} from '@tanstack/react-query'
import handleGetDonationList from '@/utils/donation/handleGetDonationList'

export const useGetDonationList = (token: string) =>
  useQuery({
    queryKey: ['getDonationList', token],
    queryFn: () => handleGetDonationList(token),
    enabled: false,
  })
