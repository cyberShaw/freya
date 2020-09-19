const validate = () => {
  let email = document.querySelector('input[name="email"]');
  let password = document.querySelector('input[name="password"]');

  let missingEmailNotification = document.querySelector('.missing-email');
  let wrongEmailNotification = document.querySelector('.wrong-email');

  let missingPasswordNotification = document.querySelector('.missing-password');

  const validateEmail = () => {
    if (email.value.length == 0) {
      missingEmailNotification.style.display = 'block';
      wrongEmailNotification.style.display = 'none';
      return false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      missingEmailNotification.style.display = 'none';
      wrongEmailNotification.style.display = 'block';
      return false;
    } else {
      missingEmailNotification.style.display = 'none';
      wrongEmailNotification.style.display = 'none';
      return true;
    }
  };

  const validatePassword = () => {
    if (password.value.length == 0) {
      missingPasswordNotification.style.display = 'block';
      return false;
    } else {
      missingPasswordNotification.style.display = 'none';
      return true;
    }
  };

  let a = validateEmail();
  let b = validatePassword();
  if (a && b) {
    window.location.href = 'dashboard.html';
  }
};
