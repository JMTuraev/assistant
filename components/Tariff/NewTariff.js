import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const colors = [
  { name: "Pink", bgColor: "bg-pink-400", selectedColor: "ring-pink-500" },
  {
    name: "Purple",
    bgColor: "bg-purple-400",
    selectedColor: "ring-purple-500",
  },
  { name: "Blue", bgColor: "bg-blue-400", selectedColor: "ring-blue-500" },
  { name: "Green", bgColor: "bg-green-400", selectedColor: "ring-green-500" },
  {
    name: "Yellow",
    bgColor: "bg-yellow-400",
    selectedColor: "ring-yellow-500",
  },
];

function NewTariff() {
  const [selectedColor, setSelectedColor] = useState(colors[2]);
  return (
    <section className="relative mt-4" aria-labelledby="pricing-heading ">
      <h2 id="pricing-heading" className="sr-only">
        Новый Тариф
      </h2>

      {/* tariffs */}
      <div className="flex items-end max-w-2xl mx-auto px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <form>
          <div
            className={`${selectedColor.bgColor}  relative px-4 py-6   border border-gray-200 rounded-2xl shadow-sm flex flex-col`}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                <input
                  type={"text"}
                  placeholder={"Название тарифа"}
                  className={`${selectedColor.bgColor} block text-white placeholder-white border-white w-full border-0 border-b border-transparent  focus:border-gray-900 focus:ring-0 sm:text-sm `}
                />
              </h3>

              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-3xl font-extrabold tracking-tight">
                  <input
                    type={"text"}
                    placeholder="40"
                    className={`${selectedColor.bgColor}  w-12  text-white placeholder-white border-white border-0 border-b border-transparent  focus:border-gray-900 focus:ring-0 sm:text-sm `}
                  />
                  {" % "}
                </span>
                <span className="ml-1 text-xl font-semibold">
                  {"  на  "}{" "}
                  {
                    <input
                      type={"text"}
                      placeholder="120"
                      className={`${selectedColor.bgColor}  w-12  text-white placeholder-white border-white border-0 border-b border-transparent  focus:border-gray-900 focus:ring-0 sm:text-sm `}
                    />
                  }{" "}
                  Месяцев
                </span>
              </p>

              {/* Feature list */}
            </div>
          </div>
          <div className="bg-white w-auto mx-4 rounded-b p-4">
            <RadioGroup value={selectedColor} onChange={setSelectedColor}>
              <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                Цвет тарифа
              </RadioGroup.Label>
              <div className="mt-4 flex items-center space-x-3">
                {colors.map((color) => (
                  <RadioGroup.Option
                    key={color.name}
                    value={color}
                    className={({ active, checked }) =>
                      classNames(
                        color.selectedColor,
                        active && checked ? "ring ring-offset-1" : "",
                        !active && checked ? "ring-2" : "",
                        "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                      )
                    }
                  >
                    <RadioGroup.Label as="span" className="sr-only">
                      {color.name}
                    </RadioGroup.Label>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        color.bgColor,
                        "h-8 w-8 border border-black border-opacity-10 rounded-full"
                      )}
                    />
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
            <div className="">
              <button
                type="submit"
                className="mt-4 mb-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                создать тариф
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NewTariff;
