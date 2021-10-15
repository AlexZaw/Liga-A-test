const loader = document.querySelector('.loader');
const loaderDone = document.querySelector('.loader__done');


window.onload = function () {
  if (loaderDone) {
    loaderDone.classList.remove('loader__done--hide');
    loaderDone.classList.add('loader__done--animation');
  }
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
