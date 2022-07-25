import React, { useEffect, useState, useContext } from "react";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

import * as yup from 'yup';
import TemplateContext from "../../context/TemplateContext";

export default function CreateCompany({companys}) {
  
  const {register, handleSubmit, watch, formState:{errors}} =useForm()

 
  const onSubmit= async (data)=>{

  //   const res = await fetch(`http://localhost:3000/api/company/create`, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         if (result.ok) {
  //           alert("Компания добавлена");
  //         }
  //         return null;
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );

  }

    return (

      <>
      

    <form onSubmit={handleSubmit(onSubmit)} >

          <div className="grid grid-cols-6 gap-x-4 gap-y-2 px-2">
          <h3 className="text-lg col-start-2 col-span-4  font-medium text-slate-900 text-center">
                Добавить новая организация
            </h3>
            <div className="col-span-6  lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Название
              </label>
              <input
              {...register("name")}
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6  lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Категория
              </label>
              <select
                {...register('category')}
                id="category"
                name="category"
                autoComplete="category"
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value={'clothes'}>Одежды</option>
                <option value={'appliances'}>Бытовая техника</option>
                <option value={'movableProperty'}> Движимое имущество</option>
                <option value={'immovableProperty'}>Недвижимое имущество</option>
                <option value={'others'}>Другие</option>
              </select>
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

            <div className="col-span-6 lg:col-span-6 sm:col-span-6">
              <label
                htmlFor="lawAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Юридический адрес
              </label>
              <input
                {...register("lawAddress")}  // паттерн надо поставить
                type="text"
                name="lawAddress"
                id="lawAddress"
                autoComplete="lawAddress"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6  lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="inn"
                className="block text-sm font-medium text-gray-700"
              >
                ИНН
              </label>
              <input
              {...register("inn")}
                type="text"
                name="inn"
                id="inn"
                autoComplete="inn"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="bankAccount"
                className="block text-sm font-medium text-gray-700"
              >
                Банковский счет
              </label>
              <input
              {...register("bankAccount")}
                type="text"
                name="bankAccount"
                id="bankAccount"
                autoComplete="bankAccount"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="mfo"
                className="block text-sm font-medium text-gray-700"
              >
                MFO
              </label>
              <input
                {...register("mfo")}
              
                type="text"
                name="mfo"
                id="mfo"
                autoComplete="mfo"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <input type='submit' className="col-end-6   text-indigo-500 text-base font-bold  bg-white p-2 w-44 rounded-lg  hover: text-indigo-700 hover:bg-gray-100" value={'Сохранить'}/>
 
          </div>
    </form>

    </>
 
  );
}
