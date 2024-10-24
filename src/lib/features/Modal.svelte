<script lang="ts">
    import {Root, Trigger, Content, Header, Title, Description} from '../shadcnComponents/ui/dialog';
</script>

<Root>
    <Trigger>
        <slot name="trigger"/>
    </Trigger>
    <Content>
        <Header>
            <Title>
                <slot name="title"/>
            </Title>
            <Description>
                <slot name="description"/>
            </Description>
        </Header>
        <slot name="body"/>
    </Content>
</Root>
