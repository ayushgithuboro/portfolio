import React from 'react';
import SectionHeading from './SectionHeading';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

const contactLinks = [
  {
    name: "Email",
    value: "hiiamayushkumar@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:hiiamayushkumar@gmail.com",
  },
  {
    name: "Phone",
    value: "+91 7209916780",
    icon: <Phone className="h-5 w-5" />,
    href: "tel:+917209916780",
  },
  {
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/ayush-kumar-640870254/",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/ayush-kumar-640870254/",
  },
  {
    name: "GitHub",
    value: "https://github.com/ayushgithuboro",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/ayushgithuboro",
  },
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Feel free to reach out for collaborations, opportunities, or just a friendly conversation."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="border border-border hover:border-primary/20 transition-all duration-300">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your-email@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject of your message" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="What would you like to say?" 
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="grid gap-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-card rounded-lg hover:bg-secondary/50 transition-colors border border-border"
                  >
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-medium">{link.name}</p>
                      <p className="text-sm text-muted-foreground">{link.value}</p>
                    </div>
                    <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button asChild variant="outline" className="rounded-full">
                <a href="/lovable-uploads/CV_12214903_GEN.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
