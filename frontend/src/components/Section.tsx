import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({ children, className, containerClassName }: SectionProps) {
  return (
    <section className={cn('py-12 md:py-16 lg:py-20', className)}>
      <div className={cn('container', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
