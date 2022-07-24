import { PlusSmIcon } from '@heroicons/react/solid'
import React from 'react'

function CompaniesList({whoToFollow, show}) {
  return (
    <div className={  show === 'Организация' ? 'visible' : 'hidden' }>
    <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2
                id="who-to-follow-heading"
                className="text-base font-medium text-gray-900"
              >
                Who to follow
              </h2>
              <div className="mt-6 flow-root">
                <ul role="list" className="-my-4 divide-y divide-gray-200">
                  {whoToFollow.map((user) => (
                    <li
                      key={user.handle}
                      className="flex items-center py-4 space-x-3"
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          <a href={user.href}>{user.name}</a>
                        </p>
                        <p className="text-sm text-gray-500">
                          <a href={user.href}>{"@" + user.handle}</a>
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-0.5 rounded-full bg-indigo-50 text-sm font-medium text-indigo-700 hover:bg-indigo-100"
                        >
                          <PlusSmIcon
                            className="-ml-1 mr-0.5 h-5 w-5 text-indigo-400"
                            aria-hidden="true"
                          />
                          <span>Follow</span>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CompaniesList