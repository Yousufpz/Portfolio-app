import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Home from './Home.vue';

vi.mock('@/composables', () => ({
	useVercel: () => ({ track: vi.fn() }),
	usePreload: () => ({ preloadImage: vi.fn() }),
	useAnalytics: () => ({ track: vi.fn() }),
	useNotification: () => ({ sendNotification: vi.fn() })
}));

vi.mock('vue-router', () => ({
	useRoute: () => ({ hash: '#home' }),
	useRouter: () => ({ push: vi.fn() })
}));

describe('Home.vue', () => {
	beforeEach(() => {
		setActivePinia(createPinia());
	});
	it('renders sections in the homepage', () => {
		const wrapper = mount(Home);
		expect(wrapper.html()).toContain('Transforming');
		expect(wrapper.html()).toContain('Recent Projects');
		expect(wrapper.html()).toContain('Top-Tier Tech');
		expect(wrapper.html()).toContain('My Thoughts');
	});
});

