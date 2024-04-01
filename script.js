function mostrarConteudo(id) {
    var conteudos = document.querySelectorAll('.Empresa');
    for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}