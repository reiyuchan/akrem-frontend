import {LucideIcon} from 'lucide-react'

export interface Product {
  id: number
  name: string
  price: number
  priceAfterDiscount: number
  imagePath: string
  totalQuantity: number
}
export interface DonationCategory {
  id: number
  name: string
  icon: LucideIcon
}

export interface DonationItem {
  categoryId: number
  itemName: string
  medicineConcentration: string
  image: string
  medicineForm: number
  numberOfStrips: number
  numberOfPills: number
  expirationDate: string
  quantity: number
}

export interface DonationErrors {
  itemName?: string
  medicineConcentration?: string
  numberOfStrips?: string
  numberOfPills?: string
  quantity?: string
  image?: string
}

export interface Credentials {
  userId?: string | string[]
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  phoneNumber: string
  hasWhatsApp: boolean
  address: {
    streetName: string
    areaID: number
  }
}
export interface UserSecrets extends Credentials {
  confirmationToken: string | string[] | undefined
  currentPassword?: string
  otp?: string
}
export interface InputField {
  type: string
  name: string
  value?: string
  errMessageProperty?: string
  label?: string
}
export interface UpdatedUser extends UserSecrets {
  newEmail: string | undefined
}
export type User = UserSecrets & Credentials
