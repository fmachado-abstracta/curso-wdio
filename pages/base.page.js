//import $ from "webdriverio/build/commands/browser/$";

const PAGE_TIMEOUT = 10000

export default class BasePage {

    get barraDeBusqueda(){ return $('#search_query_top') }
    get textoBuscado() { return $('#center_column > h1 > span.lighter')}
  
    /**
    * Abrir página
    * @param {String} ruta a la cual acceder
    */
    async abrir(ruta) {
        await browser.url(`${ruta}`);
    }
 
 
    /**
     * Esperar a que un elemento sea clickeable y hacer click
     * @param {Object} elemento a clickear
     */
    async clickearElemento(elemento) {
        await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
        await elemento.click();
    }
 
 
    /**
     * Método para enviar texto a un elemento
     * @param {Object} elemento que recibirá el texto
     * @param {String} texto a envíar 
     */
    async vaciarCampoYEnviarTexto(elemento, texto){
        await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
        await elemento.clearValue();
        await elemento.click();
        await elemento.keys(texto);
    }

    /**
     * BUSCAR UN ARTICULO EN BARRA DE BUSQUEDA
     */
     async buscarArticulo(texto){
        addStep(`Buscar artículo: ${texto}`)

        await this.barraDeBusqueda.waitForClickable({ timeout: PAGE_TIMEOUT });
        await this.barraDeBusqueda.clearValue();
        await this.barraDeBusqueda.click();
        await this.barraDeBusqueda.keys(texto);
        await this.barraDeBusqueda.keys('Enter');
    }
    
    /**
    * Obtener texto del resultado de la búsqueda
    */
     async obtenerNombreResultado() {
        return await (await this.textoBuscado).getText();
    }


 

    //Devolver un elementos Web
    get resultado(){ return $('h4') }




}