function inserir(valor) {
  document.getElementById('tela').value += valor;
}

function limpar() {
  document.getElementById('tela').value = '';
}

function apagar() {
  let tela = document.getElementById('tela').value;
  document.getElementById('tela').value = tela.slice(0, -1);
}

function calcular() {
  let expressao = document.getElementById('tela').value;
  try {
    let resultado = eval(expressao);
    document.getElementById('tela').value = resultado;
  } catch {
    document.getElementById('tela').value = 'Erro';
  }
}
