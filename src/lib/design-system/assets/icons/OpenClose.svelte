<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '../../../utils/utils';

  interface Props extends HTMLAttributes<HTMLLabelElement> {
    toggleIdentifier: string;
    isOpen: boolean;
  }

  let { toggleIdentifier, isOpen = $bindable(false), ...rest }: Props = $props();
</script>

<label
  {...rest}
  for={toggleIdentifier}
  aria-label="Open main navigation"
  aria-controls="mobile-navigation"
  class={cn('relative z-50 cursor-pointer', rest.class)}
>
  <svg class="h-[40px] w-[40px] stroke-current" role="none">
    <line
      x1="5%"
      y1="50%"
      x2="95%"
      y2="50%"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={cn(
        'origin-left translate-y-[25%] transform stroke-[10%] transition-all duration-[0.3s]',
        isOpen ? 'translate-x-[8px] translate-y-[35%] -rotate-45' : ''
      )}
    />
    <line
      x1="5%"
      y1="50%"
      x2="95%"
      y2="50%"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={cn('origin-center transform stroke-[10%] transition-all duration-[0.3s]', isOpen ? 'scale-x-0' : '')}
    />
    <line
      x1="5%"
      y1="50%"
      x2="95%"
      y2="50%"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={cn(
        'origin-left translate-y-[-25%] transform stroke-[10%] transition-all duration-[0.3s]',
        isOpen ? 'translate-x-[8px] translate-y-[-35%] rotate-45' : ''
      )}
    />
  </svg>
</label>
