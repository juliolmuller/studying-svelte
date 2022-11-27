<script lang="ts">
  import { onDestroy } from 'svelte'
  import { FeedbackStore } from '../stores'
  import type { Feedback } from '../stores'

  let feedbacks: Feedback[] = []

  const unsubscribeStore = FeedbackStore.subscribe((data) => {
    feedbacks = data
  })

  onDestroy(unsubscribeStore)

  $: count = feedbacks.length
  $: avarage = feedbacks.reduce((total, { rating }) => total + rating, 0) / count
</script>

<div class="root">
  <p>Average rating: {avarage || 0}</p>
  <p>{count || 0} feedbacks</p>
</div>

<style lang="scss">
  .root {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 2rem 0;
    font-size: 1.25rem;
    font-weight: 700;
  }
</style>
