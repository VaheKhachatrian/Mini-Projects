function throttle(func, delay) {
    let timer = null;
    return function() {
      if (!timer) {
        timer = setTimeout(() => {
          func.apply(this, arguments);
          timer = null;
        }, delay);
      }
    };
  }

  function saveFormData() {
    const formData = new FormData(document.getElementById('myForm'));
    const formDataObj = {};
    for (const [key, value] of formData.entries()) {
      formDataObj[key] = value;
    }
    localStorage.setItem('formData', JSON.stringify(formDataObj));
  }

  function restoreFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const formDataObj = JSON.parse(savedData);
      const form = document.getElementById('myForm');
      for (const key in formDataObj) {
        if (formDataObj.hasOwnProperty(key)) {
          form.elements[key].value = formDataObj[key];
        }
      }
    }
  }

  function printLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      alert(`${key}: ${value}`);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    restoreFormData(); 
    const form = document.getElementById('myForm');
    const submitButton = document.getElementById('submitButton');
    const printButton = document.getElementById('printButton');
    const throttledSave = throttle(saveFormData, 1000); 
    
    form.addEventListener('input', () => {
      throttledSave();
    });

    submitButton.addEventListener('click', () => {
      saveFormData();
      alert('Form data submitted successfully!');
    });

    printButton.addEventListener('click', () => {
      printLocalStorage();
    });
  });