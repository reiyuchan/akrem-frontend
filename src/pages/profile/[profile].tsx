import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import {RESET} from 'jotai/utils'
import {Button, Loading, Modal, ProfileForm} from '@/components'
import {useValideRoute} from '@/hooks/useValideRoute'
import {useUser, useUserDelete, useUserToken} from '@/store/user'
import {useGetUserData} from '@/hooks/user/useGetUserData'
import {useDeleteAccount} from '@/hooks/user/useDeleteAccount'
import {X} from 'lucide-react'
import {Urls} from '@/constants'

const ProfilePage = () => {
  const router = useRouter()
  const [token] = useUserToken()
  const [_, setUser] = useUser()
  const {data, isPending, refetch} = useGetUserData(token[0] || '')
  const [isValid] = useValideRoute(
    data?.data.email,
    router.query.profile,
    '@',
    0,
  )
  const confirmationToken = token[0]
  const {refetch: deleteAccount, isSuccess: isDeleted} = useDeleteAccount({
    confirmationToken,
  })
  const [isDeleting, setIsDeleting] = useUserDelete()

  useEffect(() => {
    if (token.includes('')) {
      router.push(Urls.HOME_PAGE)
      return
    }
    refetch()
    setUser(data?.data || RESET)
  }, [data?.data, setUser, refetch, data, token, router])

  useEffect(() => {
    if (isDeleted) {
      setIsDeleting(false)
      setTimeout(() => router.push('/member'), 3000)
    }
  }, [isDeleted, router, setIsDeleting])

  if (isPending) return <Loading />
  else
    return (
      <>
        <Modal formStyle='relative top-40' open={isDeleting}>
          <X
            color='black'
            className='border-black border-2 rounded-md self-end cursor-pointer hover:bg-gray-400 active:bg-white'
            onClick={() => setIsDeleting(false)}
          />
          <p className='text-red-600 text-xl'>
            Are you sure you want to delete?
          </p>
          <Button
            onClick={() => deleteAccount()}
            className='w-52 self-center bg-red-500 font-semibold hover:bg-red-600 active:bg-red-200 md:w-52'>
            Delete
          </Button>
        </Modal>
        {isValid && (
          <div>
            <Head>
              <title>{`Akrem - ${router.query.profile}`}</title>
            </Head>
            <div className='form-switch flex w-full flex-col flex-wrap items-center p-5'>
              <ProfileForm />
            </div>
          </div>
        )}
      </>
    )
}

export default ProfilePage
