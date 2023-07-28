function whatsapp() {
    var nome = document.getElementById('nome').value;
    var mensagem = document.getElementById('comentario').value;
    var newnome = '';

    if (nome.length > 0) {
        newnome = '. Me chamo ' + nome;
    }
    newnome += '.';
    var url =
        'https://wa.me/11993602212?text=' +
        'Olá, Matheus' +
        newnome +
        ' ' +
        mensagem;

    window.open(url, '_blank').focus();
}

let mybutton = document.getElementById('toTop');
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
    ) {
        document.getElementById('toTop').classList.remove('hidden');
    } else {
        document.getElementById('toTop').classList.add('hidden');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
