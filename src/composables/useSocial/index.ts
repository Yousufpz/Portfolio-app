import axios from 'axios';

import { type SocialSchema, socialSchema } from '@/stores/thoughts/schema';
import { social } from '@/mocks';

export function useSocial() {
	async function getSocialData(): Promise<SocialSchema> {
		const apiUrl = import.meta.env.VITE_API_URL;
		if (!apiUrl) {
			return socialSchema.parse(social);
		}
		try {
			const response = await axios.get(
				`${apiUrl}/social/posts`
			);

			const { data } = response.data;

			return socialSchema.parse(data);
		} catch (error) {
			console.error('Error fetching social data, falling back to mock data:', error);
			return socialSchema.parse(social);
		}
	}

	return {
		getSocialData
	};
}
