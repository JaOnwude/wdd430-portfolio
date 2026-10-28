import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 py-4 text-white shadow-md">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div id="header-title" className="text-2xl font-bold">
          Onwude James Uchenna
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:underline focus:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline focus:underline">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
