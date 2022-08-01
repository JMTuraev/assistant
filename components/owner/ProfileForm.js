import React, { useEffect, useState } from "react";
import {set, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useRouter } from "next/router";

yup.setLocale({
  string:{
    required:'Заполните'
  }
})
const schema=yup.object({
  firstName:yup.string().required(),
  surName : yup.string().required(),
  fatherName : yup.string().required(),
  email : yup.string().required(),
  phone : yup.string().required(),
  location : yup.string().required(),

}).required()

export default function ProfileForm({user, setUser}) {
  const router=useRouter()  
  const {register, handleSubmit, watch, formState:{errors}} =useForm({
    resolver:yupResolver(schema)
  })
  const [showPassBlock, setShowPassBlock] = useState(false);
  
  const [success, setSuccess]=useState(false)

   
    
  const onSubmit= async (data)=>{
    
    console.log(data)
    const res = await fetch(`http://localhost:3000/api/user/updateInfo`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.ok) {
            setUser(result.user);
            setSuccess(true)
          }


          return null;
        },
        (err) => {
          console.log(err);
        }
      );
   
  }
  return (
    <>
    <div className={success ? ' hidden'  : ''}>
    <form onSubmit={handleSubmit(onSubmit)}>
           
            <div className="grid grid-cols-6 gap-x-4 gap-y-2 px-2 ">
            
            <h3 className="text-lg col-start-2 col-span-4  font-medium text-slate-900 text-center">
                Информации владельца
              </h3>
              <div className="col-span-6  lg:col-span-2 sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 ml-2"
                >
                  Имя
                </label>
                <input
                  {...register("firstName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="name"
                  className=" block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue={user.firstName}
                />
                <p>{errors.firstName?.message}</p>
              </div>

              <div className="col-span-6 lg:col-span-2 sm:col-span-3">
                <label
                  htmlFor="surName"
                  className="block text-sm font-medium text-gray-700 ml-2"
                >
                  Фамилия
                </label>
                <input
                  {...register("surName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  type="text"
                  name="surName"
                  id="surName"
                  autoComplete="surName"
                  className=" block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue={user.surName}
                />
              </div>

              <div className="col-span-6  lg:col-span-2 sm:col-span-3">
                <label
                  htmlFor="fatherName"
                  className="block text-sm font-medium text-gray-700 ml-2"
                >
                  Отчество
                </label>
                <input
                  {...register("fatherName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  type="text"
                  name="fatherName"
                  id="fatherName"
                  autoComplete="fatherName"
                  className="mt-1  block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue={user.fatherName}
                />
              </div>

              <div className="col-span-6 lg:col-span-2 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 ml-2"
                >
                  Почта
                </label>
                <input
                  {...register("email", {
                    required: true,
                    maxLength: 50,
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  })}
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue={user.email}
                />
              </div>

              <div className="col-span-6 lg:col-span-2 sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 ml-2"
                >
                  Номер телефона
                </label>
                <input
                  {...register("phone", {
                    required: true,
                    maxLength: 15,
                    pattern: [0 - 9],
                  })}
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue={user.phone}
                />
              </div>

              <div className="col-span-6  lg:col-span-2 sm:col-span-3">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 ml-2"
                >
                  Регион
                </label>
                <select
                  {...register("location")}
                  id="location"
                  name="location"
                  autoComplete="location"
                  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="Andijon">Андижон</option>
                  <option value="Buxoro">Бухоро</option>
                  <option value="Fargona">Фаргона</option>
                  <option value="Jizzax">Жиззах</option>
                  <option value="Xorazm">Хоразм</option>
                  <option value="Namangan">Наманган</option>
                  <option value="Navoiy">Навоий</option>
                  <option value="Qashqadaryo">Қашқадарё</option>
                  <option value="Samarqand">Самарқанд</option>
                  <option value="Sirdaryo">Сирдарё</option>
                  <option value="Surxandaryo">Сурхандарё</option>
                  <option value="Toshkent">Тошкент</option>
                  <option value="Qoraqolpogiston">
                    Қорақалпоғистон Республикаси
                  </option>
                </select>
              </div>
   
                <input type='submit' className="col-end-6   text-indigo-500 text-base font-bold  bg-white p-2 w-44 rounded-lg  hover: text-indigo-700 hover:bg-gray-100" value={'Изменить'}/>
   
            </div>
         
     
    </form>
    </div>
    
    <div className={success ? 'visible'  : 'hidden'}>
        <span className="font-bold text-center justify-center   ">Ваш данных успешно обновлена</span>
        <span className="font-bold cursor-pointer  justify-end">x</span>
    </div>
    
    </>
  );
}
