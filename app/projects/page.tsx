import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import Image from "next/image";
import ecom from "../public/ecom.jpg";
import dashboard from "../public/dashboard.png"
import taskmanage from "../public/taskmanage.png"
import calc from "../public/calc.jpg"
import code from "../public/30day.webp"
import resume from "../public/resume.png"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Next.js, and API.",
    technologies: ["React", "Next.js", "API", "TailwindCSS"],
    link: "https://github.com/hashir-qt",
    imageUrl: ecom // Example image path
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application using OpenWeatherMap API and React.",
    technologies: ["React", "API Integration", "CSS Modules"],
    link: "https://github.com/hashir-qt",
    imageUrl:dashboard
  },
  {
    title: "Task Management App",
    description: "A task management application built with Next.js and React.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    link: "https://github.com/hashir-qt",
    imageUrl: taskmanage
  },
  {
    title: "Scientific Calculator App",
    description: "A complex calculator application built with Next.js and API.",
    technologies: ["Next.js", "API", "Tailwind CSS"],
    link: "https://github.com/hashir-qt",
    imageUrl: calc
  }
  ,
  {
    title: "30-Days-of-Code",
    description: "A 30 day of coding challenge to overcome difficultiies in Next.js.",
    technologies: ["Next.js", "Typscript", "Tailwind CSS"],
    link: "https://github.com/hashir-qt",
    imageUrl: code
  }
  ,
  {
    title: "Resume Builder",
    description: "A Problem Solving product which generates Sleek Resume with Javascript  .",
    technologies: ["HTML", "CSS", "Tailwind Javascript"],
    link: "https://github.com/hashir-qt",
    imageUrl: resume
  }
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
             <Image
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-md mb-4" 
              />
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={project.link} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                View Project
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
