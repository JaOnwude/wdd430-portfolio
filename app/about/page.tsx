import SkillCard from "@/components/SkillCard";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "SQLModel", "Alembic"],
  },
  {
    category: "Data and Tools",
    skills: ["PostgreSQL", "Redis", "Docker", "Git", "GitHub"],
  },
];

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold">About Me</h1>
      <p className="mb-8 text-lg text-gray-700">
        I&apos;m Onwude James Uchenna, a student learning full-stack web
        development. I build apps that connect a user interface to a backend and
        a database, and this portfolio is my first Next.js project.
      </p>
      <h2 className="mb-4 text-2xl font-bold">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillCard key={group.category} {...group} />
        ))}
      </div>
    </main>
  );
}
