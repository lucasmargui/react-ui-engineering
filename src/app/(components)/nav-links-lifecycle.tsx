'use client';


import Link from 'next/link';

const links = [

  { name: 'ContextApi', href: '/ui_engineering/lifecycle/context_api'},
  { name: 'Hocs', href: '/ui_engineering/lifecycle/hocs'},
  { name: 'Hooks', href: '/ui_engineering/lifecycle/hooks'},
  { name: 'Lifecycles', href: '/ui_engineering/lifecycle/lifecycle_component'},
  { name: 'Redux', href: '/ui_engineering/lifecycle/redux'},

];

export default function NavLinks() {

  return (
    <>
      {links.map((link) => {

        return (
          <Link
            key={link.name}
            href={link.href}
            className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            
          >
        
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}