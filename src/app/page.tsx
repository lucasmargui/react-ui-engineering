import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center items-center h-screen">
        <Link
          href="/ui_engineering"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>Conceitos sobre  UI_Engineering</span> 
        </Link>
       </div>
    </main>
  );
}
