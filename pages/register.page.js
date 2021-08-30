//import $ from "webdriverio/build/commands/element/$"
//import $ from "webdriverio/build/commands/browser/$";
import BasePage from "./base.page";

const PAGE_TIMEOUT = 10000

class RegisterPage extends BasePage {
  get campoPage(){return $('#center_column > h1')}
  get btnRegister(){return $('#submitAccount')}


  //ELEMENTOS PERSONAL INFORMATION
  get campoFirstname(){ return $('#customer_firstname') }
  get campoLastname(){ return $('#customer_lastname') }
  //get campoemail(){ return $('#email') }  YA LO TRAE DE LA PAGINA ANTERIOR
  get campoPassword(){ return $('#passwd') }

  //ELEMENTOS YOUR ADDRESS
  get campoFirstnameAddress(){ return $('#firstname') }
  get campoLastnameAddress(){ return $('#lastname') }
  get campoAddressAddress(){ return $('#address1') }
  get campoCity(){ return $('#city') }
  get campoState(){ return $('#id_state')}
  get campoCP(){ return $('#postcode') }
  get campoCountry(){ return $('#id_country')}
  get campoPhone(){ return $('#phone_mobile') }
  get campoAlias(){ return $('#alias') }
  
  //Función completa todos los datos del formulario
  async completarFormulario(firstname, lastname, password, address, city, cp, phone, alias){
    //Completo los datos del formulario
    await this.vaciarCampoYEnviarTexto(await this.campoFirstname,firstname);
    await this.vaciarCampoYEnviarTexto(await this.campoLastname,lastname);
    //Correo lo completa automatico
    await this.vaciarCampoYEnviarTexto(await this.campoPassword,password);
   
    //Your Address
    // await createaccount.vaciarCampoYEnviarTexto('#firstname',firstname); YA LO COMPLETA AUTOM
    // await createaccount.vaciarCampoYEnviarTexto('#lastname',lastname);  YA LO COMPLETA AUTOM
    await this.vaciarCampoYEnviarTexto(await this.campoAddressAddress,address);
    await this.vaciarCampoYEnviarTexto(await this.campoCity,city);
    await this.campoState.selectByIndex(2);
    await this.vaciarCampoYEnviarTexto(await this.campoCP,cp);
    await this.campoCountry.selectByIndex(1);
    await this.vaciarCampoYEnviarTexto(await this.campoPhone,phone);
    await this.vaciarCampoYEnviarTexto(await this.campoAlias,alias);

    //Click en botón Register
    await this.clickearElemento(await this.btnRegister);
  }
  
  
  /**
  * Completa un campo con texto
  */
  async completarCampo(elemento, texto){
    await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
    await elemento.clearValue();
    await elemento.click();
    await elemento.keys(texto);
  }

/**
  * Selecciona una opción en combobox INCOMPLETO!!
  */
 async seleccionaCombo(elemento, valor){
  await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
  await elemento.clearValue();
  await elemento.click();
  await elemento.keys(texto);
}

 



}
export default new RegisterPage();

