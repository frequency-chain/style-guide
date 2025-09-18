<script lang="ts">
  import { Root, Trigger, Content, Item } from '../shadcnComponents/ui/select';
  import FormElement from './FormElement.svelte';
  import { cn } from '../utils';

  interface Props {
    options: { label: string; value: string }[];
    value?: string;
    isRequired?: boolean;
    label: string;
    description?: string;
    placeholder?: string;
    error?: string;
    isLoading?: boolean;
    disabled?: boolean;
    id?: string;
  }

  let {
    options,
    value = $bindable(),
    isRequired = false,
    label,
    description,
    placeholder = 'Select an option',
    error = undefined,
    isLoading = false,
    disabled = false,
    id = undefined,
    ...rest
  }: Props = $props();
</script>

<div class="flex flex-col">
  <FormElement {label} {isRequired} {description} {error} {isLoading} elementId={id} {...rest}>
    <div>
      <Root type="single" disabled={isLoading || disabled} bind:value>
        <Trigger {error} {id}>
          <span class={cn(!value && 'text-gray2')}
            >{options.find((o) => o.value === value)?.label ?? placeholder}
          </span>
        </Trigger>
        <Content>
          {#each options as option (option.value)}
            <Item value={option.value}>{option.label}</Item>
          {/each}
        </Content>
      </Root>
    </div>
  </FormElement>
</div>
