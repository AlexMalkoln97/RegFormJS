const form = document.getElementById('form')
const username = document.getElementById('username')
const surname = document.getElementById('surname')
const password = document.getElementById('password')
const passwordCheck = document.getElementById('password-check')
const email = document.getElementById('email')
const birthday = document.getElementById('birthday')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  inputCheck()
})

function inputCheck() {
  // принимаем значения из инпутов
  // с помощью trim() удаляем пробелы при вводе данных
  const usernameValue = username.value.trim() 
  const surnameValue = surname.value.trim()
  const passwordValue = password.value.trim()
  const passwordCheckValue = passwordCheck.value.trim()
  const emailValue = email.value.trim()
  const birthdayValue = birthday.value .trim()

  if (usernameValue === '') {
    // мы выводим ошибку и добавляем класс error
    errorSet(username, 'Имя введено некорректно')
  } else if (!usernameValidCheck(username)) {
    errorSet(username, 'Имя невалидно')
  } else {
    // все успешно, мы добавляем класс success
    successSet(username)
  }

  if (surnameValue === '') {
    errorSet(surname, 'фамилия введена некорректно')
  } else if (!surnameValidCheck(username)){
    errorSet(surname, 'Фамилия невалидна')
  } else {
    successSet(surname)
  }

  if (emailValue === '') {
    errorSet(email, 'email введен некорректно')
  } else if (!emailValidCheck(emailValue)) {
    errorSet(email, 'email невалидный')
  } else {
    successSet(email)
  }

  if (passwordValue === '') {
    errorSet(password, 'пароль введен некорректно')
  } else if (!passwordValidCheck(password)) {
    errorSet(password, 'пароль должен быть более 8 символов, содержать минимум одну цифру, по одной заглавной и строчную буквы и один символ.')
  } else {
    successSet(password)
  }

  if (passwordCheckValue === '') {
    errorSet(passwordCheck, 'пароль подтвержден некорректно')
  } else if (passwordValue !== passwordCheckValue) {
    errorSet(passwordCheck, 'пароли не совпадают')
  } else {
    successSet(passwordCheck)
  }

  if (birthdayValue == '' || birthdayValue == null) {
    errorSet(birthday, 'укажите возраст')
  }
  else if (!isLegalAge(birthday)) {
    errorSet(birthday, 'возраст меньше 18 лет')
  } else {
    successSet(birthday)
  }
}

function errorSet(input, message) {
  const formControl = input.parentElement // в formControl лежит .form-control
  const small = formControl.querySelector('small')

  small.innerText = message
  formControl.className = 'form-control error'
}

function successSet(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function usernameValidCheck(username) {
  let regular = /^[A-Za-z-А-Яа-я]{0,20}$/

  if (username.value.match(regular)) {
    return true
  } else {
    return false
  }
}

function surnameValidCheck(surname) {
  let regular = /^[A-Za-z-А-Яа-я]{0,20}$/

  if (surname.value.match(regular)) {
    return true
  } else {
    return false
  }
}

function emailValidCheck(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function passwordValidCheck(password) {
  let regular = /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/

  if (password.value.match(regular)) {
    return true
  } else {
    return false
  }
}

function isLegalAge(birthday) {
  const bday = birthday.value
  const birthdayDate = new Date(bday.replace( /(\d{4})-(\d{2})-(\d{2})/, "$3/$1/$2/"));
  birthdayDate.setFullYear(birthdayDate.getFullYear() + 18);
  return new Date() > birthdayDate;
}



