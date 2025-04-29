import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import SectionHeading from './SectionHeading';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="section-container">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn more about my background and what drives me as a developer."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-md"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" //not profile image back ground image  
                  alt="Shubash Atul Oroan" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Cybersecurity Analyst & Problem Solver</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
              I'm Ayush Kumar, a dedicated Cybersecurity Analyst with a strong focus on protecting digital assets, systems, and data. My expertise spans across threat detection, vulnerability assessment, incident response, and risk management.
              </p>
              <p>
              My journey in cybersecurity began with a fascination for how digital infrastructures operate and how they can be safeguarded against evolving cyber threats. This interest has grown into a professional skill set that enables me to proactively secure networks, investigate incidents, and ensure compliance with security standards.
              </p>
              <p>
              In addition to my technical expertise, I bring strong interpersonal skills such as critical thinking, adaptability, and effective collaboration. I perform well under pressure and take a structured, analytical approach to uncovering vulnerabilities and resolving security issues with precision and efficiency.
              </p>
            </div>
            <div className="pt-4"> {/*add resume here*/}
              <Button asChild className="rounded-full">
                <a href="/lovable-uploads/CV_12214903_GEN.pdf" download> 
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a> 
              </Button>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
