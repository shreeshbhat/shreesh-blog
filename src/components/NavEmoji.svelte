<script>
import { onMount } from 'svelte';
import { getRandomEmoji } from '../utils/emoji';

let emoji = '';
onMount(() => {
    emoji = getRandomEmoji();
});
</script>
<style lang="scss">
    .emoji {
        display: block;
        font-size: var(--h1-text-size);
        min-height: 31px;
        min-width: 31px;
    }
</style>

<span aria-hidden="true" class="emoji">{emoji}</span>