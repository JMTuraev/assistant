

/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ]
  
  export default function Personal({personal, color, companyId}) {

    return (
        <div >
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-4 min-w-max">
        {personal.map((person) => (
          <div
            key={person.id}
            className={`${color} relative rounded-lg border border-gray-300  px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
          >
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={person.img} alt="" />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{person.firstName + " " + person.surName}</p>
                <p className="text-sm text-gray-500 truncate">{person.market.length}</p>
              </a>
            </div>
          </div>
        ))}
 
      </div>
      
      </div>
    )
  }
  