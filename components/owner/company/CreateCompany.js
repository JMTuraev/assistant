import React, { useEffect, useState } from "react";

export default function CreateCompany() {
  return (
    <form action="#" method="POST" className="m-4 ">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-4 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                Добавить новая организация

            </h3>
          </div>

          <div className="grid grid-cols-6 gap-y-2 gap-x-6">
            <div className="col-span-6  lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Название
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6  lg:col-span-2 sm:col-span-3">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                категория
              </label>
              <select
                id="location"
                name="location"
                autoComplete="location"
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>Одежды</option>
                <option>Бытовая техника</option>
                <option>Движимое имущество</option>
                <option>Недвижимое имущество</option>
                <option>Другие</option>
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

            <div className="col-span-6 lg:col-span-6 sm:col-span-6">
              <label
                htmlFor="lawAdress"
                className="block text-sm font-medium text-gray-700"
              >
                Юридический адрес
              </label>
              <input
                type="text"
                name="lawAdress"
                id="lawAdress"
                autoComplete="lawAdress"
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
                type="text"
                name="mfo"
                id="mfo"
                autoComplete="mfo"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1.5 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

          </div>
        </div>
        <div className="px-4 py-3  bg-gray-50 flex flex-row justify-end space-x-4 items-center text-sm  sm:px-6">
          
          <button
            type="submit"
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-1.5 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            добавить
          </button>
        </div>
      </div>
    </form>
  );
}
