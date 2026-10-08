import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import Image from "next/image";

export default function Home() {
  const projects = [
    { id: 1, name: "Project 1", description: "Description of Project 1" },
    { id: 2, name: "Project 2", description: "Description of Project 2" },
    { id: 3, name: "Project 3", description: "Description of Project 3" },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="flex w-full justify-end p-4 border-b border-gray-200 dark:border-gray-800">
        <ThemeModeToggle />
      </header>

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-25"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Projects</h2>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li
                key={project.id}
                className="border-b border-gray-200 pb-4 dark:border-gray-800"
              >
                <h3 className="text-xl font-semibold dark:text-white">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

