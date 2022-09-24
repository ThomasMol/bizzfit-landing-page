export async function load({ params }){
  const post = await import(`../../../lib/posts/${params.slug}.md`)
  const { layout, title, date, thumbnail, body } = post.metadata
  const content = post.default

  return {
    layout,
    title,
    thumbnail,
    date,
    body,
    content
  }
}