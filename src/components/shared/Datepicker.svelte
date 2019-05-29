<script>
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  import Button from './Button.svelte';

  const dispatch = createEventDispatcher();

  export let active;
  let isShowDatepick = false;
  let dateStart = '2019-05-01';
  let dateEnd = '2019-05-31';

  const toggleDatepick = () => isShowDatepick = !isShowDatepick;
  
  const submitDatepick = () => {
    if(!dateStart || !dateEnd) return;
    toggleDatepick();
    dispatch('pickDate', {dateStart, dateEnd});
  }
</script>

<style lang='scss'>
  .datepicker {
    position: relative;
    &__content {
      position: absolute;
      width: 500px;
      top: calc(100% + 5px);
      left: calc(100% - 500px);
      background-color: #fff;
      padding: 16px;
      box-sizing: border-box;
      border-radius: 2px;
      text-align: center;
      box-shadow: 0px 4px 8px rgba(147, 147, 147, 0.25);
    }
    &__inputs {
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      input {
        box-sizing: border-box;
        width: 170px;
        margin: 0;
        padding: 10px 16px;
        background-color: #fff;
        border-radius: 4px;
        display: block;
        line-height: 1;
        border: 1px solid #cecece;
        transition: border-color .1s ease-in;
        cursor: pointer;
        &:focus{
          outline: none;
          border-color: #4E73DF;
        }
      }
    }
  }
</style>

<div class="datepicker">
  <Button on:handleClick={toggleDatepick} width='100%' active={active}>Дата</Button>
  {#if isShowDatepick}
    <div class="datepicker__content" transition:fade="{{ duration: 150 }}">
      <div class="datepicker__inputs">
        <input bind:value={dateStart} type="date">
        <input bind:value={dateEnd} type="date">
        <Button on:handleClick={submitDatepick} active={true} disabled={!dateStart || !dateEnd}>Применить</Button>
      </div>
      {dateStart} - {dateEnd}
    </div>
  {/if}
</div>