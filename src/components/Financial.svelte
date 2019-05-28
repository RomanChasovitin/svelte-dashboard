<script>
  import { onMount } from 'svelte';

  import Checkbox from './shared/Checkbox.svelte';
  import buildFinancialChart, { financialData } from '../charts/financial.js';

  let isShowTurnover = true;
  let isShowMargin = true;
  let chart;
  
  
  const toggleTurnover = () => isShowTurnover = !isShowTurnover;
  const toggleMargin = () => isShowMargin = !isShowMargin;

  onMount(() => {
    chart = buildFinancialChart(document.querySelector('#financial-chart'), financialData);
  });

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
      <div class="financial__info-item-text">121 768 ₸</div>
    </div>
    <div class="financial__info-item financial__info-item--margin">
      <span class="financial__info-item-title">Маржа</span>
      <div class="financial__info-item-text">26 615 ₸</div>
    </div>
    <div class="financial__info-checkbox">
      <Checkbox id='turnover' on:toggle={toggleTurnover} checked={isShowTurnover}>Оборот</Checkbox>
    </div>
    <div class="financial__info-checkbox">
      <Checkbox id='margin' on:toggle={toggleMargin} checked={isShowMargin} color='#AB64AC'>Маржа</Checkbox>
    </div>
  </div>
  <div class="financial__chart">
    <canvas class="financial__chart-canvas" id="financial-chart"></canvas>
  </div>
</div>