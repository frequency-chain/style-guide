<script lang="ts">
  import { FrequencyLogo, XLogo, DiscordLogo } from '../assets';
  import IconButton from '../atoms/IconButton.svelte';
</script>

<footer class="sm md:md flex flex-col items-center gap-f16 border-t border-black py-f48 md:gap-f24">
  <div class="flex gap-f40">
    <a href="/privacy" class="underline transition duration-[0.3s] hover:text-brightBlue">Privacy Policy</a>
    <a href="/terms" class="underline transition duration-[0.3s] hover:text-brightBlue">Terms of Conditions</a>
  </div>
  <FrequencyLogo class="w-[146px] md:w-[257px]" />
  <aside>{`© ${new Date().getFullYear()} Frequency Network Foundation. All Right Reserved`}</aside>
  <div class="flex gap-f16" aria-label="Social Links">
    <IconButton label="X/Twitter" href={'https://twitter.com/one_frequency'}>
      <XLogo slot="icon" class="fill-white text-white" />
    </IconButton>
    <IconButton label="Discord" href="https://discord.com/invite/JchmHX5afV">
      <DiscordLogo slot="icon" />
    </IconButton>
  </div>
</footer>
