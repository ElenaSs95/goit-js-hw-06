const itemsRef = document.querySelectorAll('.item');
console.log('Number of categories: ', itemsRef.length);

itemsRef.forEach(item => {
  const titleRef = item.querySelector('h2');
  const listRef = item.querySelector('ul');

  console.log('Category: ', titleRef.textContent);
  console.log('Elements: ', listRef.children.length);
});
