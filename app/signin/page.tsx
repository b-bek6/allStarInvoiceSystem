'use client'
import React from 'react'
import Image from 'next/image'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string,
  password: string,
};


export default function page() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("email")) 
  return (
    <div>
        <section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
        <Image
        className="w-8 h-8 mr-2" 
         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
         width={32}
         height={32}
         alt="Picture of the author"
        />
          All Star Shop    
      </a>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                      <label  
                      className="block mb-2 text-sm font-medium text-gray-900 "
                      >Your email</label>
                      <input type="email" 
                        id="email" 
                        {...register("email",{required:'Email is required'})}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com"  />
                         {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                  </div>
                  <div>
                      <label  
                      className="block mb-2 text-sm font-medium text-gray-900 "
                      >Password</label>
                      <input 

                        type="password" 
                        id="password" 
                        placeholder="••••••••" 
                        {...register("password", { required: 'password is required' })} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "  />
                         {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label  className="text-gray-500 ">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                  </div>
                  <input type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "/>
                  <p className="text-sm font-light text-gray-500 ">
                      Don't have an account yet? <a href='#' className="font-medium text-primary-600 hover:underline">Sign up </a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
