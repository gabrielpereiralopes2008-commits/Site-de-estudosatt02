function enviarPorEmail() {
  const nome = document.querySelector('input[name="nome"]').value.replace(/&/g, 'e');
  const assunto = document.querySelector('input[name="assunto"]').value.replace(/&/g, 'e');
  const mensagem = document.querySelector('textarea[name="mensagem"]').value
    .replace(/&/g, 'e')
    .replace(/\n/g, '%0D%0A');

  const seuEmail = 'seuemail@exemplo.com'; // 🔴 COLOQUE SEU E-MAIL AQUI

  const corpo = 'Nome: ' + nome + '%0D%0A%0D%0AMensagem:%0D%0A%0D%0A' + mensagem;
  const assuntoFinal = encodeURIComponent(assunto || 'Nova mensagem do Site de Estudos');
  const link = 'mailto:' + seuEmail + '?subject=' + assuntoFinal + '&body=' + corpo;

  window.location.href = link;
  alert('✅ E-mail aberto!');
}


