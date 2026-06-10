<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Tooltip } from '@/components';
import { nav } from '@/config';

const isHovering = ref<Record<string, boolean>>({});
const activeSection = ref('#home');
const router = useRouter();
const route = useRoute();

function handleNavClick(path: string) {
	activeSection.value = path;
	router.push('/' + path);
	
	const id = path.replace('#', '');
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
}

// Track active section on scroll
let observer: IntersectionObserver | null = null;

onMounted(() => {
	if (route.hash) {
		activeSection.value = route.hash;
		setTimeout(() => {
			const id = route.hash.replace('#', '');
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}, 300);
	}

	observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const id = entry.target.getAttribute('id');
				if (id) {
					activeSection.value = '#' + id;
				}
			}
		});
	}, {
		rootMargin: '-30% 0px -50% 0px' // triggers active highlight when section is centered
	});

	// Observe all section containers
	const sections = ['home', 'projects', 'tools', 'experience', 'thoughts', 'faq', 'contact'];
	sections.forEach((id) => {
		const el = document.getElementById(id);
		if (el) observer?.observe(el);
	});
});

onUnmounted(() => {
	observer?.disconnect();
});

watch(() => route.hash, (newHash) => {
	if (newHash) {
		activeSection.value = newHash;
	}
});
</script>

<template>
	<nav class="topnav columns navbar is-inline-flex is-vcentered px-2">
		<div
			class="column is-narrow is-flex is-justify-content-center pr-1 py-0"
			:key="item.title"
			v-for="item in nav"
		>
			<a
				class="link"
				:href="item.path"
				@click.prevent="handleNavClick(item.path)"
				@mouseenter="isHovering[item.title] = true"
				@mouseleave="isHovering[item.title] = false"
			>
				<span
					class="icon is-clickable"
					:class="{ 'is-active': activeSection === item.path }"
				>
					<i :class="item.icon"></i>
				</span>
			</a>
			<Tooltip
				class="is-hidden-mobile"
				:content="item.title"
				v-if="isHovering[item.title]"
			/>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.topnav {
	top: 40px;
	z-index: 9;
	transform: translate(-50%);
	position: absolute;
	border-radius: 12px;

	i {
		color: var(--text-color);
		font-size: var(--icon-size);
	}

	.tooltip {
		bottom: -25px;
		position: absolute;
	}

	@media screen and (max-width: 768px) {
		position: fixed;
		transform: translate(-46%);
	}
}
</style>
