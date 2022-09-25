<script setup lang="ts">
	import { TimelineItem } from '../domain/TimelineItem';

	defineProps<{
		item: TimelineItem;
	}>();
</script>

<template>
	<div>
		<h2 class="item__title">{{ item.name.first }} {{ item.name.last }}</h2>
		<div>{{ item.about }}</div>
		<div class="item__registered">{{ item.registered }}</div>
		<div v-for="tag in item.tags" :key="tag" class="item__tag">
			{{ tag }}
		</div>
	</div>
</template>

<script></script>

<style lang="scss">
	@import '../styles/main.scss';
	.item {
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
			display: inline-block;
			color: $light-color;
			padding: 5px 12px;
			border-radius: 10px;
			margin: 5px;
		}
	}
</style>
