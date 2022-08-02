import { CogIcon } from "@heroicons/react/outline"


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function SectionHeadings({tabs, header, buttonValue, setShow, show, setSelect, select }) {
   debugger
    return (
      <div className="relative  border-b  sm:pb-0 ">
        <div className="md:flex md:items-center md:justify-between pb-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900 pb-2 ml-6">{header}</h3>
          <div className="mr-4 flex md:mt-0 md:absolute md:top-3 md:right-0">
         
           <button
              type="button"
              className=" mr-2 inline-flex items-center px-4 py-2 border border-yellow-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-yellow-300 hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              onClick={()=>setShow(!show)}
            >
             <CogIcon height={25} width={25} />
            </button>
            
            {buttonValue && <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-yellow-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-yellow-300 hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              onClick={()=>setShow(!show)}
              >
              {buttonValue}
            </button>
            }
          </div>
        </div>
        <div className="mt-2">
          <div className="sm:hidden cursor-pointer">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              className="  block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                
                <div
                  key={tab.name}
                  onClick={()=>setSelect(tab.id)}
                  className={classNames(
                    select===tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    )
  }
  