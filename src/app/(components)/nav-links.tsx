'use client';


import Link from 'next/link';

const links = [
  { name: 'CodeSplitting', href: '/ui_engineering/code_splitting'},
  { name: 'LazyLoading', href: '/ui_engineering/lazy_loading_image'},
  { name: 'Memorization', href: '/ui_engineering/memorization_components'},
  { name: 'Minification', href: '/ui_engineering/minification_concatenation'},
  { name: 'ServerSide', href: '/ui_engineering/server_side'},
];

export default function NavLinks() {

  return (
    <>
      {links.map((link) => {

        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            
          >
        
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}