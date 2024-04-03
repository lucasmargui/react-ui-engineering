'use client';


import Link from 'next/link';

const links = [

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
            className="py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
            
          >
        
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}