<script>
  import { beforeUpdate, onMount } from 'svelte';

  import Checkbox from './shared/Checkbox.svelte';
  import buildPurchasesChart, { transformToPurchasesData } from '../charts/purchases.js';
  
  export let data;
  export let isDay;

  let chart;
  onMount(() => {
    const purchaseData = transformToPurchasesData(data, {...controls, isDay});
    chart = buildPurchasesChart(document.querySelector('.purchases__chart-canvas'), purchaseData);
  });

  beforeUpdate(() => {
    if(!chart) return;
    chart.clear();
    const purchaseData = transformToPurchasesData(data, {...controls, isDay});
    chart = buildPurchasesChart(document.querySelector('.purchases__chart-canvas'), purchaseData);
  });
  
  let controls = {
    successPurchase: true,
    canceledPurchase: true,
    awaitingPurchase: true,
    errorPurchase: true,
  }

  const toggleControl = control => controls[control] = !controls[control];
</script>

<style lang='scss'>
  .purchases{
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    align-items: flex-start;
    padding: 16px 0;
    grid-gap: 100px;
    &__info{
      display: grid;
      grid-column: 1/3;
      grid-template-columns: 1fr;
      grid-row-gap: 24px;
    }
    &__chart{
      grid-column: 3/-1;
      &-canvas{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

<div class="purchases">
  <div class="purchases__info">
    <div class="purchases__info-item">
      <Checkbox 
        id='successPurchase' 
        on:toggle={toggleControl.bind(null, 'successPurchase')} 
        checked={controls.successPurchase} 
        color='#20AE80'
      >
        Успешные заказы
      </Checkbox>
    </div>
      <div class="purchases__info-item">
      <Checkbox 
        id='awaitingPurchase' 
        on:toggle={toggleControl.bind(null, 'awaitingPurchase')} 
        checked={controls.awaitingPurchase} 
        color='#4E73DF'
      >
        Ожидающие оплаты
      </Checkbox>
    </div>
    <div class="purchases__info-item">
      <Checkbox 
        id='canceledPurchase' 
        on:toggle={toggleControl.bind(null, 'canceledPurchase')} 
        checked={controls.canceledPurchase} 
        color='#F1A244'
      >
        Отмененные заказы
      </Checkbox>
    </div>
    <div class="purchases__info-item">
      <Checkbox 
        id='errorPurchase' 
        on:toggle={toggleControl.bind(null, 'errorPurchase')} 
        checked={controls.errorPurchase} 
        color='#CD4F4F'
      >
        Заказы с ошибкой
      </Checkbox>
    </div>
  </div>
  <div class="purchases__chart">
    <canvas class="purchases__chart-canvas" id="purchases-chart"></canvas>
  </div>
</div>