<script lang="ts">
  import { cn } from '../utils/utils';
  import { FrequencyLogo, XLogo, DiscordLogo } from '../assets';
  import IconButton from '../atoms/IconButton.svelte';

  export let privacyHref: string = '/privacy';
  export let type: 'light' | 'dark' = 'light';

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
    'sm md:md mx-auto my-0 flex max-w-screen-xl flex-col items-center gap-f16 border-t-[2px] border-current py-f48 md:gap-f48',
    fgColorText,
    $$restProps.class
  )}
>
  <FrequencyLogo class="w-[146px] md:w-[257px]" />
  <aside class="flex flex-col items-center space-y-4 text-center leading-none md:flex-row md:space-x-4 md:space-y-0">
    <div>
      © {new Date().getFullYear()} Frequency Network Foundation <span class="md:hidden">All Rights Reserved</span>
    </div>
    <div class="hidden w-[2px] self-stretch md:block {fgColorBg}"></div>
    <div class="hidden md:block">All Rights Reserved</div>
    <div class="hidden w-[2px] self-stretch md:block {fgColorBg}"></div>
    <div>
      <a href={privacyHref} class="underline transition duration-[0.3s] hover:text-teal">Privacy Policy</a>
    </div>
  </aside>
  <div class="flex gap-f16" aria-label="Social Links">
    <IconButton {type} label="X/Twitter" href="https://twitter.com/one_frequency">
      <XLogo />
    </IconButton>
    <IconButton {type} label="Discord" href="https://discord.com/invite/JchmHX5afV">
      <DiscordLogo />
    </IconButton>
  </div>
</footer>
