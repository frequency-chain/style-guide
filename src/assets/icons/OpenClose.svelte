<script lang="ts">
  export let onClick: () => void;
  export let isOpen: boolean = false;
  export let isDemo: boolean = false;
  export let classes: string = '';

  let isDemoOpen = isOpen;

  function handleClick() {
    // used when demoing component in storybook
    if (isDemo) {
      isDemoOpen = !isDemoOpen;
      return;
    }
    // in app use
    onClick();
  }
</script>

<button
  aria-label="Open main navigation"
  aria-controls="mobile-navigation"
  on:click|preventDefault={handleClick}
  class={`z-50 stroke-black ${classes}`}
>
  <svg class="h-[40px] w-[40px]" role="none">
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      class={`origin-left translate-y-[20%] stroke-[10%] transition-all duration-[0.3s] ${isOpen || isDemoOpen ? 'translate-x-[8px] translate-y-[35%] -rotate-45' : 'rotate-0'}`}
    />
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      class={`origin-left translate-y-[-20%] stroke-[10%] transition-all duration-[0.3s] ${isOpen || isDemoOpen ? 'translate-x-[8px] translate-y-[-35%] rotate-45' : 'rotate-0'}`}
    />
  </svg>
</button>
