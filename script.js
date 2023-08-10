const categorySelect = document.getElementById('category');
const getJokeButton = document.getElementById('get-joke');
const jokeCategory = document.getElementById('joke-category');
const jokeElement = document.getElementById('joke');

getJokeButton.addEventListener('click', fetchJoke);

async function fetchJoke() {
  const selectedCategory = categorySelect.value;
  const apiUrl = selectedCategory === 'Any'
    ? 'https://v2.jokeapi.dev/joke/Any'
    : `https://v2.jokeapi.dev/joke/${selectedCategory}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    jokeCategory.textContent = `Category: ${data.category}`;
    jokeElement.textContent = data.type === 'twopart'
      ? `${data.setup} ${data.delivery}`
      : data.joke;
  } catch (error) {
    console.error('Error fetching joke:', error);
    jokeCategory.textContent = 'An error occurred.';
    jokeElement.textContent = '';
  }
}
