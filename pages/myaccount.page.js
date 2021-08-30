//import $ from "webdriverio/build/commands/browser/$";
import click from "webdriverio/build/commands/element/click";
import BasePage from "./base.page";
import RegisterPage from "./register.page";

const PAGE_TIMEOUT = 10000


 class Myaccount extends BasePage{
    get campoPage(){return $('#center_column > h1')}
    get campoNombre(){return $('#firstname')}
    get botonMyPersonalInfo() {return $('#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a')}
    get botonSave() {return $('#center_column > div > form > fieldset > div:nth-child(11) > button')}
    get campoPasswd() {return $('#old_passwd')}
    get avisoModifOK() {return $('#center_column > div > p')}

    

    /**
    * Devuelve el texto del titulo de la pagina MyAccount
    */
    async devolverTituloPagina(){
        return (await this.campoPage).getText();
    }

     //Cambiar nombre del usuario
    async cambiarNombre(firstname, password){
        //Click en MyPersonalInfo
        await this.clickearElemento(this.botonMyPersonalInfo);
        //Cambio el nombre
        await this.vaciarCampoYEnviarTexto(this.campoNombre,firstname);
        //Completo contraseña
        await this.vaciarCampoYEnviarTexto(this.campoPasswd,password);
        //Click en save
        await this.clickearElemento(this.botonSave);
    }


    //Comprobar cambio datos exitoso
    async cambioExitoso(){
        return (await $('#center_column > div > p')).getText();
    }





}

export default new Myaccount();