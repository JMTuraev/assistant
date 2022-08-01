/* eslint-disable react/jsx-key */
/* This example requires Tailwind CSS v2.0+ */

import Link from "next/link";

export default function CompanyListNEW({ companies }) {
  console.log(companies);
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {companies && (
        <>
          {companies.map((company) => (
            <Link href={`/owner/companies/${company.id}`}>
            <li
              key={company.id}
              className="py-4 flex hover:bg-slate-50 bg-white"
            >
              {/* <img className="h-10 w-10 rounded-full" src={company.img} alt="" /> */}
              <div className="ml-3 ">
                <p className="text-sm font-medium text-gray-900">
                  {company.name}
                </p>
                <p className="text-sm text-gray-500">{company.location}</p>
              </div>
            </li>
            </Link>
          ))}
        </>
      )}
    </ul>
  );
}
