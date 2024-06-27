import axios from '@/libs/axios'
import {DonationItem} from '@/types'

type FinalDonatedItem = DonationItem & {
  isOpened: string
  confirmationToken: string
}

const handleDonation = async (donationItem: FinalDonatedItem) => {
  const formData = new FormData()
  formData.append('MedicineCategoryId', donationItem.categoryId.toString())
  formData.append('CorrectName', donationItem.itemName)
  formData.append('CorrectConcentration', donationItem.medicineConcentration)
  formData.append('Image', donationItem.image)
  formData.append('MedicineForm', donationItem.medicineForm.toString())
  formData.append('NumberOfStrips', donationItem.numberOfStrips.toString())
  formData.append('NumberOfPills', donationItem.numberOfPills.toString())
  formData.append('IsOpened', donationItem.isOpened)
  formData.append('ExpirationDate', donationItem.expirationDate)
  formData.append('Quantity', donationItem.quantity.toString())
  const response = await axios.post(`/Cart/AddOneItemToCart`, formData, {
    headers: {
      Authorization: `Bearer ${donationItem.confirmationToken}`,
    },
  })
  return response
}

export default handleDonation
