<script>

</script>

<style lang="scss">
  .container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(147, 147, 147, 0.25);
    &__title, &__body {
      padding: 17px 32px;
    }
    &__title{
      font-size: 20px;
      color: #4E73DF;
      font-weight: bold;
      box-shadow: inset 0px -1px 0px #EBEBEB;
    }
  }
</style>

<div class="container">
  <div class="container__title">
    <slot name="title">Финансовые показатели</slot>
  </div>
  <div class="container__body">
    <slot name="content">Пусто</slot>
  </div>
</div>