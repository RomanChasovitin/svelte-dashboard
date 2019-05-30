<script>
  import { fade } from 'svelte/transition';
  export let isLoading = false;
</script>

<style lang='scss'>
  .preloader-wrapper {
    width: 100%;
    position: relative;
    height: 400px;
    margin: 24px 0;
    .choco-loader__wrapper {
      z-index: 10;
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(147, 147, 147, 0.25);
    }
  }

  .choco-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 55px;
    height: 55px;
    transform: translate(-50%, -50%);
  }

  .choco-loader__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    opacity: 1;
    transition: height 0.3s ease, opacity 0.3s ease;
  }

  .choco-loader__wrapper_hidden {
    height: 0;
    overflow: hidden;
    opacity: 0;
  }

  .choco-loader svg {
    width: 100%;
    height: 100%;
  }

  .choco-loader .heart {
    display: inline-block;
    width: 55px;
    height: 45px;
    cursor: pointer;
  }

  .choco-loader .heart svg {
    color: transparent;
    -webkit-transition: all 0.55s ease;
    transition: all 0.55s ease;
    fill: transparent;
  }

  .choco-loader .layer {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 55px;
    height: 45px;
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    pointer-events: none;
  }

  .choco-loader .layer svg {
    color: transparent;
    -webkit-transition: color 0.9s ease 0.2s;
    transition: color 0.9s ease 0.2s;
    animation: fillHeart 2s infinite linear;
    fill: transparent;
  }

  .choco-loader .layer .animatedPath {
    animation: strokeHeart 2s infinite;
  }

  @keyframes strokeHeart {
    0% {
      stroke-dasharray: 156;
      stroke-dashoffset: 156;
    }

    40% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fillHeart {

    0%,
    40%,
    60% {
      color: transparent;
      fill: transparent;
    }

    80%,
    100% {
      color: #d75a4a;
      fill: #d75a4a;
    }
  }
</style>

{#if isLoading }
  <div class="preloader-wrapper">
    <div class='choco-loader__wrapper' transition:fade="{{ duration: 150 }}">
      <div class='choco-loader'>
        <span class='heart'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path stroke-width="2" stroke="#ddd" style="fill:currentColor;" d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
          c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
          c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z">
            </path>
          </svg>
        </span>
        <span class='layer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path class="animatedPath" stroke="#D75A4A" stroke-width="2" style="fill:currentColor;" d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
            c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
            c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z">
            </path>
          </svg>
        </span>
      </div>
    </div>
  </div>
{/if}