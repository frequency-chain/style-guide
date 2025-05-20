import { cva, type VariantProps } from 'class-variance-authority';

export const formItem = cva(
  [
    'smText',
    'flex w-full max-w-[388px] items-center justify-between rounded-md',
    'border-1',
    'bg-white px-3 py-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'focus-visible:ring-primary focus-visible:ring-2 focus-visible:outline-none focus-visible:border-none',
    'aria-[invalid]:border-destructive',
    '[&>span]:data-placeholder:text-muted-foreground',
    '[&>span]:line-clamp-1',
  ],
  {
    variants: {
      error: {
        true: 'border-error',
        false: 'border-gray3',
      },
      height: {
        auto: '',
        sm: 'h-10',
      },
    },
    defaultVariants: {
      error: false,
      height: 'sm',
    },
  }
);

export type FormItemProps = VariantProps<typeof formItem>;
