// Exemplo do JavaScript inicial para desativar os envios de formulários se houver campos inválidos
(function () {
  'use estrito'

  window.addEventListener ('load', function () {
    // Busque todos os formulários nos quais queremos aplicar estilos de validação personalizados do Bootstrap
    var forms = document.getElementsByClassName ('needs-validation')

    // Faz um loop sobre eles e impede o envio
    Array.prototype.filter.call (forms, function (form) {
      form.addEventListener ('submit', function (event) {
        if (form.checkValidity () === false) {
          event.preventDefault ()
          event.stopPropagation ()
        }
        form.classList.add ('was-validated')
      }, false)
    })
  }, false)
} ()
