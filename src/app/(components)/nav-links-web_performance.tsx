'use client';


import Link from 'next/link';

const links = [
  { name: 'CodeSplitting', href: '/ui_engineering/web_performance/code_splitting'},
  { name: 'LazyLoading', href: '/ui_engineering/web_performance/lazy_loading_image'},
  { name: 'Memorization', href: '/ui_engineering/web_performance/memorization_components'},
  { name: 'Minification', href: '/ui_engineering/web_performance/minification_concatenation'},
  { name: 'ServerSide', href: '/ui_engineering/web_performance/server_side'},


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