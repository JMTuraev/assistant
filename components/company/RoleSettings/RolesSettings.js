import { Switch } from "@headlessui/react";
import { useState } from "react";
import Toggle from "./Toggle";

/* This example requires Tailwind CSS v2.0+ */
const settingsDefault = [
  {
    id: 1,
    name: "Создание нового магазина ",
    role: [{ director: true, adminstrator: true, seller: false }],
    comment: "bla bla ",
  },
  {
    id: 2,
    name: "Создание нового bazara ",
    role: [{ director: true, adminstrator: true, seller: false }],
    comment: "bla bla ",
  },
  {
    id: 3,
    name: "Создание нового minimarketa ",
    role: [ {director: true},{ adminstrator: true}, {seller: false} ],
    comment: "bla bla ",
  },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RolesSettings() {
  const [settings, setSettings] = useState(settingsDefault);
  const [enabled, setEnabled] = useState(false)
  const onChange=(id, user)=>{
    console.log(user)
    const selectSetting= settings.filter(setting=>setting.id===id).map(item=>item.role===user)

    const selectUser=selectSetting.role
    console.log(selectSetting)
  }
  return (
    <div className="  mt-4">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            Вы сможете управлять роли участников команды.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Создать новый персонал
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Доступы
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Директор
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Админстратор
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Продавец
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">помощь</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {settings.map((setting) => (
                    <tr key={setting.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {setting.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {" "}
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                         onClick={()=>onChange(setting.id, setting.role.director)}
                          className={classNames(
                            enabled ? "bg-indigo-600" : "bg-gray-200",
                            "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          )}
                        >
                          {setting.role.map(user=>(user.director))}
                          <span className="sr-only">Use setting</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              enabled ? "translate-x-5" : "translate-x-0",
                              "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                            )}
                          />
                        </Switch>{" "}
                        {setting.role.director}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {setting.role.adminstrator}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {setting.role.seller}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          помощь
                          <span className="sr-only">, {setting.comment}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
