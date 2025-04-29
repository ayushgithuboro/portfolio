
import React from 'react';
import SectionHeading from './SectionHeading';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  proficiency: number;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C/C++", proficiency: 88 },
      { name: "JavaScript", proficiency: 95 },
      { name: "Java", proficiency: 90 },
      { name: "R", proficiency: 85 },
      { name: "SQL", proficiency: 92 },
    ],
  },
  {
    category: "Web Development Technologies",
    skills: [
      { name: "RESTful APIs", proficiency: 90 },
      { name: "HTML5", proficiency: 95 },
      { name: "CSS3", proficiency: 85 },
      { name: "MERN", proficiency: 65 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "Linux", proficiency: 85 },
      { name: "Figma", proficiency: 75 },

    ],
  },
  {
    category: "Technical Skills",
    skills: [
      { name: "Data Structures", proficiency: 90 },
      { name: "Object-Oriented Programming", proficiency: 85 },
      { name: "API Development", proficiency: 80 },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", proficiency: 90 },
      { name: "Problem Solving", proficiency: 95 },
      { name: "Team Leadership", proficiency: 85 },
      { name: "Time Management", proficiency: 90 },
      { name: "Adaptability", proficiency: 88 },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <SectionHeading 
          title="My Skills" 
          subtitle="A comprehensive overview of my technical expertise and proficiencies."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <Card key={index} className="border border-border hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
