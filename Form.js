export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  // I. Для получения всех значений формы.
  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData);
  }

  // II. Для проверки валидности формы 
  isValid() {
    return this.form.checkValidity();
  }

  // III. Для сброса значений формы.
  reset() {
    this.form.reset();
  }

  reportValidity() {
    return this.form.reportValidity();
  }
}