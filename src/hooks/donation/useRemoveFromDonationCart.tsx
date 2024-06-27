import handleRemoveDonationItem, {
  RemoveDonationItem,
} from '@/utils/donation/handleRemoveDonationItem'
import {useQuery} from '@tanstack/react-query'

export const useCancelDonation = ({
  confirmationToken,
  donationCartItemId,
}: RemoveDonationItem) =>
  useQuery({
    queryKey: ['removeDonationItem', confirmationToken],
    queryFn: () =>
      handleRemoveDonationItem({confirmationToken, donationCartItemId}),
    enabled: false,
  })
