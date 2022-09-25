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
			text-align: right;

			@include media-lg {
				text-align: left;
			}

			// left line
			&::before {
				content: '';
				position: absolute;
				background: $primary-color;
				top: -30px;
				left: -5%;
				width: 140px;
				height: 6px;

				@include media-lg {
					top: 0px;
					left: 342px;
				}
			}

			// left circle
			&::after {
				content: '';
				position: absolute;
				width: 25px;
				height: 25px;
				right: 55%;
				top: -38px;
				background-color: $primary-color;
				border: 4px solid $primary-color;
				border-radius: 50%;
				z-index: 1;

				@include media-lg {
					top: -10px;
					right: 40px;
				}
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

			@include media-lg {
				transform: translateY(300px);
			}

			// right line
			&::before {
				content: '';
				position: absolute;
				background: $secondary-color;
				top: -30px;
				left: -5%;
				width: 150px;
				height: 6px;

				@include media-lg {
					top: 0px;
					left: -103px;
				}
			}

			// right circle
			&::after {
				content: '';
				position: absolute;
				width: 25px;
				height: 25px;
				right: 55%;
				top: -38px;
				background-color: $secondary-color;
				border: 4px solid $secondary-color;

				border-radius: 50%;
				z-index: 1;

				@include media-lg {
					left: 47px;
					top: -10px;
				}
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
