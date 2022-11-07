export async function fetchPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );

  const posts = await response.json();

  return posts;
}
