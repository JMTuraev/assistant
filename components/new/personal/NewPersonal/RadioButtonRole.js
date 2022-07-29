import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import React, {useState} from 'react';

export default function RadioButtonRole({ role }) {
    const [selecteditems, setSelecteditems] = useState(role[0]);
  
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    return (
      <RadioGroup value={selecteditems} onChange={setSelecteditems}>
        <RadioGroup.Label className="text-base font-medium text-gray-900 ">
          Должность
        </RadioGroup.Label>
  
        <div className="mt-1 grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-x-2">
          {role.map((item) => (
            <RadioGroup.Option
              key={item.id}
              value={item.name}
              className={({ checked, active }) =>
                classNames(
                  checked ? "border-transparent" : "border-gray-300",
                  active ? "border-indigo-500 ring-2 ring-indigo-500" : "",
                  "relative bg-white border rounded-lg shadow-sm p-2 flex cursor-pointer focus:outline-none"
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <span className="flex-1 flex">
                    <span className="flex flex-col">
                      <RadioGroup.Label
                        as="span"
                        className="block text-sm font-medium text-gray-900"
                      >
                        {item.value}
                      </RadioGroup.Label>
                    </span>
                  </span>
                  <CheckCircleIcon
                    className={classNames(
                      !checked ? "invisible" : "",
                      "h-5 w-5 text-indigo-600"
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={classNames(
                      active ? "border" : "border-2",
                      checked ? "border-indigo-500" : "border-transparent",
                      "absolute -inset-px rounded-lg pointer-events-none"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    );
  }