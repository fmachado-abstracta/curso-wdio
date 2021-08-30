import BasePage from '../pages/base.page';
import HomePage from '../pages/home.page';
import Myaccount from '../pages/myaccount.page';
import { expect } from 'chai';

describe('cambiarInfo', () =>{
      it('Cambiar info de usuario', async () => {
        //Usuario y contraseña
        let usuario=('felipe.machado@abstracta.com.uy');
        let pass=('Felipe123');
        let nuevoNombre=('FelipeMod');

        //Abro la página
        await HomePage.abrir('/');
        
        //Modificar nombre del usuario
        await HomePage.modificarNombre(usuario,pass,nuevoNombre);

        //Compruebo cambio exitoso
        await expect(await Myaccount.avisoModifOK.getText()).to.equal("Your personal information has been successfully updated."); 


      });
});