import CenterBlock from "./centerBlock/CenterBlock";
import Header from "./header/Header";
import LeftMenu from "./leftBlock/LeftMenu";
import RightBlock from "./rightBlock/RightBlock";

import React, { useContext } from "react";
import TemplateContext from "../context/TemplateContext";

export default function Layout({ children }) {
  const { user, navigation, userNavigation, classNames, communities, role } =
    useContext(TemplateContext);

    return (
    <>
      <div className="min-h-full ">
        <Header
          navigation={navigation}
          user={user}
          userNavigation={userNavigation}
          classNames={classNames}
        />
        <div className="py-5">
          <div className="max-w-3xl mx-auto sm:px-6 xl:grid xl:grid-cols-9 lg:max-w-full lg:px-8 lg:grid lg:grid-cols-10 lg:gap-8">
            <div className="hidden lg:block lg:col-span-2 xl:col-span-1">
              <LeftMenu navigation={navigation} communities={communities} role={role}  />
            </div>

            <div className="lg:col-span-6 xl:col-span-8">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
