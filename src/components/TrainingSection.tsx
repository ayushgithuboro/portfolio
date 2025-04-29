
import React from 'react';
import SectionHeading from './SectionHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Code, Server, Database } from 'lucide-react';

const TrainingSection: React.FC = () => {
  return (
    <section id="training">
      <div className="section-container">
        <SectionHeading 
          title="Training" 
          subtitle="My professional training experience and key contributions."
          centered
        />
        
        <Card className="border border-border hover:border-primary/20 transition-all duration-300">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <CardTitle className="text-xl">Data Structures and Algorithms - Self Paced</CardTitle>
                <CardDescription>Geeks For Geeks (Edtech Company)</CardDescription>
              </div>
              <div className="text-sm font-medium text-accent">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>May 2024 –Aug 2024</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-accent">•</span>
                <div className="flex gap-2">
                  <Code className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                  Mastered core data structures including <span className="font-medium">arrays, linked lists, stacks, queues, trees, graphs, heaps, hash tables, and trie</span>, enabling efficient data handling and manipulation.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">•</span>
                <div className="flex gap-2">
                  <Server className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                  Solved 300+ DSA problems covering topics like <span className="font-medium">recursion, dynamic programming, greedy algorithms, backtracking, and graph algorithms</span> enhancing logical reasoning and coding proficiency.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">•</span>
                <div className="flex gap-2">
                  <Database className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                  Implemented optimized algorithms in <span className="font-medium">C++/Java/Python with time and space complexity analysis</span>, resulting in improved problem-solving efficiency.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">•</span>
                <div className="flex gap-2">
                  <Code className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">
                  Gained hands-on experience with industry-standard interview patterns, applying learned concepts to tackle company-specific coding problems and mock technical interviews.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TrainingSection;
