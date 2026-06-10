import axios from 'axios';
import { describe, expect, it, vi, beforeEach } from 'vitest';

import { social } from '@/mocks';

import { useSocial } from '.';

vi.mock('axios');

describe('useSocial', () => {
	beforeEach(() => {
		import.meta.env.VITE_API_URL = 'https://api.example.com';
	});

	it('should fetch and parse social data', async () => {
		(axios.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
			data: { data: social }
		});

		const { getSocialData } = useSocial();
		const result = await getSocialData();

		expect(result).toBeDefined();
		expect(axios.get).toHaveBeenCalled();
	});

	it('should handle errors gracefully by returning mock data', async () => {
		(axios.get as unknown as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error('fail'));
		const { getSocialData } = useSocial();
		const result = await getSocialData();

		expect(result).toBeDefined();
		expect(result.blogs).toBeDefined();
		expect(result.blogs.length).toBeGreaterThan(0);
	});
});

