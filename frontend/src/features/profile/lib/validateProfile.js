export default function validateProfile({ nickname, phone, email }) {
  const errors = {};

  if (!nickname.trim()) {
    errors.nickname = 'Нікнейм обовʼязковий';
  }

  if (!phone.trim()) {
    errors.phone = 'Телефон обовʼязковий';
  } else if (!/^\+?\d{10,15}$/.test(phone)) {
    errors.phone = 'Невірний формат телефону';
  }

  if (!email.trim()) {
    errors.email = 'Емейл обовʼязковий';
  } else if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email)) {
    errors.email = 'Невірний формат емейлу';
  }

  return errors;
}