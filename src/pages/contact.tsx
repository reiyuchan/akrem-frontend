import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {Button, Form, Input, TextArea} from '@/components'
import {Auto, ErrorMessage, Label, Urls, Type} from '@/constants'

const Contact = () => {
  return (
    <div className='flex flex-col flex-wrap w-full items-center p-5'>
      <Head>
        <title>Akrem - Contact Us</title>
      </Head>
      <Form
        method='post'
        // onSubmit={handleSubmit(handleFinalSubmit)}
        onSubmit={e => {
          e.preventDefault()
          e.currentTarget.reset()
        }}
        className='group form-switch bg-transparent shadow-none'>
        <h1 className='text-black self-center text-6xl font-extrabold my-5'>
          Contact Us
        </h1>
        <div className='w-full h-0.5 my-5 bg-gray-500 self-center bg-opacity-50'></div>
        <div className='flex md:flex-row flex-col p-5 mt-14 m-auto'>
          <Image
            src={Urls.AKREM_BG_LOGO}
            width={400}
            height={400}
            alt='logo.png'
            className='self-start'
          />
          <div className='w-full px-5 mt-5'>
            <div className='flex flex-col gap-5 mb-5'>
              <div className='flex flex-row items-center justify-center gap-5'>
                <Input
                  type={Type.TEXT}
                  label={Label.FIRST_NAME}
                  placeholder={Label.FIRST_NAME}
                  title={ErrorMessage.FIRST_NAME_CONSTRAINT}
                  // {...register('firstName')}
                  // errMessageProperty={errors.email?.message}
                  required
                  className='p-0.5 mb-2 w-full'
                />
                <Input
                  type={Type.TEXT}
                  label={Label.LAST_NAME}
                  placeholder={Label.LAST_NAME}
                  title={ErrorMessage.LAST_NAME_CONSTRAINT}
                  // {...register('lastName')}
                  // errMessageProperty={errors.email?.message}
                  required
                  className='p-0.5 mb-2 w-full'
                />
              </div>
              <Input
                type={Type.EMAIL}
                label={Label.EMAIL}
                placeholder={Label.EMAIL}
                title={ErrorMessage.EMAIL_CONSTRAINT}
                // {...register('email')}
                // errMessageProperty={errors.email?.message}
                required
                autoComplete={Auto.EMAIL_AUTO_COMPLETE}
                className='p-0.5 mb-2 w-full'
              />
              <TextArea placeholder={Label.INQUIRY} label={Label.INQUIRY} />
            </div>
            <div className='flex flex-col items-center gap-5'>
              <Button className='w-40 text-slate-100 font-bold' type='submit'>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Contact
