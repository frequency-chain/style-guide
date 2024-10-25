<script>
  import { UserFilled } from '/src/lib/assets/index';

  export let title = 'Default Card Header';
  export let bgColor = 'cream';
  export let titleColor = 'navy'
  export let icon = UserFilled;
</script>

<div class="p-6 card-shadow rounded-xl bg-{bgColor} {$$restProps.class}">
  <div class="pb-6 flex justify-between">
    <h5 class="font-bold text-{titleColor} inline">{title}</h5>
    <svelte:component this={icon} class="w-f48 h-f48"/>
  </div>
    <slot name="content" >
      This is default content
    </slot>
</div>

<style>
    .card-shadow {
        box-shadow: 4px 4px 10px 0 rgb(0 0 0 / 25%);
    }
</style>

