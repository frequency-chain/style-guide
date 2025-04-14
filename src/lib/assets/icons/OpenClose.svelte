<script lang="ts">
  export let toggleIdentifier: string = 'mobile-menu-toggle';
  export let classes: string = '';

  // Thanks to https://play.tailwindcss.com/NT2vsY9Al5 for the group setup
</script>

<label
  for={toggleIdentifier}
  aria-label="Open main navigation"
  aria-controls="mobile-navigation"
  class={`group z-50 ${classes}`}
>
  <svg class="h-[40px] w-[40px] stroke-current" role="none">
    <line
      x1="5%"
      y1="50%"
      x2="95%"
      y2="50%"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="origin-left translate-y-[25%] stroke-[10%] transition-all duration-[0.3s] in-[.group]:peer-checked:translate-x-[8px] in-[.group]:peer-checked:translate-y-[35%] in-[.group]:peer-checked:-rotate-45"
    />
    <line
      x1="5%"
      y1="50%"
      x2="95%"
      y2="50%"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="origin-center stroke-[10%] transition-all duration-[0.3s] in-[.group]:peer-checked:scale-x-0"
    />
    <line
      x1="5%"
      y1="50%"
      x2="95%"
      y2="50%"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="origin-left translate-y-[-25%] stroke-[10%] transition-all duration-[0.3s] in-[.group]:peer-checked:translate-x-[8px] in-[.group]:peer-checked:translate-y-[-35%] in-[.group]:peer-checked:rotate-45
      "
    />
  </svg>
</label>
