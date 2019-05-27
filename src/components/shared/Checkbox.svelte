<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  export let checked = false;
  export let color = '#2BBAC3';
  export let id;
  
  const dispatch = createEventDispatcher();

  const toggle = () => dispatch('toggle');
</script>

<style lang="scss">
  .checkbox-wrapper{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    &__checkbox{
      display: block;
      position: relative;
      width: 24px;
      height: 24px;
      border: 1px solid #202020;
      border-radius: 2px;
      margin-right: 8px;
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 14px;
        height: 11px;
      }
    }
    &__text{
      font-size: 16px;
      font-weight: 500;
    }
  }
</style>

{#if id}
  <label class="checkbox-wrapper">
    <input type="checkbox" hidden on:change={toggle}>
    <span class="checkbox-wrapper__checkbox" style="border-color: {color}">
      {#if checked}
        <svg transition:fade="{{ duration: 150 }}" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 9.49999L1.99999 5.99999L0.833328 7.16666L5.5 11.8333L15.5 1.83332L14.3333 0.666656L5.5 9.49999Z" fill="{color}"/>
        </svg>
      {/if}
    </span>
    <span class="checkbox-wrapper__text"><slot></slot></span>
  </label>
{/if}