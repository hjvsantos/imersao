import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const valorInicial={
    nome:'',
    descricao:''
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valorInicial);



  function setValue(key, value){
    setValues({
      ...values, 
      [key]: value,
    })
  }

  function handleChange(e){
    setValue(
      e.target.getAttribute('name'),
      e.target.value
      )                
  }

    return(
      <PageDefault>
        <h1>Novo Artista:  {values.nome}</h1>
          <form onSubmit={function handleSubmit(e){
            e.preventDefault();
            setCategorias([
              ...categorias,
              values,
              setValues(valorInicial)
            ]);
            
          }}>
            {/* State */}
            
            <FormField 
              titulo = 'Novo Artista:'
              type = {Text}
              name = 'nome'
              value = {values.nome}
              onChange = {handleChange}
            />

            <FormField 
              titulo = 'Descrição:'
              type = {Text}
              name = 'descricao'
              value = {values.descricao}
              onChange = {handleChange}
            />

            <button>
              Cadastrar 
            </button>          
          </form>    

          <ul>
            {categorias.map((categoria, indice) => {
              return(
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })}
          </ul>

        <Link to="/">
            Home Page
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;