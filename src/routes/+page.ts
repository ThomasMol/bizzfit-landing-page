export const prerender = true;
import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ params }) => {
	const allPostFiles = import.meta.glob('../lib/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);
  
  const recentPosts = iterablePostFiles.slice(0,3);

	const allPosts = await Promise.all(
		recentPosts.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(13, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);
	
	return allPosts;
};
