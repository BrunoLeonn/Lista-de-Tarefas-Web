function add() {
    let li = document.createElement('LI');
    let input_value = document.form_main.task.value;
    let input_text = document.createTextNode(input_value);

    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = "";

    createCloseButton(li);
}
//      # Função add #

/* 
A função add()cria um novo elemento(tarefa) na lista.

Dentro da função add()é feito uma chamada para a função createCloseButton()que 
é a função que vou criar agora.
*/

function createCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = () => span.parentElement.style.display = "none";
}
//          # Função createCloseButton #

/* Na função createCloseButton 
criamos um span com um x, que ao clicar o elemento é escondido.

Como a lista já esta com alguns itens vou criar um laço para 
percorrer todos os li e adicionar o botão de fechar.

Por fim, vou adicionar um evento de click em todos os li ,
e ao clicar adicionar a classe checked. */

document.querySelectorAll('li').forEach(createCloseButton);

document.querySelector('ul').addEventListener('click',(e) => {
    if (e.target.tagName === 'LI')
    e.target.classList.toggle('checked');
});
//          # Loops para os LI #