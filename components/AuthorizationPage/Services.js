/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
      name: 'услуга рассрочки',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    // More people...
  ]
  const servicies = [
    { id: 1, person: people[0], project: 'услуга рассрочки', commit: '2d89f0c8', environment: 'production',  },
    { id: 2, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production',  },
    { id: 3, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production',  },
    { id: 4, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production',  },
    // More items...
  ]
  
  export default function Services() {
    return (
      <div>
        <ul role="list" className="divide-y divide-gray-200">
          {servicies.map((service) => (
            <li key={service.id} className="py-4">
              <div className="flex space-x-3">
                <img className="h-12 w-12 rounded-full" src={service.person.imageUrl} alt="" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">{service.person.name}</h3>
                    <p className="text-sm text-gray-500">{service.time}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    Deployed {service.project} ({service.commit} in master) to {service.environment}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  