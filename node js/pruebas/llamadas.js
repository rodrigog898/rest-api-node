const url = 'https://jsonplaceholder.typicode.com/posts/1';

try {
  const res = await fetch(url);
  const data = await res.json();
  console.log('Datos:', data);
} catch (error) {
  console.error('Error:', error);
}
