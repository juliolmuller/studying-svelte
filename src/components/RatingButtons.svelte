<script lang="ts">
  export let value: number

  function handleChange(event: any) {
    value = Number(event.currentTarget.value)
  }
</script>

<ul class="root">
  {#each Array(10) as _, index (index)}
    <li>
      <input
        checked={value === index + 1}
        id={`rating-num${index + 1}`}
        name="rating"
        type="radio"
        value={index + 1}
        on:change={handleChange}
      />

      <label for={`rating-num${index + 1}`}>{index + 1}</label>
    </li>
  {/each}
</ul>

<style lang="scss">
  .root {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;

    li {
      position: relative;
      transition: all 200ms;

      width: 54px;
      height: 54px;
      border-radius: 50%;
      background-color: #ccc;
      padding: 0.75rem;

      font-size: 19px;
      text-align: center;

      &:hover {
        background: #ff6a95;
        color: #fff;
      }

      [type='radio'] {
        opacity: 0;

        &:checked ~ label {
          background-color: #ff6a95;
          color: #fff;
        }
      }

      label {
        cursor: pointer;
        transform: translate(-50%, -50%);

        position: absolute;
        top: 50%;
        left: 50%;

        height: 54px;
        width: 54px;
        border-radius: 50%;
        padding: 0.75rem;
      }
    }
  }
</style>
