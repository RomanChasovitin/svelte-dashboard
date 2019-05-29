<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('handleClick', {});
  }

  export let active = false;
  export let width;
  export let disabled = false;
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
    &[disabled]{
      background-color: #ebebeb;
      border-color: transparent;
      cursor: not-allowed;
      opacity: 0.7;
    }
  }
</style>

<button on:click={handleClick} style="width: {width}" class="button" class:active disabled={disabled}><slot></slot></button>