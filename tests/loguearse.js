import HomePage from '../pages/home.page';
import Myaccount from '../pages/myaccount.page';
import { expect } from 'chai';

describe('loguearse', () =>{
      it('Loguearse con usuario existente', async () => {
        //Usuario y contraseña
        let usuario=('felipe.machado@abstracta.com.uy');
        let pass=('Felipe123');
        
        //Abro la página
        await HomePage.abrir('/');

        //Logueo Usuario
        await HomePage.loguearUsuario(usuario,pass);
        
        //Compruebo que estoy en pagina My Account
        await expect(await Myaccount.devolverTituloPagina()).to.equal('MY ACCOUNT');
        
        


      });
});