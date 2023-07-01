const avatar = document.querySelector('.image');
const formContact = document.querySelector('#form-contact');

avatar.addEventListener('click', () => {
  alert('Bạn đã nhấp vào ảnh đại diện');
});

formContact.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
  alert(`Bạn đã nhập:
  Email: ${formProps.email}
  Số điện thoại: ${formProps.phone}
  `);
});
