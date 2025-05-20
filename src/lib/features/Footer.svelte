<script lang="ts">
  import { cn } from '../utils/utils';
  import { FrequencyLogo, XLogo, DiscordLogo, BskyLogo } from '../design-system/assets';
  import IconButton from '../atoms/IconButton.svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { cva } from 'class-variance-authority';

  type Intent = 'light' | 'dark';

  interface Props extends HTMLAttributes<HTMLElement> {
    privacyHref?: string;
    intent?: Intent;
  }

  let { privacyHref = '/privacy', intent = 'dark', ...rest }: Props = $props();

  const footer = cva(
    [
      'smText',
      'md:mdText',
      'gap-f16',
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
          dark: ['text-white'],
        },
        defaultVariants: {
          intent: 'light',
        },
      },
    }
  );

  const seperator = cva(['hidden', 'w-[2px]', 'self-stretch', 'md:block'], {
    variants: {
      intent: {
        light: ['bg-black'],
        dark: ['bg-white'],
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
  <FrequencyLogo class="w-[146px] md:w-[257px]" />
  <aside class="flex flex-col items-center space-y-4 text-center leading-none md:flex-row md:space-y-0 md:space-x-4">
    <div>
      © {new Date().getFullYear()} Frequency Network Foundation <span class="md:hidden">All Rights Reserved</span>
    </div>
    <div class={cn(seperator({ intent }))}></div>
    <div class="hidden md:block">All Rights Reserved</div>
    <div class={cn(seperator({ intent }))}></div>
    <div>
      <a href={privacyHref} class="hover:text-primary underline transition duration-[0.3s]">Privacy Policy</a>
    </div>
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
