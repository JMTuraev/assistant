import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React, {Fragment, useState} from 'react';

export default function MarketNameDropDown({ markets, selects, setSelects }) {
  
    const onSelect = (market) => {
      const selectFilter = selects.filter((select) => select.id !== market.id);
  
      setSelects([...selectFilter, market]);
    };
  
    const onDelete = (id) => {
      const selectFilter = selects.filter((select) => select.id !== id);
      setSelects(selectFilter);
    };
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    return (
      <>
        {selects.map((select) => (
          // eslint-disable-next-line react/jsx-key
          <span className="m-1 inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700 truncate">
            {select.name}
            <button
              type="button"
              className=" flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
              onClick={() => {
                onDelete(select.id);
              }}
            >
              <svg
                className="h-2 w-2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 8 8"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M1 1l6 6m0-6L1 7"
                />
              </svg>
            </button>
          </span>
        ))}
  
        <Menu as="div" className="  text-left mt-2">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Выберите магазин
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
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
                {markets.map((market) => (
                  // eslint-disable-next-line react/jsx-key
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => onSelect(market)}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {market.name}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </>
    );
  }
  