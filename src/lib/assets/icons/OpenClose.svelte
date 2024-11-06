<script lang="ts">
  export let toggleIdentifier: string = 'mobile-menu-toggle';
  export let classes: string = '';

  // Thanks to https://play.tailwindcss.com/NT2vsY9Al5 for the group setup
</script>

<label
  for={toggleIdentifier}
  aria-label="Open main navigation"
  aria-controls="mobile-navigation"
  class={`group z-50 stroke-black ${classes}`}
>
  <svg class="h-[40px] w-[40px]" role="none">
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      class="origin-left translate-y-[20%] stroke-[10%] transition-all duration-[0.3s] peer-checked:group-[]:translate-x-[8px] peer-checked:group-[]:translate-y-[35%] peer-checked:group-[]:-rotate-45"
    />
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      class="origin-left translate-y-[-20%] stroke-[10%] transition-all duration-[0.3s] peer-checked:group-[]:translate-x-[8px] peer-checked:group-[]:translate-y-[-35%] peer-checked:group-[]:rotate-45
      "
    />
  </svg>
</label>
