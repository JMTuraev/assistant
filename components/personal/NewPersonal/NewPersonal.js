import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import React, { useState, useEffect, Fragment } from "react";
import CompanyNameDropDown from "./CompanyNameDropDown";
import RadioButtonRole from "./RadioButtonRole";
import MarketNameDropDown from "./MarketNameDropDown";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";

const schema = yup
  .object({
    firstName: yup.string().required(),
    surName: yup.string().required(),
    fatherName: yup.string().required(),
    salary: yup.number().positive().integer().required(),
    currency: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
    login: yup.string().required(),
    img_file: yup.object().required(),
    password: yup.string().required(),
    password_r: yup.string().required(),
  })
  .required();

export default function NewPersonal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const res = await fetch(`http://localhost:3000/api/user/createPersonal`, {
      method: "POST",
      body: JSON.stringify({
        user: data,
        market: selectMarkets,
        company: selectCompanies,
        role: selectRole,
        file : data.img_file
      }),
      headers: { 
        "Content-Type": "application/json",
        'content-type': 'multipart/form-data'
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.ok) {
            alert("Пользователь создан");

            console.log(result.data);
          }
          // Return null if user data could not be retrieved
          return null;
        },
        (err) => {
          console.log(err);
        }
      );
  };

  const [companies, setCompany] = useState([]);
  const [selectCompanies, setSelectCompany] = useState([]);

  const [markets, setMarkets] = useState([]);
  const [selectMarkets, setSelectMarkets] = useState([]);

  const [role, setRole] = useState([]);

  const [selectRole, setSelectRole] = useState(false);

  console.log(selectRole);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/api/company/getCompany")
      .then((res) => res.json())
      .then((data) => {
        setCompany(data.company);
        setLoading(false);
      });

    fetch("http://localhost:3000/api/")
      .then((res) => res.json())
      .then((data) => {
        setRole(data.role);
        setLoading(false);
      });
  }, []);

  const [selects, setSelects] = useState([]);

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div role="list" className="grid grid-cols-1 gap-2   ">
        <div className="col-span-1 bg-white border  border-indigo-500 rounded-lg shadow divide-y divide-gray-200 ">
          <div className="w-full flex flex-col  p-6 space-y-4">
            <div className="font-medium justify-center">Новый персонал</div>
            <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="firstName"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Имя
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                {...register("firstName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Jane Smith"
              />
            </div>
            <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="surName"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Фамилия
              </label>
              <input
                type="text"
                name="surName"
                id="surName"
                {...register("surName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Jane Smith"
              />
            </div>

            <div className="relative border border-gray-300 rounded-md px-3 p-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="fatherName"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Отчество
              </label>
              <input
                type="text"
                name="fatherName"
                id="fatherName"
                {...register("fatherName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Jane Smith"
              />
            </div>

            <div>
              <label
                htmlFor="salary"
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
                  name="salary"
                  id="salary"
                  {...register("salary", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
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
                    {...register("currency", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
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
                  htmlFor="email"
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
                    {...register("email", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label
                  htmlFor="phone"
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
                  {...register("phone", {
                    required: true,
                  })}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="99-123-45-67"
                />
              </div>

              <div className="mt-3">
                <label
                  htmlFor="login"
                  className="block text-sm font-medium text-gray-700"
                >
                  Логин
                </label>
              </div>

              <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <input
                  type="text"
                  name="login"
                  id="login"
                  {...register("login", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Jane Smith"
                />
              </div>

              <div className="mt-3">
                <label
                  htmlFor="img_file"
                  className="block text-sm font-medium text-gray-700"
                >
                  Изображение
                </label>
              </div>

              <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <input
                  type="file"
                  name="img_file"
                  id="img_file"
                  {...register("img_file")}
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  placeholder="Jane Smith"
                />
              </div>

              <div className="isolate -space-y-px rounded-md shadow-sm mt-4">
                <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-1 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium text-gray-900"
                  >
                    Пароль
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    {...register("password", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="********"
                  />
                </div>
                <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-1 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                  <label
                    htmlFor="password_r"
                    className="block text-xs font-medium text-gray-900"
                  >
                    Повторите пароль
                  </label>
                  <input
                    type="text"
                    name="password_r"
                    id="password_r"
                    {...register("password_r", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="********"
                  />
                </div>
              </div>
              <div className="mt-4">
                <RadioButtonRole
                  role={role}
                  selects={selectRole}
                  setSelects={setSelectRole}
                />
              </div>
              {selectRole && (
                <>
                  <div className="mt-4">
                    <CompanyNameDropDown
                      companies={companies}
                      selects={selectCompanies}
                      setSelects={setSelectCompany}
                      markets={markets}
                      setMarkets={setMarkets}
                      selectMarkets={selectMarkets}
                      setSelectMarkets={setSelectMarkets}
                    />
                  </div>
                  {selectRole != 'role-hcvd2swl5wiuit9' && (
                    <>
                      <div className="mt-4">
                        {selects && (
                          <MarketNameDropDown
                            markets={markets}
                            selects={selectMarkets}
                            setSelects={setSelectMarkets}
                          />
                        )}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            <button
              type="submit"
              className=" items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Сохранить
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </form>
  );
}
