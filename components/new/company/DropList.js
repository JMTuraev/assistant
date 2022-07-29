import React from 'react'
import CreateCompany from './CreateCompany';
import Personal from './personal';


export default function DropList ({
    companyId,
    company,
    setCompanies,
    setActive,
    active,
    row,
    personal
  })  {
   
    const directors=personal.filter(person=>person.role==='director')
    const admins=personal.filter(person=>person.role==='admin')
    const sellers=personal.filter(person=>person.role==='seller')
   
    const showDrop = (row, active) => {
      switch (row) {
        case 1:
          return (
            <CreateCompany
              setCompanies={setCompanies}
              setActive={setActive}
              active={active}
              companyId={companyId}
              company={company}
              create={false}
            />
          );
  
        case 2.1:
          return <div className='p-2'><Personal personal={directors} color={'bg-yellow-100'}/></div>;
        case 2.2:
          return <div className='p-2'><Personal personal={admins} color={'bg-indigo-100'}/></div>;
  
        case 2.3:
          return <div className='p-2'><Personal personal={sellers} color={'bg-pink-100'}/></div>;
  
        default:
          break;
      }
    };
    return (
      <td colSpan={5} className="m-4 p-4 h-24 bg-gray-200 border-none">
        <div className="border border-yellow-300 ">{showDrop(row, active)}</div>
      </td>
    );
  };
  