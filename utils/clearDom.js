const clearDom = () => {
  document.querySelector('#joke-setup').innerHTML = '';
  document.querySelector('#joke-delivery').innerHTML = '';
  document.querySelector('#jokeBtnDiv').innerHTML = '';
  document.querySelector('#punchlineBtnDiv').innerHTML = '';
  document.querySelector('#resetBtnDiv').innerHTML = '';
};

export default clearDom;
