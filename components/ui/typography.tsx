import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

interface TextProps {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
}

export function Heading({
  children,
  className,
  as: Tag = "h2",
  size = "xl",
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-bold tracking-tight",
        {
          "text-xs": size === "xs",
          "text-sm": size === "sm",
          "text-base": size === "md",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
          "text-2xl": size === "2xl",
          "text-3xl": size === "3xl",
          "text-4xl": size === "4xl",
        },
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function Text({
  children,
  className,
  as: Component = "p",
  size = "base",
}: TextProps) {
  return (
    <Component
      className={cn(
        "leading-relaxed",
        {
          "text-xs": size === "xs",
          "text-sm": size === "sm",
          "text-base": size === "base",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
        },
        className
      )}
    >
      {children}
    </Component>
  );
}

export function SectionTitle({ 
  children, 
  subtitle,
  className 
}: { 
  children: ReactNode; 
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <Heading className="relative inline-block tracking-wider uppercase text-3xl font-light mb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:w-1/2 after:h-[2px] after:bg-amber-500 pb-2">
        {children}
      </Heading>
      {subtitle && (
        <Text className="text-muted-foreground mt-2">{subtitle}</Text>
      )}
    </div>
  );
}