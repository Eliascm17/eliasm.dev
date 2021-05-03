import { useState, useEffect } from 'react';
import Container from '@/components/Container';
import Icon from '@/components/Icon';
import projects from '@/lib/projects';
import experience from '@/lib/experience';
import favorites from '@/lib/favorites';
import { useTheme } from 'next-themes';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <Container>
      <div className="flex flex-col justify-center mx-auto max-w-2xl space-y-12 my-16">
        <div className="space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Elias 👨🏾‍💻</h1>
          <p className="text-md text-gray-900 dark:text-gray-400">
            Site Reliability Engineer at Samsung Austin Semiconductors
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">Projects</h1>
          {projects.map((project, key) => (
            <div
              className="flex flex-col p-3 w-full border border-gray-600 rounded-md space-y-2"
              key={key}
            >
              <div className="flex justify-between">
                <div className="text-lg font-bold flex-wrap">
                  {project.name}
                </div>
              </div>
              <div>{project.description}</div>
              <div className="flex space-x-1 flex-wrap">
                Built with:&nbsp;&nbsp;
                {mounted && (
                  <div className="flex space-x-2">
                    {project.builtWith.map((name, key) => (
                      <Icon
                        className="w-6 h-6"
                        theme={theme}
                        name={name}
                        key={key}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">Experience</h1>
          {experience.map((job, key) => (
            <div
              className="flex flex-col p-3 w-full border border-gray-600 rounded-md space-y-2"
              key={key}
            >
              <div>
                <div>
                  <div className="text-lg font-bold">{job.company}</div>
                  <div>{job.title}</div>
                </div>
                <div>{job.date}</div>
              </div>
              <div>{job.description}</div>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">Toolbox</h1>
          {mounted && (
            <div className="flex flex-wrap space-x-3 items-center">
              {favorites.map((tool, key) => (
                <Icon
                  className="h-16 w-16 my-2"
                  name={tool}
                  key={key}
                  theme={theme}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
