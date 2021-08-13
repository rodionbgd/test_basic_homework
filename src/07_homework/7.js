function addFruitUI() {
  const inputFruits = document.getElementById('input-fruit');
  const addBtn = document.getElementById('add-fruit');
  const fruits = document.getElementById('fruits');

  if (inputFruits) {
    inputFruits.addEventListener('input', () => {
      !inputFruits.value
        ? (addBtn.style.display = 'none')
        : (addBtn.style.display = 'inline');
    });
    inputFruits.addEventListener('keypress', e => {
      if (e.code === 'Enter') {
        addFruit();
      }
    });
  }
  if (addBtn) {
    addBtn.addEventListener('click', addFruit);
  }

  function addFruit() {
    if (!inputFruits.value) return;
    const p = document.createElement('p');
    p.innerHTML = inputFruits.value;
    if (fruits.children.length > 4) fruits.children[0].remove();
    inputFruits.value = '';
    addBtn.style.display = 'none';
    fruits.insertAdjacentElement('beforeend', p);
  }
}

addFruitUI();
module.exports = { addFruitUI };
