<script>
	import Header from './components/Header.svelte';
	import Container from './components/shared/Container.svelte';
	import Financial from './components/Financial.svelte';
	import Cart from './components/Cart.svelte';
	import Orders from './components/Orders.svelte';

	let activeRange = 'day';

	const setActiveRange = e => activeRange = e.detail.range;
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
		<div class="grid">
			<div class="grid-item grid-item_full">
				<Container>
					<span slot="title">Финансовые показатели</span>
					<div slot="content"><Financial /></div>
				</Container>
			</div>
			<div class="grid-item">
				<Container>
					<span slot="title">Корзина</span>
					<div slot="content"><Cart /></div>
				</Container>
			</div>
			<div class="grid-item">
				<Container>
					<span slot="title">Заказы</span>
					<div slot="content"><Orders /></div>
				</Container>
			</div>
			<div class="grid-item grid-item_full">
				<Container>
					<span slot="title">Корзина и заказы</span>
					<div slot="content">Контент</div>
				</Container>
			</div>
			<div class="grid-item grid-item_full">
				<Container>
					<span slot="title">Пользователи</span>
					<div slot="content">Контент</div>
				</Container>
			</div>
			<div class="grid-item">
				<Container>
					<span slot="title">Категории</span>
					<div slot="content">Контент</div>
				</Container>
			</div>
			<div class="grid-item">
				<Container>
					<span slot="title">Регионы</span>
					<div slot="content">Контент</div>
				</Container>
			</div>
			<div class="grid-item grid-item_full">
				<Container>
					<span slot="title">Олдскульное облако запросов</span>
					<div slot="content">Контент</div>
				</Container>
			</div>
		</div>
	</div>
</div>