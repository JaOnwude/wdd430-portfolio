interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded border-l-4 border-blue-700 bg-gray-50 p-4">
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-3 text-gray-700">{description}</p>
      <p className="text-sm text-gray-700">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>
      {link && (
        <p className="mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            View Project
          </a>
        </p>
      )}
    </article>
  );
}
