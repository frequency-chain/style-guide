import { Select as SelectPrimitive } from 'bits-ui';
import Label from './select-label.svelte.js';
import Item from './select-item.svelte.js';
import Content from './select-content.svelte.js';
import Trigger from './select-trigger.svelte.js';
import Separator from './select-separator.svelte.js';
declare const Root: typeof SelectPrimitive.Root;
declare const Group: typeof SelectPrimitive.Group;
declare const Input: typeof SelectPrimitive.Input;
declare const Value: typeof SelectPrimitive.Value;
export {
  Root,
  Group,
  Input,
  Label,
  Item,
  Value,
  Content,
  Trigger,
  Separator,
  Root as Select,
  Group as SelectGroup,
  Input as SelectInput,
  Label as SelectLabel,
  Item as SelectItem,
  Value as SelectValue,
  Content as SelectContent,
  Trigger as SelectTrigger,
  Separator as SelectSeparator,
};
