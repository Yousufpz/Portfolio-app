<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { Introduction } from '@/components';
import Projects from './Projects.vue';
import Tools from './Tools.vue';
import Experience from './Experience.vue';
import Thoughts from './Thoughts.vue';
import Contact from './Contact.vue';

const FAQ = defineAsyncComponent(() => import('@/components/common/faq.vue'));
</script>

<template>
	<section class="single-page-layout">
		<div id="home" class="section-container">
			<Introduction />
		</div>
		<hr class="section-divider" />
		<div id="experience" class="section-container">
			<Experience />
		</div>
		<hr class="section-divider" />
		<div id="projects" class="section-container">
			<Projects />
		</div>
		<hr class="section-divider" />
		<div id="tools" class="section-container">
			<Tools />
		</div>
		<hr class="section-divider" />
		<div id="thoughts" class="section-container">
			<Thoughts />
		</div>
		<hr class="section-divider" />
		<div id="faq" class="section-container">
			<FAQ />
		</div>
		<hr class="section-divider" />
		<div id="contact" class="section-container pb-6">
			<Contact />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.single-page-layout {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.section-container {
	scroll-margin-top: 100px; /* offset for fixed/sticky headers */
}

.section-divider {
	border: 0;
	height: 1px;
	background: linear-gradient(to right, transparent, var(--text-highlight), transparent);
	margin: 2rem 0;
	opacity: 0.2;
}

::v-deep(.tools) {
	margin-top: 0rem;
}

::v-deep(.tools .headline .heading),
::v-deep(.projects .headline .heading),
::v-deep(.thoughts .headline .heading),
::v-deep(.experience .headline .heading) {
	font-size: 58px !important;
	font-weight: 500 !important;
	text-shadow: 0.03em 0 0 currentColor;

	@media screen and (max-width: 768px) {
		font-size: var(--h2-mobile-size) !important;
	}
}
</style>
