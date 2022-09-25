<script setup lang="ts">
	import { ref } from 'vue';
	import items from '../data/timeline.json';

	const leftItem = ref('item__left');
	const rightItem = ref('item__right');
</script>

<template>
	<div class="timeline">
		<ul class="timeline__container">
			<li v-for="(item, index) in items" :key="index" class="item__container">
				<div :class="[index % 2 === 0 ? rightItem : leftItem]" class="item">
					<h2 class="item__title">{{ item.name.first }} {{ item.name.last }}</h2>
					<div>{{ item.about }}</div>
					<div class="item__registered">{{ item.registered }}</div>
					<div v-for="tag in item.tags" :key="tag" class="item__tag">
						<div>{{ tag }}</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	@import '../styles/main.scss';
	.timeline {
		position: relative;
		max-width: 1200px;
		margin: 0 auto;
		padding: 100px 0;

		// vertical main line
		&::after {
			content: '';
			position: absolute;
			width: 6px;
			background-color: $dark-color;
			top: 0;
			bottom: 0;
			right: 50%;
			margin-right: -3px;
		}

		&__container {
			position: relative;
			display: grid;
			grid-gap: 190px;
			flex-direction: column;
			grid-template-columns: repeat(2, auto);

			// bottom circle
			&::before {
				content: '';
				position: absolute;
				width: 24px;
				height: 24px;
				right: 469px;
				background-color: white;
				border: 4px solid $dark-color;
				bottom: -105px;
				border-radius: 50%;
				z-index: 1;
			}

			// top circle
			&::after {
				content: '';
				position: absolute;
				width: 24px;
				height: 24px;
				right: 469px;
				background-color: white;
				border: 4px solid $dark-color;
				top: -105px;
				border-radius: 50%;
				z-index: 1;
			}
		}
	}

	.item {
		&__container {
			list-style: none;
			position: relative;
			margin-top: 25px;
		}

		&__right {
			left: 50%;
			color: $dark-color;
			text-align: left;

			// left line
			&::before {
				content: '';
				position: absolute;
				background: $primary-color;
				top: 0px;
				left: 342px;
				width: 140px;
				height: 6px;
			}

			// left circle
			&::after {
				content: '';
				position: absolute;
				width: 25px;
				height: 25px;
				right: 50px;
				background-color: $primary-color;
				border: 4px solid $primary-color;
				top: -10px;
				border-radius: 50%;
				z-index: 1;
			}

			& > .item__title {
				color: $primary-color;
			}

			& > .item__tag {
				background-color: $primary-color;
			}
		}

		&__left {
			left: 0;
			color: $dark-color;
			text-align: right;
			transform: translateY(190px);

			// right line
			&::before {
				content: '';
				position: absolute;
				background: $secondary-color;
				top: 0px;
				right: 328px;
				width: 150px;
				height: 6px;
			}

			// right circle
			&::after {
				content: '';
				position: absolute;
				width: 25px;
				height: 25px;
				left: 50px;
				background-color: $secondary-color;
				border: 4px solid $secondary-color;
				top: -10px;
				border-radius: 50%;
				z-index: 1;
			}

			& > .item__title {
				color: $secondary-color;
			}

			& > .item__tag {
				background-color: $secondary-color;
			}
		}

		&__title {
			font-weight: bold;
			margin-top: -10px;
			padding-bottom: 10px;
		}

		&__registered {
			padding: 20px 0 10px;
			font-weight: bold;
		}

		&__tag {
			display: inline-flex;
			color: $light-color;
			padding: 5px 12px;
			border-radius: 10px;
			margin: 5px;
		}
	}
</style>
