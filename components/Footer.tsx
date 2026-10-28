// This project has Cache Components enabled, so reading the current time must be
// cached explicitly. "use cache" captures the year once and reuses it.
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="mt-12 bg-gray-800 py-4 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>
          Copyright &copy; {year} | Onwude James Uchenna | All rights reserved
        </p>
      </div>
    </footer>
  );
}
