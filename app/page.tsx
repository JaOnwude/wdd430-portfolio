import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "BloodLink",
    description:
      "A blood donation platform where hospitals post urgent blood requests and the app finds eligible donors nearby. Built as a bootcamp capstone.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    link: "https://github.com/JaOnwude/bloodlink",
  },
  {
    title: "FarmLink",
    description:
      "A co-op bulk-ordering app where farmers and buyers pool orders and pay through Paystack, with a live activity feed.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    link: "https://github.com/JaOnwude/FarmLink",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="py-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are
          some of my recent projects.
        </p>
      </section>
      <h2 className="mb-4 text-2xl font-bold">Projects</h2>
      <ProjectList projects={projects} />
    </main>
  );
}
