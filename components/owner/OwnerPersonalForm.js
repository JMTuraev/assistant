import React, { useEffect, useState } from "react";

export default function OwnerPersonalForm() {
  const [showPassBlock, setShowPassBlock] = useState(false);
  return (
    <form action="#" method="POST" className="m-4 ">
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
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="surName"
                className="block text-sm font-medium text-gray-700"
              >
                Фамилия
              </label>
              <input
                type="text"
                name="surName"
                id="surName"
                autoComplete="surName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                type="text"
                name="fatherName"
                id="fatherName"
                autoComplete="fatherName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Номе телефона
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                id="location"
                name="location"
                autoComplete="location"
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>Андижон</option>
                <option>Бухоро</option>
                <option>Фаргона</option>
                <option>Жиззах</option>
                <option>Хоразим</option>
                <option>Наманган</option>
                <option>Навоий</option>
                <option>Қашқадарё</option>
                <option>Самарқанд</option>
                <option>Сирдарё</option>
                <option>Сурхандарё</option>
                <option>Тошкент</option>
                <option>Қорақалпоғистон Республикаси</option>
              </select>
            </div>
          </div>
          {/*  Блок изминения пароля */}
          <div className={showPassBlock ? "hidden" : "visible"}>
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
          <button
            type="submit"
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-1.5 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            сохранить
          </button>
        </div>
      </div>
    </form>
  );
}
