import { Slider } from "./slider";

window.addEventListener("load", () => {
  try {
    formValidation()
  } catch (err) {console.error(err) }
  new Slider();
});

function formValidation() {
  const form = document.querySelector("[name=form]"),
    submit: HTMLInputElement = document.querySelector("[name=submit]")
  $(form).validate({

    rules: {
      "full-name": {
        required: true,
      },
      "first-name": {
        required: true,
      },
      "last-name": {
        required: true,
      },
      "email": {
        required: true,
        email: true
      },
      "current-email": {
        required: true,
        email: true,
      },
      "message": {
        required: true
      },
      "current-password": {
        required: true,
      },
      "new-password": {
        required: true,
      },

      "confirmPassword": {
        required: true,
        equalTo: document.querySelector("[name=new-password]")

      },
    },
    messages: {
      "full-name": {
        required: function() {
          toastr.error('Full Name field is required', 'Error')
        },
      },
      "first-name": {
        required: function() {
          toastr.error('First Name field is required', 'Error')
        },
      },
      "last-name": {
        required: function() {
          toastr.error('Last Name field is required', 'Error')
        },
      },
      "email": {
        required: function() {
          toastr.error('Email field is required', 'Error')

        },
        email: function() {
          toastr.error('Not a valid email', 'Error')
        }
      },
      "current-email": {
        required: function() {
          toastr.error('Email field is required', 'Error')

        },
        email: function() {
          toastr.error('Not a valid email', 'Error')
        },
      },
      "message": {
        required: function() {
          toastr.error('Message field is required', 'Error')
        },
      },
      "current-password": {
        required: function() {
          toastr.error('password field is required', 'Error')
        },
        equalTo: function() {
          toastr.error('Password or Email is incorrect', 'Error')
        }
      },
      "new-password": {
        required: function() {
          toastr.error('password field is required', 'Error')
        },
      },
      "confirmPassword": {
        required: function() {
          toastr.error('confirm password field is required', 'Error')
        },
        equalTo: function() {
          toastr.error('Passwords do not match', 'Error')
        }
      },
    },
    submitHandler: function(form, event) {
      event.preventDefault();

      if (submit.value.toLowerCase() == "login")
        toastr.success("Welcome back, Joe!", 'Success')
      else if (submit.value.toLowerCase() == "register")
        toastr.success("Welcome to Gondola Tours, Joe!", 'Success')
      else if ((submit.value.toLowerCase() == "send message"))
        toastr.success("Your message have been sent and we'll get to you back to shortly", 'Success')
      else
        toastr.success("You must have done something right...", 'Success')

      form.reset()

      return false;
    },
    errorPlacement: function (form, event: any) {
      event.preventDefault();
      return false;
    }
  });
}



toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": true,
  "progressBar": true,
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": 3000,
  "hideDuration": 1000,
  "timeOut": 1000,
  "extendedTimeOut": 1000,
  "showEasing": "swing",
  "hideEasing": "swing",
  "showMethod": "slideDown",
  "hideMethod": "slideUp"
}
