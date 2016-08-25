export class LoginForm {
  constructor() {
    this.form = {};
    this.form.email = "";
    this.form.password = "";
  }

  submit() {
    console.log(this.form);
  }
}
