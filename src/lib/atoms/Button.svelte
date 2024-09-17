<script>
  /**
   * @type {string} Link
   */
  export let href = '';
  /**
   * Specify the kind of icon
   * @type {'primary' | 'secondary' }
   */
  export let type = 'primary';
  /**
   * Specify the size
   * @type {'xs' | 'sm' | 'normal' | 'md' | 'large'  }
   */
  export let size = 'normal';

  $: typeCoding =
    type === 'primary'
      ? 'bg-secondary'
      : 'bg-brightBlue border border-slate-600 text-slate-600 hover:bg-slate-200';

  $: btnWidth =
    {
      xs: 'w-[115px]',
      sm: 'w-[197px]',
      md: 'w-[339px]',
      lg: 'w-[388px]',
      normal: 'w-[263px]'
    }[size] || 'w-[263px]';
</script>

<a
  class={`inline-block rounded-full py-[13px] ${typeCoding} ${btnWidth}`}
  {href}
  target="_blank"
  rel="noreferrer">
  <div class="flex items-center justify-center gap-2 text-center">
    <slot />
  </div>
</a>
