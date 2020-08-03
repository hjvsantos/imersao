/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-named-as-default-member
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valorInicial = {
    nome: '',
    descricao: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valorInicial);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Novo Artista:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          values,
          setValues(valorInicial),
        ]);
      }}
      >
        {/* State */}

        <FormField
          titulo="Novo Artista:"
          type={Text}
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          titulo="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Home Page
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
