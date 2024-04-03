'use client';


import Link from 'next/link';

const links = [

  { name: 'Closures', href: '/ui_engineering/advanced_javascript/closures'},
  { name: 'EventEmitter', href: '/ui_engineering/advanced_javascript/event_emitter'},
  { name: 'HighOrder', href: '/ui_engineering/advanced_javascript/high_order'},
  { name: 'PromiseAsync', href: '/ui_engineering/advanced_javascript/promise_async'},
  { name: 'PrototypeInheritance', href: '/ui_engineering/advanced_javascript/prototype_inheritance'},

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