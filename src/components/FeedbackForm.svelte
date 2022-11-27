<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { v4 as uuid } from 'uuid'
  import RatingButtons from './RatingButtons.svelte'

  const dispatch = createEventDispatcher()

  const MIN_TEXT_LENGTH = 10

  let feedbackText = ''
  let feedbackRating = 0

  $: textLength = feedbackText.trim().length
  $: canSubmit = feedbackRating> 0 && textLength >= MIN_TEXT_LENGTH

  function handleSelect(event) {
    feedbackRating = event.detail
  }

  function handleSubmit(event) {
    if(canSubmit) {
      const newFeedback = {
        rating: feedbackRating,
        text: feedbackText,
        id: uuid(),
      }

      dispatch('create', newFeedback)
      feedbackRating = 0
      feedbackText = ''
    }
  }
</script>


<div class="root">
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>

  <form on:submit|preventDefault={handleSubmit}>
    <RatingButtons bind:value={feedbackRating} />

    <div class="controls-group">
      <input
        autofocus
        placeholder="Tell us something that keeps you coming back"
        type="text"
        bind:value={feedbackText}
      />

      <button disabled={!canSubmit} type="submit">
        Send
      </button>
    </div>

    {#if textLength > 0 && textLength < MIN_TEXT_LENGTH}
      <div class="error-message">
        Text must be at least {MIN_TEXT_LENGTH} characters long
      </div>
    {/if}
  </form>
</div>

<style lang="scss">
  .root {
    position: relative;
    margin: 1.25rem 0;
    border-radius: 15px;
    background-color: #fff;
    padding: 2.5rem 3rem 3rem;

    header {
      max-width: 400px;
      margin: auto;

      h2 {
        color: #333;
        font-size: 22px;
        font-weight: 600;
        text-align: center;
      }
    }

    .controls-group {
      display: flex;
      flex-direction: row;

      margin-top: 1rem;
      border-radius: 8px;
      border: 1px solid #ccc;
      padding: 0.5rem 0.75rem;

      input {
        flex-grow: 2;
        border: none;
        background-color: transparent;

        color: #202142;
        font-size: 16px;
      }

      input:focus {
        outline: none;
      }
    }

    .error-message{
      position: absolute;
      padding-top: 0.75rem;
      color: rebeccapurple;
    }
  }

  button {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: #202142;

    color: #fff;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
      transform: scale(98%);
    }

    &:disabled{
      cursor:auto;
      background-color: #cccccc;
      color: #333;
    }

    &:disabled:hover{
      transform: scale(100%);
      opacity: 1;
    }
  }
</style>
