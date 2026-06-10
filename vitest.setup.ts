// Mock IntersectionObserver for JSDOM under Vitest testing environment
global.IntersectionObserver = class IntersectionObserver {
	callback: any;
	options: any;

	constructor(callback: any, options?: any) {
		this.callback = callback;
		this.options = options;
	}

	observe(target: any) {}
	unobserve(target: any) {}
	disconnect() {}
};
