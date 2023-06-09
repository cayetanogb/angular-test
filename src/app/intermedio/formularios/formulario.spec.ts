import { FormBuilder } from '@angular/forms';
import { FormularioLogin } from './formulario';

describe('Formularios', () => {

  let component: FormularioLogin;

  beforeEach(() => component = new FormularioLogin(new FormBuilder()));

  it('Debe de crear un formulario con dos campos, emial y password', () => {
    expect(component.form.contains('email')).toBe(true);
    expect(component.form.contains('password')).toBe(true);
  });

  it('El email debe de ser obligatorio', () => {
    const control = component.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('El email debe de ser un correo valido', () => {
    const control = component.form.get('email');
    control?.setValue('cayetano@gmail.com');
    expect(control?.valid).toBeTruthy();
  });

});
