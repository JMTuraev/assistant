/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'
import Link from 'next/link'



export default function Breadcrumbs({pages}) {
  return (
    <nav className="flex bg-white p-4 shadow-md cursor-pointer whitespace-nowrap" aria-label="Breadcrumb">
    <ol role="list" className="flex items-center space-x-4">
      <li>
        <div>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </a>
        </div>
      </li>
      {pages.map((page) => (
        <li key={page.name}>
          <div className="flex items-center">
            <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
            <Link
              href={page.href}
            >
                <div className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              aria-current={page.current ? 'page' : undefined}>

              {page.name}
              </div>
            </Link>
          </div>
        </li>
      ))}
    </ol>
  </nav>
  )
}
