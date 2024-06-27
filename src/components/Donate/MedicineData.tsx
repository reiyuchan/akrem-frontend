import {
  Button,
  Checkbox,
  DonationCategories,
  Form,
  ImgUpload,
  Input,
} from '@/components'
import {ErrorMessage, Label, Name, Type} from '@/constants'
import {useDonate} from '@/hooks/donation/useDonate'
import {
  useDonationCategory,
  useDonationImage,
  useDonationItem,
  useDonationList,
  useFormErrors,
  useImageEmpty,
} from '@/store/donation'
import {useUserToken} from '@/store/user'
import {DonationErrors, DonationItem} from '@/types'
import ignoreNaN from '@/utils/ignoreNaN'
import React, {FunctionComponent, useEffect, useState} from 'react'

export const MedicineData: FunctionComponent = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [donationItem, setDonationItem] = useDonationItem()
  const [donationCategory] = useDonationCategory()
  const [, setImageEmpty] = useImageEmpty()
  const [formErrors, setFormErrors] = useFormErrors()
  const {data, mutate, isPending, isSuccess} = useDonate()
  const [token] = useUserToken()
  const [image] = useDonationImage()
  const [donationList, setDonationList] = useDonationList()

  const handleIsOpened = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setIsOpened(true)
      return
    }
    setIsOpened(false)
  }
  const validate = (values: DonationItem): DonationErrors => {
    let errors: DonationErrors = {}
    if (!values.itemName) {
      errors.itemName = ErrorMessage.ITEM_NAME
    }
    if (!values.medicineConcentration) {
      errors.medicineConcentration = ErrorMessage.MEDICINE_CONCENTRATION
    }
    if (!values.numberOfStrips && values.medicineForm === 0) {
      errors.numberOfStrips = ErrorMessage.NUMBER_OF_STRIPS
    }
    if (!values.numberOfPills && values.medicineForm === 0) {
      errors.numberOfPills = ErrorMessage.NUMBER_OF_Pills
    }
    if (!values.quantity) {
      errors.quantity = ErrorMessage.QUANTITY
    }
    if (!values.image) {
      errors.image = ErrorMessage.ITEM_IMAGE
      setImageEmpty(true)
    }
    return errors
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validate(donationItem as DonationItem)
    setFormErrors(errors)
    setIsSubmitting(true)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      Number(e.target.value) > 20 &&
      (e.target.name === Name.MEDICINE_STIRPS ||
        e.target.name === Name.MEDICINE_PILLS ||
        e.target.name === Name.MEDICINE_QUANTITY)
    ) {
      e.target.value = '20'
    }
    if (
      Number(e.target.value) === 0 &&
      (e.target.name === Name.MEDICINE_STIRPS ||
        e.target.name === Name.MEDICINE_PILLS ||
        e.target.name === Name.MEDICINE_QUANTITY)
    ) {
      e.target.value = ''
    }
    setDonationItem({...donationItem, [e.target.name]: e.target.value})
    setFormErrors(prevErrors => ({...prevErrors, [e.target.name]: undefined}))
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      setDonationItem({...donationItem, categoryId: 4712})
      // const {
      //   categoryId,
      //   expirationDate,
      //   image,
      //   itemName,
      //   medicineConcentration,
      //   medicineForm,
      //   numberOfPills,
      //   numberOfStrips,
      //   quantity,
      // } = donationItem as DonationItem
      // mutate({
      //   categoryId: categoryId,
      //   confirmationToken: token[0],
      //   image: image,
      // })
      setDonationList([...donationList, donationItem as DonationItem])
      setDonationItem({
        categoryId: 4712,
        itemName: '',
        medicineConcentration: '',
        expirationDate: '',
        medicineForm: donationCategory,
        numberOfStrips: 0,
        numberOfPills: 0,
        quantity: 0,
      })
      setIsSubmitting(false)
    }
  }, [formErrors, isSubmitting, setDonationItem])

  return (
    <>
      <Form
        method='post'
        // onSubmit={handleSubmit(handleFinalSubmit)}
        onSubmit={handleSubmit}
        className='form-switch bg-transparent shadow-none'>
        <h1 className='text-black self-center text-6xl font-extrabold my-5'>
          Donate
        </h1>
        <div className='w-full h-0.5 my-5 bg-gray-500 self-center bg-opacity-50'></div>
        <div className='flex md:flex-row flex-col m-auto p-5'>
          <div className='w-full px-5'>
            <div className='flex flex-col items-center gap-10 mb-5'>
              <ImgUpload />
              <DonationCategories />
              <Input
                onChange={handleChange}
                type={Type.TEXT}
                value={donationItem.itemName}
                name={Name.ITEM_NAME}
                placeholder={Label.ITEM_NAME}
                label={Label.ITEM_NAME}
                errMessageProperty={formErrors.itemName}
                required
                className='p-0.5 w-full'
              />
              {donationCategory !== 2 && (
                <Input
                  onChange={handleChange}
                  type={Type.TEXT}
                  value={donationItem.medicineConcentration}
                  name={Name.MEDICINE_CONCENTRATION}
                  placeholder={Label.MEDICINE_CONCENTRATION}
                  label={Label.MEDICINE_CONCENTRATION}
                  errMessageProperty={formErrors.itemName}
                  required
                  className='p-0.5 w-full'
                />
              )}
              {donationCategory === 0 && (
                <Input
                  onChange={handleChange}
                  onKeyDown={ignoreNaN}
                  type={Type.Number}
                  max={20}
                  min={0}
                  value={donationItem.numberOfStrips?.toString()}
                  name={Name.MEDICINE_STIRPS}
                  placeholder={Label.NUMBER_OF_STRIPS}
                  label={Label.NUMBER_OF_STRIPS}
                  errMessageProperty={formErrors.itemName}
                  required
                  className='p-0.5 w-52 text-center'
                />
              )}
              {donationCategory === 0 && (
                <Input
                  onChange={handleChange}
                  onKeyDown={ignoreNaN}
                  type={Type.Number}
                  max={20}
                  min={0}
                  value={donationItem.numberOfPills?.toString()}
                  name={Name.MEDICINE_PILLS}
                  placeholder={Label.NUMBER_OF_Pills}
                  label={Label.NUMBER_OF_Pills}
                  errMessageProperty={formErrors.numberOfPills}
                  required
                  className='p-0.5 w-52 text-center'
                />
              )}
              <Input
                onChange={handleChange}
                onKeyDown={ignoreNaN}
                type={Type.Number}
                max={20}
                min={0}
                value={donationItem.quantity?.toString()}
                name={Name.MEDICINE_QUANTITY}
                placeholder={Label.QUANTITY}
                label={Label.QUANTITY}
                errMessageProperty={formErrors.quantity}
                required
                className='p-0.5 w-52 text-center'
              />
              <div className='flex flex-row gap-4 items-center justify-center'>
                <Checkbox
                  onChange={handleIsOpened}
                  containerStyle='relative top-4'
                  text='Opened Package'
                  textPosition='right'
                />
                {isOpened && (
                  <Input
                    onChange={handleChange}
                    type={Type.DATE}
                    value={donationItem.expirationDate}
                    name={Name.EXPIRATION_DATE}
                    placeholder={Label.EXPIRATION_DATE}
                    label={Label.EXPIRATION_DATE}
                    required
                    className='p-0.5 w-full'
                  />
                )}
              </div>
              <Button className='w-40 text-slate-100 font-bold' type='submit'>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  )
}
