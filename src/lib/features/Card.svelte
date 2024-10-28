<script>
  import { UserFilled } from '../assets';

  export let title = 'Default Card Header';
  export let bgColor = 'cream';
  export let titleColor = 'navy';
  export let icon = UserFilled;
</script>

<div class="card-shadow rounded-xl p-6 bg-{bgColor} {$$restProps.class}">
  <div class="flex justify-between pb-6">
    <h5 class="font-bold text-{titleColor} inline">{title}</h5>
    <svelte:component this={icon} class="h-f48 w-f48" />
  </div>
  <slot name="content">This is default content</slot>
</div>
