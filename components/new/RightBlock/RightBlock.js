import { PlusIcon } from "@heroicons/react/solid";
import React, {useContext} from "react";
import TemplateContext from "../../../context/TemplateContext";
import CreateCompany from "../company/CreateCompany";
import NewPersonal from "../personal/NewPersonal/NewPersonal";
import FilterPersonal from "./company/FilterPersonal";



export default function RightBlock({  whoToFollow,  show, setShowCreateCompany, showCreateCompany, companies, onActive }) {
  const {personalRole}=useContext(TemplateContext)
  const {role, companyId}=personalRole
  return (
    <aside className="hidden xl:block xl:col-span-2">
      <div className="sticky top-4 ">

      <div className={  personalRole && show === 'Организация' ? 'visible' : 'hidden' }>
          <FilterPersonal role={role} companyId={companyId}/>
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



