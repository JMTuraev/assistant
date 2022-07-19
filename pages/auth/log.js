import React, {useState} from 'react';

import Registration from "../../components/AuthorizationPage/Resgistration";
import Services from "../../components/AuthorizationPage/Services";


export default function Example() {

  const [open, setOpen] = useState(false)  
  return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
        <div className="min-h-screen flex flex-row   py-12 sm:px-6 lg:px-8 bg-slate-100">

          <div className="mt-8   sm:mx-auto sm:w-full sm:max-w-md   ">
            
            <h1 className=" text-3xl ml-4 font-bold text-indigo-600 ">Assistant </h1>
            
            <h2 className="mt-1  text-2xl  text-gray-900">Ваш бизнес помощник</h2>
              <Services />
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Электронная почта
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Пароль
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Запомнить меня
                    </label>
                  </div>
  
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      забыли пароль?
                    </a>
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Вход
                  </button>
                </div>
              </form>
  
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500 font-bold">или</span>
                  </div>
                </div>
                <div className="flex flex-row space-x-6 justify-center items-center">
                <button
                    onClick={()=>setOpen(true)}
                    type="submit"
                    className=" flex justify-center items-center font-bold py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Регистрация
                  </button>
                <span className="whitespace-nowrap  underline underline-offset-4 cursor-pointer hover:text-indigo-600"> праила регистрации</span>
                </div>
                <Registration open={open} setOpen={setOpen}/>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  