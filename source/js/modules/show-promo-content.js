const promo = document.querySelector('.promo');
const promoContent = document.querySelector('.promo__info');

const showPromoContent = () =>{
  if (promoContent) {
    promoContent.classList.toggle('promo__info--show');
  }
};

const setShowContentListener = () => {
  if (promo) {
    promo.addEventListener('click', showPromoContent);
  }
};

export {setShowContentListener};
