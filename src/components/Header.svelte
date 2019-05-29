<script>
  import { createEventDispatcher } from 'svelte';

  import Button from './shared/Button.svelte';
  import Datepicker from './shared/Datepicker.svelte';
  export let activeRange;
  
  const dispatch = createEventDispatcher();

  const setActiveRange = range => dispatch('setActiveRange', { range });
  const setCustomPickDate = e => dispatch('setActiveRange', { range: 'custom', ...e.detail })
</script>

<style lang="scss">
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__title{
      font-size: 20px;
      line-height: 1;
      margin: 0;
    }
    &__controls{ 
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 8px;
      justify-content: flex-end;
      align-items: center;
      &-text{
        margin-right: 4px;
      }
    }
  }
</style>

<div class="header">
  <h2 class="header__title">Показатели Товары Chocolife</h2>
  <div class="header__controls">
    <div class="header__controls-text">Дата отчёта:</div>
    <Button on:handleClick={setActiveRange.bind(null, 'month')} active={activeRange === 'month'}>За месяц</Button>
    <Button on:handleClick={setActiveRange.bind(null, 'week')} active={activeRange === 'week'}>За неделю</Button>
    <Button on:handleClick={setActiveRange.bind(null, 'day')} active={activeRange === 'day'}>За сегодня</Button>
    <Datepicker on:pickDate={setCustomPickDate} active={activeRange === 'custom'} />
  </div>
</div>
