import Link from "next/link";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LeftMenu({ navigation, communities, show, role }) {
  return (
    <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
      <div className="pb-8 space-y-1">
        {navigation.map((item) => (
          <Link href={`/owner/${item.link}`} key={item.name}>
            <a
              // onClick={()=>onActive(item.name)}
              className={classNames(
                show === item.name
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50",
                "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className={classNames(
                  show === item.name
                    ? "text-gray-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </a>
          </Link>
        ))}
      </div>
      <div className="pt-10">
        <p
          className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
          id="communities-headline"
        >
          My communities
        </p>
        <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
          {communities.map((community) => (
            <a
              key={community.name}
              href={community.href}
              className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              <span className="truncate">{community.name}</span>
            </a>
          ))}
        </div>
      </div>
      
    </nav>
    
  );
}
