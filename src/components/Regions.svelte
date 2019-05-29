<script>
  import { onMount } from 'svelte';

  import getColor from './shared/colors.js';
  import buildRegionsChart, { transformToRegionsData } from '../charts/regions.js';

  export let data;
  let chart;

  const dataArray = Object.keys(data);

  onMount(() => {
    const categoriesData = transformToRegionsData(data);
    chart = buildRegionsChart(document.querySelector('.regions__chart-canvas'), categoriesData);
  })
</script>

<style lang='scss'>
  .regions {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 80px;
    padding: 16px 0;
    &__chart {
      grid-column: 2/3;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      &-title {
        font-weight: 500;
        color: #4E73DF;
        text-transform: uppercase;
        font-size: 15px;
        margin-bottom: 16px;
      }
      &-canvas {
        width: 200px !important;
        height: 200px !important;
      }
    }
  }
  
  .legend {
    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 16px;
      border-bottom: 1px solid #DCDCDC;
      span{
        font-weight: 500;
        color: #4E73DF;
        text-transform: uppercase;
        font-size: 15px;
      }
    }
    &__items {
      .item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 16px;
        border-bottom: 1px dashed #DCDCDC;
        transition: all .3s ease;
        &:hover {
          background: #F8F9FC;
          box-shadow: 0px 4px 8px rgba(147, 147, 147, 0.25);
        }
        &__label {
          position: absolute;
          width: 24px;
          height: 24px;
          background-color: #4E73DF;
          border-radius: 2px;
        }
        &__title {
          font-size: 15px;
          font-weight: 500;
          color: #202020;
          padding-left: 32px;
        }
        &__count {
          font-size: 14px;
          color: #4E73DF;
        }
      }
    }
  }
</style>

<div class="regions">
  <div class="regions__legend">
    <div class="legend">
      <div class="legend__title">
        <span>Регион</span><span>Покупок в регионе</span>
      </div>
      <div class="legend__items">
      {#each dataArray as key, idx }
        {#if data[key]}
          <div class="item">
            <div class="item__label" style="background-color: {getColor(idx)}"></div>
            <span class="item__title">{key}</span>
            <div class="item__count">{data[key][0]}</div>
          </div>
        {/if}
      {/each}
      </div>
    </div>
  </div>
  <div class="regions__chart">
    <div class="regions__chart-title">
      Процент покупок
    </div>
    <canvas class="regions__chart-canvas" width="200" height="200"></canvas>
  </div>
</div>