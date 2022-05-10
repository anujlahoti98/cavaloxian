// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  var input = document.querySelector("#counflag");
  
  intlTelInput(input, {
    initialCountry: "IN",
    customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
      validationCustom03.setAttribute("placeholder",selectedCountryPlaceholder)
      console.log(selectedCountryPlaceholder)
      console.log(selectedCountryData)
      document.querySelector("#councode").innerHTML= "<h6 style='color:#fff'>+"+selectedCountryData.dialCode+"</h6>";
      return "e.g. " + selectedCountryPlaceholder;
    },
  });