import { PlusIcon } from "@heroicons/react/solid";
import React from "react";
import NewPersonal from "../personal/NewPersonal";
import CompaniesList from "./CompaniesList";

export default function RightBlock({  whoToFollow,  show, setShowCreateCompany, showCreateCompany, companies, onActive }) {
  return (
    <aside className="hidden xl:block xl:col-span-2">
      <div className="sticky top-4 ">
      <div className={  show === 'Организация' ? 'visible' : 'hidden' }>
          {/* code     */}
      </div>

      <div className={  show === 'Моя команда' ? 'visible' : 'hidden' }>

        <section aria-labelledby="who-to-follow-heading">
          <NewPersonal show={show}  whoToFollow={whoToFollow} companies={companies} onActive={onActive} />
        </section>
      </div>

      </div>
    
    </aside>
  );
}



