'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card'; // If using shadcn/ui

export default function ProjectCard({
  title,
  description,
  image = '/next.svg',
  href = '#',
}) {
  return (
    <Card className="w-full max-w-md hover:shadow-lg transition-shadow duration-300">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <CardContent className="p-6 flex flex-col gap-4">
          <Image
            src={image}
            alt={`${title} logo`}
            width={48}
            height={48}
            className="dark:invert"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </a>
    </Card>
  );
}
