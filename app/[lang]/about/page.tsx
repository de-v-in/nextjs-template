import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="w-full h-full justify-center items-center flex">
      <Link href="/">
        <button className="p-3 bg-blue-400 rounded-full active:scale-90 hover:scale-110 duration-300 text-white font-bold">
          GO TO HOME
        </button>
      </Link>
    </div>
  );
}
