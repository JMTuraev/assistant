import React, {Fragment, useState} from 'react'
import { Menu, Transition } from '@headlessui/react'
import ProfileForm from '../new/ProfileForm'
import Companies from './company/Companies'
import CreateMarket from './CreateMarket'
import RoadMap from './roadMap'
import Static from './Static'

<<<<<<< HEAD
export default function CenterBlock({icons, tabs, questions, classNames, user, setUser, show}) {
    const {ChatAltIcon, CodeIcon, DotsVerticalIcon, EyeIcon, FlagIcon, ShareIcon, StarIcon, ThumbUpIcon}=icons

    const people = [
      { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
      // More people...
    ]
  
    return (
      <main className="lg:col-span-9 xl:col-span-6">
        <div className="px-4 sm:px-0">
          <div className="sm:hidden">
            <label htmlFor="question-tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="question-tabs"
              className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav
              className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
              aria-label="Tabs"
            >
              {tabs.map((tab, tabIdx) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  aria-current={tab.current ? "page" : undefined}
                  className={classNames(
                    tab.current
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700",
                    tabIdx === 0 ? "rounded-l-lg" : "",
                    tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                    "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                  )}
                >
                  <span>{tab.name}</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      tab.current ? "bg-indigo-500" : "bg-transparent",
                      "absolute inset-x-0 bottom-0 h-0.5"
                    )}
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="sr-only">Recent questions</h1>

          <ul role="list" className="space-y-4">
            <div className={show === "Настройки" ? "visible" : "hidden"}>
              <div className="bg-white px-2 py-2 shadow sm:p-2 ">
                <ProfileForm user={user} setUser={setUser} />
              </div>
            </div>

            <div className={show === "Организация" ? "visible" : "hidden"}>
              <div className="bg-white px-2 py-2 shadow sm:p-2 ">
                <CreateCompany user={user} setUser={setUser} />
              </div>

              <div className="bg-white px-2 py-2 shadow sm:p-2">
                <div className="px-4 sm:px-6 lg:px-8">
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
                                  Название
                                </th>
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                >
                                  Расположения
                                </th>
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                >
                                  Юридический адрес
                                </th>
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                >
                                  Инн
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Количество директоров
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              {companys && (
                                <>
                                  {companys.map((company) => (
                                    <tr
                                      key={company.id_u}
                                      className="divide-x divide-gray-200"
                                    >
                                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {company.name}
                                      </td>
                                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                        {company.location}
                                      </td>
                                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                                        {company.lawAddress}
                                      </td>
                                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                                        {company.inn}
                                      </td>
                                    </tr>
                                  ))}
                                </>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={show === "Магазин" ? "visible" : "hidden"}>
              <div className="bg-white px-2 py-2 shadow sm:p-2 ">
                <CreateMarket user={user} setUser={setUser} />
              </div>
            </div>
          </ul>
        </div>
        <div className="mt-4">
          <h1 className="sr-only">Recent questions</h1>
          <ul role="list" className="space-y-4">
            {questions.map((question) => (
              <li
                key={question.id}
                className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
              >
                <article aria-labelledby={"question-title-" + question.id}>
                  <div>
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={question.author.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          <a
                            href={question.author.href}
                            className="hover:underline"
                          >
                            {question.author.name}
                          </a>
                        </p>
                        <p className="text-sm text-gray-500">
                          <a href={question.href} className="hover:underline">
                            <time dateTime={question.datetime}>
                              {question.date}
                            </time>
                          </a>
                        </p>
                      </div>
                      <div className="flex-shrink-0 self-center flex">
                        <Menu
                          as="div"
                          className="relative inline-block text-left"
                        >
                          <div>
                            <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                              <span className="sr-only">Open options</span>
                              <DotsVerticalIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "flex px-4 py-2 text-sm"
                                      )}
                                    >
                                      <StarIcon
                                        className="mr-3 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span>Add to favorites</span>
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "flex px-4 py-2 text-sm"
                                      )}
                                    >
                                      <CodeIcon
                                        className="mr-3 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span>Embed</span>
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "flex px-4 py-2 text-sm"
                                      )}
                                    >
                                      <FlagIcon
                                        className="mr-3 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span>Report content</span>
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <h2
                      id={"question-title-" + question.id}
                      className="mt-4 text-base font-medium text-gray-900"
                    >
                      {question.title}
                    </h2>
                  </div>
                  <div
                    className="mt-2 text-sm text-gray-700 space-y-4"
                    dangerouslySetInnerHTML={{ __html: question.body }}
                  />
                  <div className="mt-6 flex justify-between space-x-8">
                    <div className="flex space-x-6">
                      <span className="inline-flex items-center text-sm">
                        <button
                          type="button"
                          className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                        >
                          <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                          <span className="font-medium text-gray-900">
                            {question.likes}
                          </span>
                          <span className="sr-only">likes</span>
                        </button>
                      </span>
                      <span className="inline-flex items-center text-sm">
                        <button
                          type="button"
                          className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                        >
                          <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                          <span className="font-medium text-gray-900">
                            {question.replies}
                          </span>
                          <span className="sr-only">replies</span>
                        </button>
                      </span>
                      <span className="inline-flex items-center text-sm">
                        <button
                          type="button"
                          className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                        >
                          <EyeIcon className="h-5 w-5" aria-hidden="true" />
                          <span className="font-medium text-gray-900">
                            {question.views}
                          </span>
                          <span className="sr-only">views</span>
                        </button>
                      </span>
                    </div>
                    <div className="flex text-sm">
                      <span className="inline-flex items-center text-sm">
                        <button
                          type="button"
                          className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                        >
                          <ShareIcon className="h-5 w-5" aria-hidden="true" />
                          <span className="font-medium text-gray-900">
                            Share
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
=======

export default function CenterBlock({icons, tabs, questions, classNames, user, setUser, show, showCreateCompany, setShowCreateCompany}) {
     return (
    <main className="lg:col-span-9 xl:col-span-6">

                <ul role="list" >
                  <div  className={  show === 'Статистика' ? 'visible' : 'hidden' }>  
                    <Static  user={user} setUser={setUser} tabs={tabs} classNames={classNames}  />
                  </div>
 
                <div  className={  show === 'Настройки' ? 'visible' : 'hidden' }>
                  <div >  
                    <ProfileForm  user={user} setUser={setUser}  />
                    </div>
                  </div>

                  <div  className={  show === 'Организация' ? 'visible' : 'hidden' }>
                   <Companies user={user} setUser={setUser} showCreateCompany={showCreateCompany} setShowCreateCompany={setShowCreateCompany}/>
          
                  </div>


                  <div  className={  show === 'Магазин' ? 'visible' : 'hidden' }>
                  <div className='bg-white px-2 pb-2 shadow sm:pb-2 '> 
                    <CreateMarket user={user} setUser={setUser} show={show}  />
                    </div>
                  </div>

                </ul>
              
              
              
            </main>
  )
>>>>>>> c7291ba47722e2bfec73b7c4e4200a6ab8e7cf59
}
