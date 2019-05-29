<script>
	import { onMount, beforeUpdate } from 'svelte';

	import Header from './components/Header.svelte';
	import Container from './components/shared/Container.svelte';
	import Financial from './components/Financial.svelte';
	import Cart from './components/Cart.svelte';
	import Orders from './components/Orders.svelte';
	import Categories from './components/Categories.svelte';
	import Regions from './components/Regions.svelte';
	import Purchases from './components/Purchases.svelte';
	import getResponse from './api.js';

	let response;

	onMount(() => {
		updateResponse();
	});

	const updateResponse = () => {
		getResponse(activeRange, customDateRange)
			.then(res => response = res)
	}

	let activeRange = 'month';
	let customDateRange = null;

	const setActiveRange = e => {
		customDateRange = null;
		if(e.detail.range === 'custom'){
			customDateRange = {...e.detail};
		}
		activeRange = e.detail.range;
		updateResponse();
	};
</script>

<style lang="scss">
	:global(body)  {
		margin: 0;
		padding: 0;
		background-color: #e5e5e5;
		color: #202020;
		font-family: 'Roboto', sans-serif;
	}
	.app {
		padding: 30px 20px;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-row-gap: 36px;
		grid-column-gap: 20px;
		margin: 24px 0;
		&-item{
			&_full{
				grid-column: 1/-1;
			}
		}
	}
</style>

<div class="app-wrapper">
	<div class="app">
		<Header on:setActiveRange={setActiveRange} activeRange={activeRange} />
		{#if response}
			<div class="grid">
				<div class="grid-item grid-item_full">
					<Container>
						<span slot="title">Финансовые показатели</span>
						<div slot="content"><Financial data={response.amount_dashboard} isDay={response.for_day} /></div>
					</Container>
				</div>
				<div class="grid-item">
					<Container>
						<span slot="title">Корзина</span>
						<div slot="content"><Cart data={response.purchase_dashboard} /></div>
					</Container>
				</div>
				<div class="grid-item">
					<Container>
						<span slot="title">Заказы</span>
						<div slot="content"><Orders data={response.purchase_dashboard} /></div>
					</Container>
				</div>
				<div class="grid-item grid-item_full">
					<Container>
						<span slot="title">Корзина и заказы</span>
						<div slot="content"><Purchases data={response.purchase_dashboard.graph_data} isDay={response.for_day} /></div>
					</Container>
				</div>
				<!-- <div class="grid-item grid-item_full">
					<Container>
						<span slot="title">Пользователи</span>
						<div slot="content">Контент</div>
					</Container>
				</div> -->
				<div class="grid-item">
					<Container>
						<span slot="title">Категории</span>
						<div slot="content"><Categories data={response.orders_dashboard.categories}/></div>
					</Container>
				</div>
				<div class="grid-item">
					<Container>
						<span slot="title">Регионы</span>
						<div slot="content"><Regions data={response.orders_dashboard.regions} /></div>
					</Container>
				</div>
				<!-- <div class="grid-item grid-item_full">
					<Container>
						<span slot="title">Олдскульное облако запросов</span>
						<div slot="content">Контент</div>
					</Container>
				</div> -->
			</div>
		
		{/if}
	</div>
</div>