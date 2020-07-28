import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
          <form>
            <label>
              Nome do artista:
              <input
                type = "text"
              />
            </label>

            <button>
              Cadastrar 
            </button>          
          </form>        
        <Link to="/">
            Home Page
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;