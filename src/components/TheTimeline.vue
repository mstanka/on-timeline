<script setup lang="ts">
	import { ref } from 'vue';
	import items from '../data/timeline.json';
	import TheTimelineItem from './TheTimelineItem.vue';

	const leftItem = ref('item__left');
	const rightItem = ref('item__right');
</script>

<template>
	<div class="timeline">
		<ul class="timeline__container">
			<li v-for="(item, index) in items" :key="index" class="item__container">
				<TheTimelineItem :item="item" :class="[index % 2 === 0 ? rightItem : leftItem]" class="item" />
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
	}
</style>
