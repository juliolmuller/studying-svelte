<script lang="ts">
  let firstName = 'Josnei'
  let  lastName = 'Pônei'
  let isArriving = true
  let logs: string[] = []

  $: name = `${firstName} ${lastName}`

  function toggle() {
    const time = new Date().toString().slice(16, 24)
    logs = [...logs, isArriving ? `Left at ${time}` : `Arrived at ${time}`]
    isArriving = !isArriving
  }
</script>

<main>
  <h1>
    {#if isArriving}
      Hello, {name}!
    {:else}
      Good-bye, {name}!
    {/if}
  </h1>

  <button on:click={toggle}>
    Say {isArriving ? 'Good-Bye' : 'Hello'}
  </button>

  <ul>
    {#each logs as log}
      <li>{log}</li>
    {/each}
  </ul>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    width: 100%;
    min-height: 100vh;
    background-color: #333;
    color: #fff;
  }

  button {
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: #224;
    padding: 0.5rem;

    color: #fff;
    font-weight: 700;

    transition: filter 200ms;

    &:hover {
      filter: brightness(80%);
    }
  }

  ul {
    overflow: auto;
    height: 50vh;
    width: 240px;
    border-radius: 6px;
    background-color: #444;
    padding: 1rem 2rem;

    li + li {
      margin-top: 0.5rem;
    }
  }
</style>
