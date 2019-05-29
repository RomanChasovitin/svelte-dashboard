<script>
  import { beforeUpdate, onMount } from 'svelte';

  import Checkbox from './shared/Checkbox.svelte';
  import buildFinancialChart, { transformToFinancialData } from '../charts/financial.js';

  export let data;
  export let isDay;

  let totalTurnover;
  let totalMargin;
  $: {
    totalTurnover = 0;
    totalMargin = 0;
    Object.keys(data).forEach(key => {
      totalTurnover += data[key].turnover;
      totalMargin += data[key].margin;
    })
  }
  let chart;
  onMount(() => {
    const financialData = transformToFinancialData(data, { isShowMargin, isShowTurnover, isDay });
    chart = buildFinancialChart(document.querySelector('.financial__chart-canvas'), financialData);
  });

  beforeUpdate(() => {
    if(!chart) return;
    chart.clear();
    const financialData = transformToFinancialData(data, { isShowMargin, isShowTurnover, isDay });
    chart = buildFinancialChart(document.querySelector('.financial__chart-canvas'), financialData);
  });
  
  let isShowTurnover = true;
  let isShowMargin = true;
  const toggleTurnover = () => isShowTurnover = !isShowTurnover;
  const toggleMargin = () => isShowMargin = !isShowMargin;

</script>

<style lang="scss">
  .financial{
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    align-items: center;
    grid-gap: 100px;
    &__info{
      display: grid;
      grid-column: 1/4;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 24px;
      &-item{
        grid-column: 1/3;
        box-shadow: 0px 4px 8px rgba(147, 147, 147, 0.25);
        border-radius: 4px;
        border-left: 4px solid transparent;
        padding: 16px 20px;
        background-repeat: no-repeat;
        &-title{
          font-size: 16px;
          text-transform: uppercase;
        }
        &-text{
          font-size: 30px;
          color: #202020;
          margin-top: 16px;
          font-weight: bold;
        }
        &--turnover {
          border-color: #2BBAC3;
          color: #2BBAC3;
          background-image: url(../../assets/images/icons/turnover.svg);
          background-size: 40px;
          background-position: calc(100% - 25px) center;
        }
        &--margin{
          border-color: #AB64AC;
          color: #AB64AC;
          background-image: url(../../assets/images/icons/merge.svg);
          background-size: 20px;
          background-position: calc(100% - 34px) center;
        }
      }
    }
    &__chart{
      grid-column: 4/-1;
      &-canvas{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

<div class="financial">
  <div class="financial__info">
    <div class="financial__info-item financial__info-item--turnover">
      <span class="financial__info-item-title">Оборот</span>
      <div class="financial__info-item-text">{Math.round(totalTurnover)} ₸</div>
    </div>
    <div class="financial__info-item financial__info-item--margin">
      <span class="financial__info-item-title">Маржа</span>
      <div class="financial__info-item-text">{Math.round(totalMargin)} ₸</div>
    </div>
    <div class="financial__info-checkbox">
      <Checkbox id='turnover' on:toggle={toggleTurnover} checked={isShowTurnover} color='#2BBAC3'>Оборот</Checkbox>
    </div>
    <div class="financial__info-checkbox">
      <Checkbox id='margin' on:toggle={toggleMargin} checked={isShowMargin} color='#AB64AC'>Маржа</Checkbox>
    </div>
  </div>
  <div class="financial__chart">
    <canvas class="financial__chart-canvas" id="financial-chart"></canvas>
  </div>
</div>