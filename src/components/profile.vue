<script lang="ts" setup>
import { ref } from 'vue';

import { profile } from '@/config';

import Social from './social.vue';

defineProps({
	msg: String
});

const count = ref(0);
</script>

<template>
	<div class="card profile container is-fluid p-6">
		<div class="info mb-2">
			<div class="photo">
				<img src="/photos/profile.jpg" :alt="profile.name" />
			</div>
			<div class="details mt-3">
				<section class="name">{{ profile.name }}</section>
				<section class="designation" v-html="profile.designation"></section>
				<section class="address">
					<a :href="profile.url" target="_blank" rel="noopener noreferrer">{{
						profile.address
					}}</a>
				</section>
				<section class="status is-size-6 has-text-weight-bold text-highlight">(Open to Work)</section>
			</div>
		</div>
		<Social />
		<div class="buttons-container mt-4">
			<router-link :to="{ name: 'Contact' }">
				<button class="button mr-2">Let's Talk</button>
			</router-link>
			<a href="/resume/M_Yousuf_CV_2026_3_5_YoE.pdf" target="_blank" download>
				<button class="button resume-btn">Download CV</button>
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.profile {
	border-radius: 16px;
	background-color: var(--card-bg-color);

	.info {
		.photo {
			img {
				border-radius: 16px;
				max-width: 100%;
				height: auto;
			}
		}
		.details {
			color: var(--text-color);
			letter-spacing: -0.01em;

			.name {
				color: var(--text-color);
				font-size: 32px;
				font-weight: 700;
			}

			.designation {
				color: var(--text-color-grey);
				font-size: 15px;
				font-weight: 450;
				line-height: 1.4;
				margin-bottom: 8px;
			}

			.address,
			a {
				color: var(--text-color-grey);
				font-size: 16px;
				font-weight: 400;
				letter-spacing: 0em;
			}
		}
	}
	.buttons-container {
		display: flex;
		flex-direction: column;
		gap: 12px;

		.button {
			width: 100%;
			margin-top: 0;
			padding: 8px 30px;
			background-color: var(--button-color);

			&.resume-btn {
				background-color: transparent;
				border: 1px solid var(--button-color);
				color: var(--text-color);
				
				&:hover {
					background-color: var(--button-color);
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		&.card {
			padding: 1.5rem !important;
		}
	}
}
</style>
