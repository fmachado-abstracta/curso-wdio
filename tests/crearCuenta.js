
import { create } from 'lodash';
import Myaccount from '../pages/myaccount.page';
import HomePage from '../pages/home.page';
import { expect } from 'chai';



describe('crearCuenta', () =>{
      it('Crear cuenta usuario', async () => {

        //Creo los datos a ingresar en un JSON
        //let datosusuario={'email':'felipe.machado@Abstracta.com.uy','firstname':'Felipe','lastname':'Machado','password':'Felipe123','address':'Rivera 123','city':'Salto','cp':'50000','phone':'099123456','alias':'fmac',};

        //Abro la Pagina
        await HomePage.abrir('/');
     
        //Registro usuario
        await HomePage.registrarUsuario("felipe.machado2@abstracta.com.uy","Felipe", "Machado","Felipe123","Rivera 123","Salto","50000","09999998","felipeuy");

        //Compruebo que la página sea MYACCOUNT
       await expect(await Myaccount.devolverTituloPagina()).to.equal("MY ACCOUNT"); 
      });
});  