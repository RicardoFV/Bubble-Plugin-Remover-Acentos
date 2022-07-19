function(instance, properties, context) {

  // verifico se esta vazio
  if (properties.campo != "" || properties.campo != null) {
      // inicializa a variavel
      let novo = "" 
      // retiro o caractere especial
      novo = properties.campo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      // realizo o retorno com state
      instance.publishState('resposta', novo)
      // dispara o evento
      instance.triggerEvent('alterado')
  }	

}