import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import React, { useState, Fragment } from "react";
import CompanyNameDropDown from "./CompanyNameDropDown";
import RadioButtonRole from "./RadioButtonRole";
import MarketNameDropDown from "./MarketNameDropDown";

export default function NewPersonal() {
  const companies = [
    {
      id: 1,
      name: "shoxona",
      market: [
        { id: 1, name: "minor" },
        { id: 2, name: "chinor" },
        { id: 3, name: "alfa" },
      ],
    },
    {
      id: 2,
      name: "tesnolike",
      market: [
        { id: 4, name: "minor" },
        { id: 5, name: "chinor" },
        { id: 6, name: "alfa" },
      ],
    },
    {
      id: 3,
      name: "goodzone",
      market: [
        { id: 9, name: "minor" },
        { id: 8, name: "chinor" },
        { id: 7, name: "alfa" },
      ],
    },
    {
      id: 4,
      name: "torrento",
      market: [
        { id: 10, name: "minor" },
        { id: 11, name: "chinor" },
        { id: 12, name: "alfa" },
      ],
    },
  ];

  const markets = [
    { id: 1, name: "minor" },
    { id: 2, name: "chinor" },
    { id: 3, name: "alfa" },
    { id: 4, name: "minor" },
    { id: 5, name: "chinor" },
    { id: 6, name: "alfa" },
  ];
  const [selects, setSelects] = useState([]);

  const people = [
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      role: "Admin",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    // More people...
  ];

  const role = [
    { id: 2, name: "director", value: "директор" },
    { id: 3, name: "admin", value: "админ" },
    { id: 4, name: "seller", value: "продавец" },
  ];

  return (
    <div role="list" className="grid grid-cols-1 gap-2   ">
      <div className="col-span-1 bg-white border  border-indigo-500 rounded-lg shadow divide-y divide-gray-200 ">
        <div className="w-full flex flex-col  p-6 space-y-4">
          <div className="font-medium justify-center">Новый персонал</div>
          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
              htmlhtmlhtmlhtmlFor="name"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
            >
              Имя
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Jane Smith"
            />
          </div>
          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
              htmlhtmlhtmlhtmlFor="name"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
            >
              Фамилия
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Jane Smith"
            />
          </div>

          <div className="relative border border-gray-300 rounded-md px-3 p-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
              htmlhtmlhtmlhtmlFor="name"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
            >
              Отчество
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Jane Smith"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Зарплата
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Зарплата
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option>Сўм</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div>
              <label
                htmlhtmlhtmlhtmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlhtmlhtmlhtmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Номер телефона
              </label>
            </div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PhoneIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="phone"
                id="phone"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="99-123-45-67"
              />
            </div>
            <div className="isolate -space-y-px rounded-md shadow-sm mt-4">
              <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-1 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label
                  htmlhtmlhtmlhtmlFor="name"
                  className="block text-xs font-medium text-gray-900"
                >
                  пароль
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="********"
                />
              </div>
              <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-1 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label
                  htmlhtmlhtmlhtmlFor="job-title"
                  className="block text-xs font-medium text-gray-900"
                >
                  Повторите пароль
                </label>
                <input
                  type="text"
                  name="job-title"
                  id="job-title"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="********"
                />
              </div>
            </div>
            <div className="mt-4">
              <RadioButtonRole role={role} />
            </div>
            <div className="mt-4">
              <CompanyNameDropDown
                companies={companies}
                selects={selects}
                setSelects={setSelects}
              />
            </div>
            <div className="mt-4">
              {selects && <MarketNameDropDown markets={markets} />}
            </div>
          </div>

          <button
            type="button"
            className=" items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            сохранить
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
