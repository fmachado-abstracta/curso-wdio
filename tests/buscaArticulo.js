import { expect } from 'chai';
import HomePage from '../pages/home.page';


describe('buscaArticulo', () =>{
      it('Buscar Articulo. Buscar blouse', async () => {
        //Texto a buscar
        let articulo=('BLOUSE');
     
        //Abro la página
        await HomePage.abrir('/');

        //Busco el articulo
        await HomePage.buscarArticulo(articulo);

        //Compruebo que el texto buscado coincida con la búsqueda
        await expect(await HomePage.textoBuscado.getText()).to.equal('"'+articulo+'"');

      });
});