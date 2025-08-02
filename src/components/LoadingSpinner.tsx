import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export const LoadingSpinner = ({ size = 'md', className, text }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <div className={cn('flex flex-col items-center justify-center space-y-2', className)}>
      <div className={cn('animate-spin rounded-full border-2 border-muted border-t-primary', sizeClasses[size])} />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
};

export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="relative">
        <div className="h-16 w-16 mx-auto animate-spin rounded-full border-4 border-muted border-t-primary" />
        <div className="absolute inset-0 h-16 w-16 mx-auto animate-ping rounded-full border-4 border-primary opacity-20" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Yükleniyor...</h3>
        <p className="text-muted-foreground">Sayfa hazırlanıyor</p>
      </div>
    </div>
  </div>
);

export const InlineLoader = ({ text = 'Yükleniyor...' }: { text?: string }) => (
  <div className="flex items-center justify-center space-x-2 py-8">
    <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted border-t-primary" />
    <span className="text-sm text-muted-foreground">{text}</span>
  </div>
);