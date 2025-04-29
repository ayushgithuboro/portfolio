import React from 'react';
import SectionHeading from './SectionHeading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
};

const projectsData: Project[] = [
  {
    title: "Flex pay",
    description: "Flexpay is a secure digital payment web application built with React, Node.js, and Express, featuring JWT-based authentication for safe and seamless user transactions..",
    image: "/lovable-uploads/Screenshot 2025-04-23 005520.png",
    tech: ["React", "Node.js", "Express", "Neon DB", "JWT"],
    features: ["JWT-based secure login", "Send & receive payments", "Responsive UI (React)", "Robust backend", "Smooth, intuitive UX"],
    github: "https://github.com/Ayushgithuboro/Flexpay",
  },
  {
    title: "Flight Search System",
    description: "A modern flight search web application built with React, Node.js, and Express, featuring JWT-based authentication, CRUD operations, and efficient management for over 10,000 user accounts.",
    image: "/lovable-uploads/Screenshot 2025-04-23 005752.png",
    tech: ["React", "Node.js ", "Express.js", "JWT (JSON Web Token)", "MongoDB","React Router Dom"],
    features: ["JWT-secured login", "Flight search & booking", "Admin CRUD (11 controllers)", "Fast data handling", "Responsive React frontend"],
    github: "https://github.com/ayushgithuboro",
  },
  {
    title: "Food ordering website",
    description: "A full-stack food ordering web app built with React, Node.js, Express, and MongoDB, featuring JWT-based authentication, real-time order tracking, and a secure payment gateway.",
    image: "/lovable-uploads/s1.png",
    tech: ["React","Node.js","Express.js","MongoDB","JWT","Zod (for input validation)"],
    features: ["JWT-secured user login", "Food ordering & checkout", "Real-time order tracking", "Responsive React frontend","Data validation with Zod"],
    github: "https://github.com/ayushgithuboro",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <SectionHeading 
          title="My Projects" 
          subtitle="Showcasing my work and the technologies and skills I've used to build them."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:border-primary/20 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc pl-4 text-sm text-muted-foreground">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-start">
                {project.github && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
