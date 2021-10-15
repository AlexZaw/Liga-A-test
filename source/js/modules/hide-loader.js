const loader = document.querySelector('.loader');
const loaderDone = document.querySelector('.loader__done');

window.onload = function () {
  loaderDone.classList.remove('loader__done--hide');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};

const hideLoader = (evt) => {
  if (evt.type === 'click' || evt.type === 'keydown' && evt.key === 'Enter') {
    loader.classList.remove('loader--show');
    loader.removeEventListener('click', hideLoader);
    document.removeEventListener('keydown', hideLoader);
  }

};

const setLoaderListener = () =>{
  if (loader) {
    loader.addEventListener('click', hideLoader);
    document.addEventListener('keydown', hideLoader);
  }
};

export {setLoaderListener};
