<script lang="ts">
  import { fade, scale } from 'svelte/transition'
  import FeedbackCard from './components/FeedbackCard.svelte'
  import FeedbackForm from './components/FeedbackForm.svelte'
  import Stats from './components/Stats.svelte'
  import { FeedbackStore } from './stores'
</script>

<main class="root container">
  <FeedbackForm />
  <Stats />

  <div role="list">
    {#each $FeedbackStore as feedback (feedback.id)}
      <div in:scale out:fade>
        <FeedbackCard
          id={feedback.id}
          rating={feedback.rating}
          body={feedback.body}
        />
      </div>
    {/each}
  </div>
</main>
