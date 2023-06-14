
document.querySelector('.contato-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

  
    alert('Obrigado, ' + nome + '! Sua mensagem foi enviada com sucesso.');
    
   
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
});
