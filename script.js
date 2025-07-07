document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contatoForm');
  const resultado = document.getElementById('resultado');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      resultado.textContent = 'Todos os campos são obrigatórios!';
      resultado.style.color = 'red';
    } else {
      resultado.textContent = 'Mensagem enviada com sucesso!';
      resultado.style.color = 'green';
      form.reset();
    }
  });

  // Efeito hover no menu
  $('.navbar li a').hover(
    function () { $(this).css('color', '#87CEEB'); },
    function () { $(this).css('color', '#20B2AA'); }
  );
});
