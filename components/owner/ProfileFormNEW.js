/* This example requires Tailwind CSS v2.0+ */
import { LogoutIcon, MailIcon, PencilIcon, PhoneIcon } from '@heroicons/react/outline'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

export default function ProfileFormNEW({user}) {
  return (  
    <ul role="list" className="grid grid-cols-1 gap-2 ">
      
        <li
          key={user.email}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={user.img} alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{user.firstName + ' ' + user.surName }</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{user.email}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {user.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex hover:bg-gray-100">
                <a
                  href={`mailto:${user.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex users-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <PencilIcon  className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                  <span className="ml-3 text-yellow-500">Изменить</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex hover:bg-gray-100">
                <a
                  href={`tel:${user.telephone}`}
                  className="relative w-0 flex-1 inline-flex users-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <LogoutIcon className="w-5 h-5 text-red-500" aria-hidden="true" />
                  <span className="ml-3 text-red-500">Выход</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      
    </ul>
  )
}
