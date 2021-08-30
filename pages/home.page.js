//import $ from "webdriverio/build/commands/browser/$";
import AuthPage from "./auth.page.js";
import BasePage from "./base.page";
import Myaccount from "./myaccount.page.js";
import RegisterPage from "./register.page.js";

const PAGE_TIMEOUT = 10000


 class HomePage extends BasePage{
    //Boton SignIn
    get btnSignIn () { return $('#header > div.nav > div > div > nav > div.header_user_info > a')};
    get campoNewsletter() { return $('#newsletter-input')}
    get btnNewsletter() {return $('#newsletter_block_left > div > form > div > button')}
    get avisoNewsletter() {return $('#columns > p')}
    
    //Click SignIn
    async clickSignIn(){
        //Click en Boton SignIn
        await this.btnSignIn.click();
       }

    //Registrar Usuario
    async registrarUsuario(correo, firstname, lastname, password, address, city, cp, phone, alias){
       //Click en Boton SignIn
       await this.clickearElemento(await this.btnSignIn);
       
       //Completo correo en Create Account
       await AuthPage.createAccount(correo);
       
       //Completo los datos del formulario
       addStep(`Completar fomulario`)
       await RegisterPage.completarFormulario("Felipe", "Machado", "Felipe123", "Rivera 123", "Salto", "50000", "0999898989", "felipeuy");

      }

    //Loguear Usuario
    async loguearUsuario(correo, password){
        //Click en Boton SignIn
        //this.clickearElemento(this.clickSignIn);
        this.clickSignIn();
       
        addStep(`Loguear usuario: ${correo}`);
       
        //Completo correo y password en Already Registered
        await AuthPage.logAccount(correo,password);
    }

    //Modificar nombre del usuario
    async modificarNombre(correo, password, nombre){
        addStep(`Modificar nombre: ${correo}`)
        //Logueo
        await this.loguearUsuario(correo, password);
        //Cambio el nombre
        await Myaccount.cambiarNombre(nombre,password);
    
    
    }

    //Suscribirse al newsletter
    async suscribeNewsletter(correo){
        addStep(`Suscribe al newslttr: ${correo}`)
        
        //Completo correo
        await this.vaciarCampoYEnviarTexto(await this.campoNewsletter,correo);
        
        //Click en el boton de suscribe
        await this.clickearElemento(await this.btnNewsletter);    
    }

    
}

export default new HomePage();