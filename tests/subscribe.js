import HomePage from '../pages/home.page';
import { expect } from 'chai';
import DATOS from '../datos/usuarios';


describe('subscribe', () =>{
    DATOS.forEach(({correo}) => {
        it(`Debería buscar ${correo}`, async () => {
            //Usuario y contraseña
            //esto para ejecutarlo sin DataDriven
            //let correo=('felipe.machado10@abstracta.com.uy'); //OJO!! Cambiarlo cada vez que se ejecute el test.
          
    
            //Abro la página
            await HomePage.abrir('/');
    
           //Suscribo al newsletter
           await HomePage.suscribeNewsletter(correo);
          
           //Compruebo mensaje OK Newsletter
           await expect(await HomePage.avisoNewsletter.getText()).to.equal("Newsletter : You have successfully subscribed to this newsletter."); 
          }); 

          //TEST DE REGRESION VISUAL
          it('Comparación de imágenes suscribe', async () => {
            await HomePage.abrir('/');

            await (await $("#newsletter_block_left")).waitForDisplayed();
            expect(
                await browser.checkElement(await $("#newsletter_block_left"), "wdio-headerContainer", {
                /* opciones de configuración para el elemento */
                }),
                "Error: la barra de suscribe no coincide con la original"
            ).equal(0);

         });
    
    
    }); 
    
});
