<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
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
    FrequencyAccessLogo,
  } from '../assets/index';

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

  const logos = {
    FrequencyIconFilled,
    FrequencyIcon,
    FrequencyAccessLogo,
  };
</script>

<Meta title="Design System/Assets" />

<Story name="Icons">
  <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
    {#each Object.entries(icons) as [name, Icon]}
      <div class="flex flex-col items-start justify-start p-4">
        <h2 class="mb-2 text-lg font-semibold">{name}</h2>
        {#if Icon === OpenClose}
          <aside>* Click me!</aside>
        {/if}
        <svelte:component this={Icon} class="mb-1 h-8 w-auto" isDemo={true} />
      </div>
    {/each}
  </div>
</Story>

<Story name="Logos">
  <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
    {#each Object.entries(logos) as [name, Logo]}
      <div class="flex flex-col items-start justify-start p-4">
        <h2 class="mb-2 text-lg font-semibold">{name}</h2>
        <svelte:component this={Logo} class="mb-1 h-8 w-auto" />
      </div>
    {/each}
  </div>
</Story>
