
import React from 'react';
import SectionHeading from './SectionHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from 'lucide-react';

type Education = {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
};

const educationData: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Lovely Professional University",
    duration: "2022 - Present",
    location: "Jalandhar, Punjab",
    description: "",
  },
  {
    degree: "IIntermediate",
    institution: "Oxford Public School School",
    duration: "2019 - 2021",
    location: "Ranchi, Jharkahnd",
    description: "",
  },
  {
    degree: "Matriculation",
    institution: "Saraswati Shishu Vidya Mandir",
    duration: "2019",
    location: "Ranchi, Jharkhand",
    description: "",
  },
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="section-container">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and educational qualifications."
          centered
        />
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2"></div>
          
          {educationData.map((edu, index) => (
            <div key={index} className={`relative mb-12`}>
              <div className={`flex flex-col md:flex-row items-center`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 z-10"></div>
                
                {/* Content card - alternating sides */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <Card className="border border-border hover:border-primary/20 transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center text-lg md:text-xl gap-2">
                        {index % 2 !== 0 && <School className="h-5 w-5 text-primary md:hidden" />}
                        {edu.degree}
                        {index % 2 === 0 && <School className="h-5 w-5 text-primary md:hidden" />}
                      </CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium text-accent">{edu.duration}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Year indicator */}
              <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 -translate-y-1">
                <div className="bg-background text-xs font-bold py-1 px-2 rounded-full border border-border">
                  {edu.duration.split(' - ')[0]}
                </div>
              </div>
            </div>
          ))}
          
          {/* End dot */}
          <div className="absolute bottom-0 left-0 md:left-1/2 w-3 h-3 rounded-full bg-accent transform -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
