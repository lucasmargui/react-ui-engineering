import Link from 'next/link';
import NavLinksAdvancedJavascript from '@/app/(components)/nav-links-advanced-javascript';
import NavLinksBrowserApi from '@/app/(components)/nav-links-browser-api';
import NavLinksLifeCycle from '@/app/(components)/nav-links-lifecycle';
import NavLinksWebPerformance from '@/app/(components)/nav-links-web_performance';



export default function SideNav() {
  return (
    <div className="flex flex-col w-64 bg-gray-800 h-full">
    <div className="p-4 text-white text-xl font-bold">SideNav</div>
    <div className="flex flex-col flex-1 overflow-y-auto">
      <NavLinksWebPerformance />
      <div className="h-px bg-gray-600 opacity-50 my-1 w-full"></div>
      <NavLinksAdvancedJavascript />
      <div className="h-px bg-gray-600 opacity-50 my-1 w-full"></div>
      <NavLinksBrowserApi />
      <div className="h-px bg-gray-600 opacity-50 my-1 w-full"></div>
      <NavLinksLifeCycle />
      <div className="h-px bg-gray-600 opacity-50 my-1 w-full"></div>
     

    </div>
  </div>
  );
}