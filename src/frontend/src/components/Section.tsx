import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({ children, className, containerClassName }: SectionProps) {
  return (
    <section className={cn('py-8 sm:py-12 md:py-16 lg:py-20', className)}>
      <div className={cn('container px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
