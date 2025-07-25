<script lang="ts">
  import { cn } from '../utils/utils';
  import { FrequencyLogo, XLogo, DiscordLogo, BskyLogo } from '../design-system/assets';
  import IconButton from '../atoms/IconButton.svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cva } from 'class-variance-authority';
  import type { Intent } from '../utils/types';

  interface Props extends HTMLAttributes<HTMLElement> {
    privacyHref?: string;
    intent?: Intent;
  }

  let { privacyHref = '/privacy', intent = 'light', ...rest }: Props = $props();

  const footer = cva(
    [
      'smText',
      'md:mdText',
      'gap-f24',
      'py-f48',
      'md:gap-f48',
      'mx-auto',
      'my-0',
      'flex',
      'max-w-(--breakpoint-xl)',
      'flex-col',
      'items-center',
      'border-t-[2px]',
      'border-current',
    ],
    {
      variants: {
        intent: {
          light: ['text-black'],
          dark: ['text-cream'],
        },
        defaultVariants: {
          intent: 'light',
        },
      },
    }
  );

  const seperator = cva(['w-[2px]', 'self-stretch', 'md:block', 'xs:hidden'], {
    variants: {
      intent: {
        light: ['bg-black'],
        dark: ['bg-cream'],
      },
      defaultVariants: {
        intent: 'light',
      },
    },
  });

  let buttonIntent = $derived(
    {
      dark: 'light',
      light: 'dark',
    }[intent] as Intent
  );
</script>

<footer {...rest} class={cn(footer({ intent }), rest.class)}>
  <FrequencyLogo class="w-[150px] md:w-[250px]" />
  <aside
    class="xs:space-y-f8 md:space-x-f16 flex flex-col items-center text-center leading-none md:flex-row md:space-y-0"
  >
    <div>
      © {new Date().getFullYear()} Frequency Network Foundation<span class="xs:inline-block md:hidden"
        >. All Rights Reserved</span
      >
    </div>
    <div class={cn(seperator({ intent }))}></div>
    <div class="xs:hidden md:block">All Rights Reserved</div>
    <div class={cn(seperator({ intent }))}></div>
    <a
      href={privacyHref}
      class={cn(
        'underline transition duration-[0.3s]',
        intent === 'light' ? 'hover:text-primary' : 'hover:text-purple50 '
      )}>Privacy Policy</a
    >
  </aside>
  <div class="gap-f16 flex" aria-label="Social Links">
    <IconButton intent={buttonIntent} label="X/Twitter" href="https://x.com/frequency_xyz">
      <XLogo />
    </IconButton>
    <IconButton intent={buttonIntent} label="BlueSky" href="https://bsky.app/profile/frequency.xyz">
      <BskyLogo />
    </IconButton>
    <IconButton intent={buttonIntent} label="Discord" href="https://discord.com/invite/JchmHX5afV">
      <DiscordLogo />
    </IconButton>
  </div>
</footer>
