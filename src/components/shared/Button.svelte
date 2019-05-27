<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('handleClick', {});
  }

  export let active = false;
</script>

<style lang="scss">
  .button{
    margin: 0;
    padding: 10px 16px;
    background-color: #fff;
    border-radius: 4px;
    display: block;
    line-height: 1;
    border: 2px solid transparent;
    transition: border-color .1s ease-in;
    cursor: pointer;
    &.active{
      border-color: #4E73DF;
    }
  }
</style>

<button on:click={handleClick} class="button" class:active ><slot></slot></button>