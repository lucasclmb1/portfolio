import { Heading, Text } from "./ui/typography";
import { DivideIcon as LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function SkillCard({ icon: Icon, title, description }: SkillCardProps) {
  return (
    <div className="bg-card p-8 rounded-lg flex flex-col items-center text-center border border-border/50 hover:border-amber-500/50 transition-colors group">
      <div className="rounded-full bg-secondary/50 p-4 mb-6 group-hover:bg-amber-500/10 transition-colors">
        <Icon className="h-8 w-8 text-amber-500" />
      </div>
      <Heading as="h3" size="lg" className="mb-2">{title}</Heading>
      <Text className="text-muted-foreground">{description}</Text>
    </div>
  );
}