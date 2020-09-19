const validate = () => {
  let email = document.querySelector('input[name="email"]');
  let roll = document.querySelector('input[name="roll"]');
  let yearj = document.querySelector('input[name="yearj"]');
  let yearl = document.querySelector('input[name="yearl"]');
  let campus = document.getElementById('campus');
  let degree = document.getElementById('degree');
  let pass = document.querySelector('input[name="password"]');

  let missingEmailNotification = document.querySelector('.missing-email');
  let wrongEmailNotification = document.querySelector('.wrong-email');
  let missingPasswordNotification = document.querySelector('.missing-password');
  let missingRollNotification = document.querySelector('.missing-roll');
  let missingYearjNotification = document.querySelector('.missing-yearj');
  let missingYearlNotification = document.querySelector('.missing-yearl');
  let missingCampusNotification = document.querySelector('.missing-campus');
  let missingDegreeNotification = document.querySelector('.missing-degree');

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

  const validateRoll = () => {
    if (roll.value.length == 0) {
      missingRollNotification.style.display = 'block';
      return false;
    } else {
      missingRollNotification.style.display = 'none';
      return true;
    }
  };

  const validateYearj = () => {
    if (yearj.value.length == 0) {
      missingYearjNotification.style.display = 'block';
      return false;
    } else {
      missingYearjNotification.style.display = 'none';
      return true;
    }
  };

  const validateYearl = () => {
    if (yearl.value.length == 0) {
      missingYearlNotification.style.display = 'block';
      return false;
    } else {
      missingYearlNotification.style.display = 'none';
      return true;
    }
  };

  const validateCampus = () => {
    if (campus.value == 'Select campus') {
      missingCampusNotification.style.display = 'block';
      return false;
    } else {
      missingCampusNotification.style.display = 'none';
      return true;
    }
  };

  const validateDegree = () => {
    if (degree.value == 'Select degree') {
      missingDegreeNotification.style.display = 'block';
      return false;
    } else {
      missingDegreeNotification.style.display = 'none';
      return true;
    }
  };

  const validatePassword = () => {
    if (pass.value.length == 0) {
      missingPasswordNotification.style.display = 'block';
      return false;
    } else {
      missingPasswordNotification.style.display = 'none';
      return true;
    }
  };

  let a = validateEmail();
  let b = validatePassword();
  let c = validateRoll();
  let d = validateYearj();
  let e = validateYearl();
  let f = validateCampus();
  let g = validateDegree();

  if (a && b && c && d && e && f && g) {
    window.location.href = '../index.html';
  }
};
