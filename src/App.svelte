<script lang="ts">
  import FeedbackCard from './components/FeedbackCard.svelte'

  let feedbacks = [
    {
      id: 1,
      rating: 10,
      body: 'Similique qui aspernatur animi quasi voluptatibus dolorem totam. Eligendi illo sunt omnis. Molestiae quidem eveniet animi neque ipsum autem a velit. Doloribus quae ut ipsum dicta qui sunt. Et aliquid in. Quia enim quaerat tempore quae in in.',
    },
    {
      id: 2,
      rating: 9,
      body: 'Ea voluptatem repudiandae officia numquam. Quae asperiores totam iusto. Quam eaque minus.',
    },
    {
      id: 3,
      rating: 8,
      body: 'Similique repellendus voluptatem nam consequuntur fugiat eaque facere aut tenetur. Veritatis aut inventore unde quod sint et sapiente voluptatem architecto. Molestias voluptatem molestias rerum est voluptas.',
    },
  ]

  function handleDelete(event: CustomEvent<number>) {
    feedbacks = feedbacks.filter(({ id }) => id !== event.detail)
  }
</script>

<main class="container">
  <h1>Hello, there!</h1>

  <div role="list">
    {#each feedbacks as feedback (feedback.id)}
      <FeedbackCard
        id={feedback.id}
        rating={feedback.rating}
        body={feedback.body}
        on:delete={handleDelete}
      />
    {/each}
  </div>
</main>

<style lang="scss"></style>
