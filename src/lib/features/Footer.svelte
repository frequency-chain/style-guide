<script lang="ts">
  import { cn } from '../utils/utils';
  import { FrequencyLogo, XLogo, DiscordLogo, BskyLogo } from '../assets';
  import IconButton from '../atoms/IconButton.svelte';

  interface Props {
    privacyHref?: string;
    type?: 'light' | 'dark';

    [key: string]: unknown;
  }

  let { privacyHref = '/privacy', type = 'light', ...rest }: Props = $props();

  let fgColorText = {
    dark: 'text-white',
    light: 'text-black',
  }[type];
  let fgColorBg = {
    dark: 'bg-white',
    light: 'bg-black',
  }[type];
</script>

<footer
  class={cn(
    'sm md:md gap-f16 py-f48 md:gap-f48 mx-auto my-0 flex max-w-(--breakpoint-xl) flex-col items-center border-t-[2px] border-current',
    fgColorText,
    rest.class
  )}
>
  <FrequencyLogo class="w-[146px] md:w-[257px]" />
  <aside class="flex flex-col items-center space-y-4 text-center leading-none md:flex-row md:space-y-0 md:space-x-4">
    <div>
      © {new Date().getFullYear()} Frequency Network Foundation <span class="md:hidden">All Rights Reserved</span>
    </div>
    <div class="hidden w-[2px] self-stretch md:block {fgColorBg}"></div>
    <div class="hidden md:block">All Rights Reserved</div>
    <div class="hidden w-[2px] self-stretch md:block {fgColorBg}"></div>
    <div>
      <a href={privacyHref} class="hover:text-teal underline transition duration-[0.3s]">Privacy Policy</a>
    </div>
  </aside>
  <div class="gap-f16 flex" aria-label="Social Links">
    <IconButton {type} label="X/Twitter" href="https://x.com/frequency_xyz">
      <XLogo />
    </IconButton>
    <IconButton {type} label="BlueSky" href="https://bsky.app/profile/frequency.xyz">
      <BskyLogo />
    </IconButton>
    <IconButton {type} label="Discord" href="https://discord.com/invite/JchmHX5afV">
      <DiscordLogo />
    </IconButton>
  </div>
</footer>
