<script lang="ts">
  import { FeedbackStore } from '../stores'

  export let id: string
  export let rating: number
  export let body: string

  function handelDelete() {
    if (confirm('Are you sure you wanna delete this feedback?'))
      FeedbackStore.update((feedbacks) => {
        return feedbacks.filter((feedback) => feedback.id !== id)
      })
  }
</script>

<div id="feedback-{id}" class="root" role="listitem">
  <div class="rating">
    {rating}
  </div>

  <p class="body">
    {body}
  </p>

  <button class="delete-btn" on:click={handelDelete}>
    &times;
  </button>
</div>

<style lang="scss">
  .root {
    position: relative;
    margin: 1.25rem 0;
    border-radius: 15px;
    background-color: #fff;
    padding: 2.5rem 3rem;

    &:hover .delete-btn {
      opacity: 1;
    }
  }

  .rating {
    position: absolute;
    top: -10px;
    left: -10px;

    width: 54px;
    height: 54px;
    border: 1px solid #eee;
    border-radius: 50%;
    background-color: #ff6a95;
    padding: 0.5rem;

    color: #fff;
    font-size: 1.5rem;
    text-align: center;
  }

  .body {
    color: #333;
  }

  .delete-btn {
    cursor: pointer;
    opacity: 0;
    transition: all 200ms;

    position: absolute;
    top: 10px;
    right: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 32px;
    width: 32px;
    background: none;
    border: none;
    border-radius: 50%;

    color: #333;
    font-size: 1.375rem;
  }
</style>
