async function(properties, context) { 
  // inicializa a variavel
  var campo = ""
  // recebo o texto
  campo = properties.campo
  // verifico se esta vazio
  if (campo != "" || campo != null) {
      // inicializa a variavel
      let novo = "" 
      // retiro o caractere especial
      novo = campo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      // realizo o retorno
      return {
          resposta : novo.trim()
      }
  }

}