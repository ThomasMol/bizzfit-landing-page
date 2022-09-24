import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ params }) => {
	const post = await import(`../../../lib/posts/${params.slug}.md`);
	const { layout, title, date, thumbnail, body } = post.metadata;
	const content = post.default;

	return {
		layout,
		title,
		thumbnail,
		date,
		body,
		content
	};
}
