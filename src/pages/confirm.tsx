import Image from 'next/image'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {Form, Loading} from '@/components'
import {useConfirmUser} from '@/hooks/user/useConfirmUser'
import {UpdatedUser} from '@/types'

const Confirm = () => {
  const router = useRouter()
  const {userId, confirmationToken, newEmail} = router.query
  const updatedUserData = {userId, confirmationToken, newEmail} as UpdatedUser
  const {isPending, refetch} = useConfirmUser(updatedUserData)

  useEffect(() => {
    if (router.isReady) {
      if (!userId || !confirmationToken) {
        router.push('/member')
        return
      }
      refetch()
      setTimeout(() => router.push('/member'), 3000)
    }
  }, [router, confirmationToken, userId, refetch])

  if (isPending) return <Loading />
  else
    return (
      <div className='bg-slate-200 w-full min-h-screen flex items-center justify-center p-5'>
        <Form className='w-full  items-center gap-5'>
          <Image
            src={'/akrem_logo.png'}
            width={200}
            height={200}
            alt='Akrem Logo'
            draggable='false'
          />
          <div className='text-blue-600 font-medium text-lg space-y-5 text-center'>
            <p>Thank you for confirming your e-mail!</p>
          </div>
        </Form>
      </div>
    )
}

export default Confirm
