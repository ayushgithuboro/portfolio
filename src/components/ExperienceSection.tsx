
import React from 'react';
import SectionHeading from './SectionHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from 'lucide-react';

const TrainingSection: React.FC = () => {
  return (
    <section id="training" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="section-container">
        <SectionHeading 
          title="Training" 
          subtitle="My professional training and educational journey."
        />
        
        <div className="space-y-8">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl font-bold">Full Stack Development using MERN Stack</CardTitle>
                  <CardDescription className="text-lg font-medium">Cipher Schools</CardDescription>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="text-sm">May 2024 - Jul. 2024</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Developed a dynamic, full-stack web application leveraging MongoDB, Express.js, React.js, and Node.js, significantly enhancing user engagement and system efficiency.</li>
                      <li>Engineered robust RESTful APIs for seamless client-server communication, boosting backend efficiency by 20%.</li>
                      <li>Implemented secure authentication and authorization mechanisms using JWT and bcrypt, ensuring data integrity and user privacy.</li>
                      <li>Optimized database queries and application structure, resulting in improved scalability and performance.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
