import { PlusIcon } from "@heroicons/react/solid";
import React from "react";
import CompaniesList from "./CompaniesList";

export default function RightBlock({  whoToFollow,  show, setShowCreateCompany, showCreateCompany, companies, onActive }) {
  return (
    <aside className="hidden xl:block xl:col-span-4">
      <div className="sticky top-4 space-y-4">
      <div className={  show === 'Организация' ? 'visible' : 'hidden' }>
      <section>
        <button
            type="button"
            className="inline-flex items-center px-4 py-2 mb-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={()=>setShowCreateCompany(!showCreateCompany)}
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Добавить новая организация
          </button>
        </section>

        <section aria-labelledby="who-to-follow-heading">
          <CompaniesList show={show}  whoToFollow={whoToFollow} companies={companies} onActive={onActive} />
        </section>
        </div>

      </div>
    
    </aside>
  );
}



