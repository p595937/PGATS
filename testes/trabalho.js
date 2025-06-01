// trabalho.js

// 1. geradorDeTagsDeIdentificacao - CORRETO
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// 2. verificarSePodeSerAdotado - CORRETO
export function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte.trim() === 'M';
}


// 3. calcularConsumoDeRacao
export function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

// 4. decidirTipoDeAtividadePorPorte - CORRETO
export function decidirTipoDeAtividadePorPorte(porte) {
  const p = porte.trim().toLowerCase();
  if (p === 'pequeno') return 'brincar dentro de casa';
  if (p === 'médio') return 'caminhada moderada';
  return 'atividade intensa';
}

// 5. buscarDadoAsync - CORRETO
export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 100);
  });
}