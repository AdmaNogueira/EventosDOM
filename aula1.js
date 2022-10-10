const btn1 = document.getElementById('btn1');
const paragraph = document.getElementById('paragraph')
// ✅ Change button text on click
btn1.addEventListener('click', function handleClick() {
  const initialText = 'Click me';

  btn1.innerHTML = `<span style="background-color: green">Abrir<span>`;});

  btn1.addEventListener('click', function() {
    paragraph.textContent='Estamos Abertos!';
});



const btn2 = document.getElementById('btn2');
const paragraph2 = document.getElementById('paragraph')
// ✅ Change button text on click
btn2.addEventListener('click', function handleClick() {
  const initialText = 'Click me';

  btn2.innerHTML = `<span style="background-color: red">Fechar<span>`;});

  btn2.addEventListener('click', function() {
      paragraph2.textContent='Estamos Fechados!';
  });

