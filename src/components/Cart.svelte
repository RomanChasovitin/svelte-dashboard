<script>
  import { onMount, beforeUpdate } from 'svelte';
  import buildCartChart, { transformToCartData } from '../charts/cart.js';
  export let data;
  let chart;

  onMount(() => {
    const cartData = transformToCartData(data.carts_open, data.carts_close);
    chart = buildCartChart(document.querySelector('.cart__chart-canvas'), cartData);
  });
</script>

<style lang="scss">
  .cart{
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
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 20px;
    }
  }

  .open-itm, .close-itm {
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
  }
  .open-itm:before{
    background-color: #4E73DF;
  }
  .close-itm:before{
    background-color: #20AE80;
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

  <div class="cart">
    <div class="cart__chart">
      <canvas class="cart__chart-canvas" width="200" height="200"></canvas>
    </div>
    <div class="cart__info">
      <div class="cart__info-item">
        <span class="open-itm">Открытые</span>
      </div>
      <div class="cart__info-item">
        <div class="close-itm">Закрытые</div>
      </div>
      <div class="cart__info-item">
        <div class="check">
          <h4 class="check__title">Кол-во открытых</h4>
          <div class="check__summ">{Math.round(data.carts_open)} шт.</div>
        </div>
      </div>
      <div class="cart__info-item">
        <div class="check">
          <h4 class="check__title">Кол-во закрытых</h4>
          <div class="check__summ">{Math.round(data.carts_close)} шт.</div>
        </div>
      </div>
    </div>
  </div>