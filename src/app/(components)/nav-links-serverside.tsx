'use client';


import Link from 'next/link';

const links = [
  { name: 'BackendResources', href: '/ui_engineering/server_side/server/backend'},
  { name: 'FetchData', href: '/ui_engineering/server_side/server/fetch_data'},
  { name: 'ReduceClientSide', href: '/ui_engineering/server_side/server/reduce_client_side'},
  { name: 'SensitiveData', href: '/ui_engineering/server_side/server/sensitive_data'},

  { name: 'BrowserApi', href: '/ui_engineering/server_side/client/browser_api'},
  { name: 'ClassComponent', href: '/ui_engineering/server_side/client/class_component'},
  { name: 'CustomHook', href: '/ui_engineering/server_side/client/custom_hooks'},
  { name: 'EventListeners', href: '/ui_engineering/server_side/client/event_listeners'},
  { name: 'StateLifecycle', href: '/ui_engineering/server_side/client/state_lifecycle'},
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