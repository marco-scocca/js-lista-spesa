const lista_spesa = ['sapone', 'prosciutto', 'formaggio', 'pane'];
const ul = document.getElementById('lista-spesa');
let i = 0;
while (i < lista_spesa.length) {
    const li = document.createElement('li');
    li.innerText = lista_spesa[i];
    ul.append(li);
    i++;

}