import React, { useEffect, useState } from "react";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

import * as yup from 'yup';

yup.setLocale({
  string:{

    required:'Заполните'
  }
})
const schema=yup.object({
  firstName:yup.string().required()

}).required()

export default function ProfileForm(props) {
  const {register, handleSubmit, watch, formState:{errors}} =useForm({
    resolver:yupResolver(schema)
  })
  const [showPassBlock, setShowPassBlock] = useState(false);

  const onSubmit=(data)=>{
    console.log(data);
  }
  return (
    <form  onSubmit={handleSubmit(onSubmit)} className="m-4 ">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-4 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Информации владельца
              <span className="inline-flex items-center ml-2 px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                Владелец
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-6 gap-y-2 gap-x-6">
            <div className="col-span-6  lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Имя 
              </label>
              <input
                {...register("firstName", {required:true, maxLength:20, pattern: /^[A-Za-z]+$/i  })}
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={ props.user.firstName }
              />
              <p>{errors.firstName?.message}</p>
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="surName"
                className="block text-sm font-medium text-gray-700"
              >
                Фамилия
              </label>
              <input
                {...register("surName", {required:true, maxLength:20, pattern: /^[A-Za-z]+$/i   })}
                type="text"
                name="surName"
                id="surName"
                autoComplete="surName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={ props.user.surName }
              />
            </div>

            <div className="col-span-6  lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="fatherName"
                className="block text-sm font-medium text-gray-700"
              >
                Отчество
              </label>
              <input
                {...register("fatherName", { required:true, maxLength:20, pattern: /^[A-Za-z]+$/i})}
                type="text"
                name="fatherName"
                id="fatherName"
                autoComplete="fatherName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={ props.user.fatherName }
              />
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Почта
              </label>
              <input
                {...register('email', {required:true, maxLength:50, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={ props.user.email }
              />
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Номер телефона
              </label>
              <input
                {...register("phone", {required:true, maxLength:15, pattern:[0-9] })}
                type="text"
                name="phone"
                id="phone"
                autoComplete="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={ props.user.phone }
              />
            </div>

            <div className="col-span-6  lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Регион
              </label>
              <select
                {...register('location')}
                id="location"
                name="location"
                autoComplete="location"
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value='Andijon'>Андижон</option>
                <option value='Buxoro'>Бухоро</option>
                <option value='Fargona'>Фаргона</option>
                <option value='Jizzax'>Жиззах</option>
                <option value='Xorazm'>Хоразм</option>
                <option value='Namangan'>Наманган</option>
                <option value='Navoiy'>Навоий</option>
                <option value='Qashqadaryo'>Қашқадарё</option>
                <option value='Samarqand'>Самарқанд</option>
                <option value='Sirdaryo'>Сирдарё</option>
                <option value='Surxandaryo'>Сурхандарё</option>
                <option value='Toshkent'>Тошкент</option>
                <option value='Qoraqolpogiston'>Қорақалпоғистон Республикаси</option>
              </select>
            </div>
          </div>
          {/*  Блок изминения пароля */}
          <div className={showPassBlock ?  "visible" :"hidden" }>
            <div className="grid grid-cols-6 gap-x-6 gap-y-2 border items-end  rounded-lg border-indigo-600 py-6 px-3">
              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="lastPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Старый пароль
                </label>
                <input
                  type="text"
                  name="lastPassword"
                  id="lastPassword"
                  autoComplete="lastPassword"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Новый пароль
                </label>
                <input
                  type="text"
                  name="newPassword"
                  id="newPassword"
                  autoComplete="newPassword"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-2 whitespace-nowrap">
                <label
                  htmlFor="checkNewPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Повтор пароля
                </label>
                <input
                  type="text"
                  name="checkNewPassword"
                  id="checkNewPassword"
                  autoComplete="checkNewPassword"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-2 whitespace-nowrap">
                <label
                  htmlFor="checkSMSCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  СМС-пароль
                </label>
                <input
                  type="text"
                  name="checkSMSCode"
                  id="checkSMSCode"
                  autoComplete="checkSMSCode"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-2 whitespace-nowrap">
                <button
            type="submit"
            className="bg-indigo-600  border border-transparent rounded-md shadow-sm py-1.5 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            изменить
          </button>
              </div>


              
            </div>
          </div>
        </div>
        <div className="px-4 py-3  bg-gray-50 flex flex-row justify-end space-x-4 items-center text-sm  sm:px-6">
          <div
            onClick={() => setShowPassBlock(!showPassBlock)}
            className="underline underline-offset-2 text-indigo-600 font-bold cursor-pointer hover:text-indigo-500"
          >
            изменить пароль
          </div>
          <input
            type="submit"
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-1.5 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            value='сохранить'
          />
            
          
        </div>
      </div>
    </form>
  );
}
