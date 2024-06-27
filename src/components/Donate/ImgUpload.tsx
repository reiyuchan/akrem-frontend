import {ErrorMessage} from '@/constants'
import {
  useDonationImage,
  useDonationItem,
  useImageEmpty,
} from '@/store/donation'
import {RESET} from 'jotai/utils'
import {Camera} from 'lucide-react'
import Image from 'next/image'
import React, {FunctionComponent, useEffect, useRef} from 'react'

export const ImgUpload: FunctionComponent<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({className, ...restProps}) => {
  const imgRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useDonationImage()
  const [donationItem, setDonationItem] = useDonationItem()
  const [imageEmpty] = useImageEmpty()

  const fileToBase64 = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => setImage(reader.result as string)
    reader.onerror = error => console.log(error)
  }

  const handleImgUpload = () => {
    if (!imgRef.current?.files) return
    const imgData = new FormData()
    imgData.append('img', imgRef.current.files[0])
    // const img = URL.createObjectURL(imgRef.current.files[0])
    fileToBase64(imgRef.current.files[0])
    // setDonationItem({...donationItem, image: image})
  }

  useEffect(() => {
    setDonationItem({...donationItem, image})
  }, [image, setDonationItem])

  useEffect(() => {
    setImage(RESET)
  }, [setImage])

  return (
    <form className='flex flex-col gap-4 items-center'>
      <div
        className='cursor-pointer rounded-full active:bg-black text-black active:text-white'
        onClick={() => imgRef.current?.click()}>
        <div className='border-black  border-2 rounded-full p-2'>
          <Camera size={70} />
        </div>
      </div>
      <input
        className='hidden'
        name='medicine'
        type='file'
        ref={imgRef}
        onChange={handleImgUpload}
        accept='image/png, image/jpeg, image/jpeg, .heic'
      />
      {image && (
        <Image src={image} width={100} height={100} alt='medicine.png' />
      )}
      {imageEmpty && !image && (
        <span className='text-red-500'>{ErrorMessage.ITEM_IMAGE}</span>
      )}
    </form>
  )
}
