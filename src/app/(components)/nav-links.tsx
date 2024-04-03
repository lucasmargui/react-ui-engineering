'use client';


import Link from 'next/link';

const links = [
  { name: 'CodeSplitting', href: '/ui_engineering/web_performance/code_splitting'},
  { name: 'LazyLoading', href: '/ui_engineering/web_performance/lazy_loading_image'},
  { name: 'Memorization', href: '/ui_engineering/web_performance/memorization_components'},
  { name: 'Minification', href: '/ui_engineering/web_performance/minification_concatenation'},
  { name: 'ServerSide', href: '/ui_engineering/web_performance/server_side'},


  { name: 'FetchApi', href: '/ui_engineering/browser_api/fetch_api'},
  { name: 'GeoLocation', href: '/ui_engineering/browser_api/geolocation_api'},
  { name: 'IndexedDb', href: '/ui_engineering/browser_api/indexed_db'},
  { name: 'SessionStorage', href: '/ui_engineering/browser_api/session_storage'},
  { name: 'WebStorage', href: '/ui_engineering/browser_api/web_storage'},
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