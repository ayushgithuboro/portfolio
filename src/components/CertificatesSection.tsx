import React from 'react';
import SectionHeading from './SectionHeading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star, GraduationCap } from 'lucide-react';

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  icon: "award" | "star" | "graduation";
  image: string;
};

const certificatesData: Certificate[] = [
  {
    title: "Data Structures & Algorithum",
    issuer: "Geeks for Geeks",
    date: "2024",
    icon: "award",
    image: "/lovable-uploads/Screenshot 2025-04-29 222947.png",
  },
  {
    title: "C++ specilization certificate",
    issuer: "Coursera",
    date: "2024",
    icon: "award",
    image: "/lovable-uploads/Screenshot 2025-04-29 223007.png",
  },
  {
    title: "Digital Forensics Essentials (DFE)",
    issuer: "Coursera",
    date: "2024",
    icon: "graduation",
    image: "/lovable-uploads/Screenshot 2025-04-29 222002.png",
  },
  {
    title: "Ethical Hacking Essentials (EHE)",
    issuer: "Coursera",
    date: "2024",
    icon: "graduation",
    image: "/lovable-uploads/Screenshot 2025-04-29 222031.png",
  },
];

const achievements = [
  "Successfully solved over 250+ coding problems across various online judges, demonstrating strong problem-solving skills and proficiency in algorithms and data structures.", 
"Actively participated in prestigious hackathons, including Adobe GenSolve and Amazon HackOn Season 4, where I collaborated with diverse teams to innovate and develop solutions to real-world challenges, honing my technical skills and teamwork abilities.",
];

const iconMap = {
  award: <Award className="h-8 w-8 text-primary" />,
  star: <Star className="h-8 w-8 text-primary" />,
  graduation: <GraduationCap className="h-8 w-8 text-primary" />
};

const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates">
      <div className="section-container">
        <SectionHeading 
          title="Certificates & Achievements" 
          subtitle="Recognitions and accomplishments highlighting my expertise and commitment."
          centered
        />
        
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificatesData.map((cert, index) => (
                <Card key={index} className="overflow-hidden border border-border hover:border-primary/20 transition-all duration-300">
                  <div className="relative aspect-video">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center">
                      <div className="mr-4 bg-primary/10 p-2 rounded-full">
                        {iconMap[cert.icon]}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Achievements</h3>
            <Card className="border border-border hover:border-primary/20 transition-all duration-300">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 text-accent">•</div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
