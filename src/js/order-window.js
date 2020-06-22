import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/src/styles/main.scss';
import refs from './refs';

refs.orderButton.forEach(orderButton => {
  orderButton.addEventListener('click', showOrderForm);
});

function showOrderForm() {
  const instance = basicLightbox.create(
    `
    <form
    action="mailto:vladyslavbar@gmail.com"
    class="header_order-form"
  >
    <label class="order-form_laber"
      >Ваше имя<input
        name="name"
        type="input"
        class="order-form_input"
        placeholder="Имя"
    /></label>
    <label class="order-form_laber"
      >Телефон<input
        name="phone"
        type="tel"
        class="order-form_input"
        placeholder="Телефон"
    /></label>
    <label class="order-form_laber"
      >Ваши номера<input
        name="order"
        type="input"
        class="order-form_input"
        placeholder="Ваши номера"
    /></label>
    <input type="submit" class="order-form_button" value="Заказать" />
  </form>
      `,
  );
  instance.show();
}
