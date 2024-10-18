<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import Arrow from './icons/Arrow.svelte';
  import Check from './icons/Check.svelte';
  import CheckFilled from './icons/CheckFilled.svelte';
  import Chevron from './icons/Chevron.svelte';
  import Copy from './icons/Copy.svelte';
  import Error from './icons/Error.svelte';
  import Exit from './icons/Exit.svelte';
  import FrequencyIconFilled from './logos/FrequencyIconFilled.svelte';
  import FrequencyIcon from './logos/FrequencyIcon.svelte';
  import FrequencyAccessLogo from './logos/FrequencyAccessLogo.svelte';
  import HamburgerMenu from './icons/HamburgerMenu.svelte';
  import Planet from './icons/Planet.svelte';
  import UserFilled from './icons/UserFilled.svelte';
  import UserKey from './icons/UserKey.svelte';
  import UserLock from './icons/UserLock.svelte';
  import UserOutlined from './icons/UserOutlined.svelte';
  import Wallet from './icons/Wallet.svelte';

  const icons = {
    Arrow,
    Check,
    CheckFilled,
    Chevron,
    Copy,
    Error,
    Exit,
    HamburgerMenu,
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
        <svelte:component this={Icon} class="mb-1 h-8 w-auto" />
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
