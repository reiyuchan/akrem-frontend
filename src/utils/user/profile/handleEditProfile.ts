import axios from '@/libs/axios'
import {User} from '@/types'

const handleEditProfile = async ({
  confirmationToken,
  firstName,
  lastName,
}: Pick<User, 'confirmationToken' | 'firstName' | 'lastName'>) => {
  const formData = new FormData()
  formData.append('FirstName', firstName)
  formData.append('LastName', lastName)
  const response = await axios.post(`/Account/EditProfile`, formData, {
    headers: {
      Authorization: `Bearer ${confirmationToken}`,
    },
  })
  return response
}

export default handleEditProfile
