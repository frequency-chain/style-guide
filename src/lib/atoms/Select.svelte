<script lang="ts">
    import {Root, Trigger, Value, Content, Item} from "../../shadcnComponents/ui/select";
 </script>
  
 <Root>
  <Trigger class="w-[180px]">
   <Value placeholder="Theme" />
  </Trigger>
  <Content>
   <Item value="light">Light</Item>
   <Item value="dark">Dark</Item>
   <Item value="system">System</Item>
  </Content>
 </Root>