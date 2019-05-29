<script>
  import { onMount } from 'svelte';

  import buildOrdersChart, { transformToOrdersData } from '../charts/orders.js';

  export let data;
  let chart;
  
  onMount(() => {
    const { awaiting_summary, canceled_summary, success_summary, error_summary } = data;
    const ordersData = transformToOrdersData(awaiting_summary, canceled_summary, success_summary, error_summary);
    chart = buildOrdersChart(document.querySelector('.orders__chart-canvas'), ordersData);
  });
</script>

<style lang='scss'>
  .orders{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    margin-top: 32px;
    &__chart{
      grid-column: 1/2;
      &-canvas{
        width: 200px;
        height: 200px;
      }
    }
    &__info{
      grid-column: 2/-1;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-column-gap: 20px;
    }
  }
  .order-type{
    display: block;
    position: relative;
    color: #202020;
    font-weight: 500;
    font-size: 14px;
    padding-left: 32px;
    &:before{
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 24px;
      height: 24px;
      border-radius: 2px;
      transform: translateY(-50%);
    }
    &_success{
      &:before{
        background-color:#20AE80;
      }
    }
    &_awaiting{
      &:before{
        background-color: #4E73DF;
      }
    }
    &_canceled{
      &:before{
        background-color: #F1A244;
      }
    }
    &_error{
      &:before{
        background-color: #64666D;
      }
    }
  }
  .check{
    box-shadow: 0px 4px 8px rgba(147, 147, 147, 0.25);
    border-radius: 4px;
    padding: 17px 20px;
    &__title{
      color: #4E73DF;
      font-weight: 400;
      font-size: 14px;
      text-transform: uppercase;
      margin: 0;
      margin-bottom: 10px;
    }
    &__summ{
      font-size: 24px;
      font-weight: bold;
      color: #202020;
    }
  }
</style>

<div class="orders">
  <div class="orders__chart">
    <canvas class="orders__chart-canvas" width='200' height='200'></canvas>
  </div>
  <div class="orders__info">
    <div class="orders__info-item" style="grid-column: 1/4;"><div class="order-type order-type_success">Успешные</div></div>
    <div class="orders__info-item" style="grid-column: 4/7;"><div class="order-type order-type_awaiting">Ожидает оплаты</div></div>
    <div class="orders__info-item" style="grid-column: 1/4; grid-row: 2/3;"><div class="order-type order-type_canceled">Отмененные</div></div>
    <div class="orders__info-item" style="grid-column: 4/7; grid-row: 2/3;"><div class="order-type order-type_error">С Ошибкой</div></div>
    <div class="orders__info-item" style="grid-row: 3/4; grid-column: 1/4;">
      <div class="check">
        <h4 class="check__title">Средний чек</h4>
        <div class="check__summ">{Math.round(data.purchases_avg)} ₸</div>
      </div>
    </div>
    <div class="orders__info-item" style="grid-row: 3/4; grid-column: 4/7;">
      <div class="check">
        <h4 class="check__title">Макс. чек</h4>
        <div class="check__summ">{Math.round(data.purchases_max)} ₸</div>
      </div>
    </div>
  </div>
</div>