import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'avatar' | 'button' | 'image';
  lines?: number;
}

export const Skeleton = ({ className, variant = 'text', lines = 1 }: SkeletonProps) => {
  const baseClasses = 'animate-pulse bg-muted rounded';
  
  const variantClasses = {
    text: 'h-4 w-full',
    card: 'h-32 w-full',
    avatar: 'h-12 w-12 rounded-full',
    button: 'h-10 w-24',
    image: 'h-48 w-full',
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              baseClasses,
              variantClasses.text,
              i === lines - 1 && 'w-3/4', // Last line shorter
              className
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
    />
  );
};

// Specific skeleton components
export const SkeletonCard = () => (
  <div className="space-y-4 p-6 border rounded-lg">
    <Skeleton variant="image" />
    <div className="space-y-2">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton variant="text" lines={3} />
    </div>
    <div className="flex space-x-2">
      <Skeleton variant="button" />
      <Skeleton variant="button" />
    </div>
  </div>
);

export const SkeletonProfile = () => (
  <div className="flex items-start space-x-4 p-6">
    <Skeleton variant="avatar" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-6 w-1/4" />
      <Skeleton variant="text" lines={2} />
    </div>
  </div>
);

export const SkeletonExperience = () => (
  <div className="space-y-6">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="border rounded-lg p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-2 flex-1">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
          </div>
          <Skeleton variant="button" className="h-6 w-16" />
        </div>
        <Skeleton variant="text" lines={2} />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, j) => (
            <Skeleton key={j} className="h-6 w-16 rounded-full" />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const SkeletonStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="space-y-2 p-4">
        <Skeleton className="h-12 w-16 mx-auto" />
        <Skeleton className="h-4 w-24 mx-auto" />
      </div>
    ))}
  </div>
);