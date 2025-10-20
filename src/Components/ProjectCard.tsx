interface Project {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-700 mb-3">{project.description}</p>
      <div className="flex gap-4">
        <a href={project.liveLink} target="_blank" className="text-blue-600 hover:underline">Live</a>
        <a href={project.githubLink} target="_blank" className="text-gray-600 hover:underline">GitHub</a>
      </div>
    </div>
  );
}
