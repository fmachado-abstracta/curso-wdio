import BasePage from "./base.page";
import RegisterPage from "./register.page";

const PAGE_TIMEOUT = 10000


 class AuthPage extends BasePage{
   //Campos en CREATE AN ACCOUNT 
   get campoCorreo () { return $('#email_create')};
   get btnCreateAccount () { return $('#SubmitCreate')};
   
   //Campos en ALREADY REGISTERED
   get campoCorreoLogin () { return $('#email')};
   get campoContrasena () { return $('#passwd')};
   get btnSignIn () { return $('#SubmitLogin')};

   //Create account
   async createAccount(correo){
      addStep(`Crear cuenta: ${correo}`)

      await this.campoCorreo.waitForClickable({ timeout: PAGE_TIMEOUT });
      await this.campoCorreo.clearValue();
      await this.campoCorreo.click();
      await this.campoCorreo.keys(correo);
      await this.btnCreateAccount.click();
  }

   //Log to account
   async logAccount(correo,contrasena){
      addStep(`Log account: ${correo}`)

      await this.campoCorreoLogin.waitForClickable({ timeout: PAGE_TIMEOUT });
      await this.campoCorreoLogin.clearValue();
      await this.campoCorreoLogin.click();
      await this.campoCorreoLogin.keys(correo);
      
      await this.campoContrasena.clearValue();
      await this.campoContrasena.click();
      await this.campoContrasena.keys(contrasena);       
      
      await this.btnSignIn.click();
  }

}

export default new AuthPage();