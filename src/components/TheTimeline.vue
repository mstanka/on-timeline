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
					<div class="item__title">{{ item.name.first }} {{ item.name.last }}</div>
					<div>{{ item.registered }}</div>
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
			grid-gap: 50px;
			flex-direction: column;
			grid-template-columns: repeat(2, auto);

			// bottom circle
			&::before {
				content: '';
				position: absolute;
				width: 24px;
				height: 24px;
				right: 292px;
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
				right: 292px;
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
			color: $primary-color;
			text-align: left;

			// left line
			&::before {
				content: '';
				position: absolute;
				background: $secondary-color;
				top: 0px;
				left: 220px;
				width: 80px;
				height: 6px;
			}

			// left circle
			&::after {
				content: '';
				position: absolute;
				width: 25px;
				height: 25px;
				right: 50px;
				background-color: $dark-color;
				border: 4px solid $dark-color;
				top: -10px;
				border-radius: 50%;
				z-index: 1;
			}
		}

		&__left {
			left: 0;
			color: $secondary-color;
			text-align: right;
			transform: translateY(50px);

			// right line
			&::before {
				content: '';
				position: absolute;
				background: $primary-color;
				top: 0px;
				right: 220px;
				width: 80px;
				height: 6px;
			}

			// right circle
			&::after {
				content: '';
				position: absolute;
				width: 25px;
				height: 25px;
				left: 45px;
				background-color: $dark-color;
				border: 4px solid $dark-color;
				top: -10px;
				border-radius: 50%;
				z-index: 1;
			}
		}

		&__title {
			font-weight: bold;
		}
	}
</style>
