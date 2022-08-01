import {
  LibraryIcon,
  PresentationChartBarIcon,
  SearchIcon,
  ShoppingBagIcon,
  TrendingUpIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

import React, { useState } from "react";

export const navigation = [
  {
    name: "Статистика",
    href: "#",
    icon: PresentationChartBarIcon,
    current: true,
    link:'statistics'
  },
  { name: "Организация", href: "#", icon: LibraryIcon, current: false, link:'companies' },
  { name: "Магазин", href: "#", icon: ShoppingBagIcon, current: false, link:'markets' },
  { name: "Моя команда", href: "#", icon: UserGroupIcon, current: false, link:'personal' },

];

export const communities = [
  { name: 'Movies', href: '#' },
  { name: 'Food', href: '#' },
  { name: 'Sports', href: '#' },
  { name: 'Animals', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Dinosaurs', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' },
] 
export const userNavigation = [
  { name: "Настройки", href: "#" },
  { name: "Выход", href: "#" },
];

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}




function TemplateData() {

}

export default TemplateData;
