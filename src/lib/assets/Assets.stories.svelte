<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import {
    Arrow,
    Check,
    CheckFilled,
    Chevron,
    Copy,
    Error,
    Exit,
    HamburgerMenu,
    OpenClose,
    Planet,
    UserFilled,
    UserKey,
    UserLock,
    UserOutlined,
    Wallet,
    FrequencyIconFilled,
    FrequencyIcon,
    FrequencyLogo,
    DiscordLogo,
    LinkedInLogo,
    XLogo,
  } from './index';

  const icons = {
    Arrow,
    Check,
    CheckFilled,
    Chevron,
    Copy,
    Error,
    Exit,
    HamburgerMenu,
    OpenClose,
    Planet,
    UserFilled,
    UserKey,
    UserLock,
    UserOutlined,
    Wallet,
  };

  const logos = { FrequencyIconFilled, FrequencyIcon, FrequencyLogo, DiscordLogo, LinkedInLogo, XLogo };

  const { Story } = defineMeta({ title: 'Design System/Assets' });

  let isOpen = $state(false);
</script>

<Story name="Icons">
  <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
    {#each Object.entries(icons) as [name, Icon] (name)}
      <div class="flex flex-col items-start justify-start p-4">
        <h2 class="mb-2 text-lg font-semibold">{name}</h2>
        {#if Icon === OpenClose}
          <input type="checkbox" id="mobile-menu-toggle" class="peer hidden" bind:checked={isOpen} />
          <aside>Click it!</aside>
          <Icon toggleIdentifier="mobile-menu-toggle" class="mb-1 h-8 w-auto stroke-black" bind:isOpen isDemo={true} />
        {:else}
          <Icon class="mb-1 h-8 w-auto stroke-black" isDemo={true} />
        {/if}
      </div>
    {/each}
  </div>
</Story>

<Story name="Logos">
  <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
    {#each Object.entries(logos) as [name, Logo] (name)}
      <div class="flex flex-col items-start justify-start p-4">
        <h2 class="mb-2 text-lg font-semibold">{name}</h2>
        <Logo class="mb-1 h-8 w-auto" />
      </div>
    {/each}
  </div>
</Story>
