import {Urls} from '@/constants'
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'

const Profile = () => {
  const router = useRouter()

  useEffect(() => {
    router.push(Urls.HOME_PAGE)
  }, [router])
  return <></>
}

export default Profile
