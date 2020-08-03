/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea{
    min-height: 150px;
  }
`;

const Label = styled.label`

`;
Label.Text = styled.span`
  color: darkgreen;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #C6F0A2;
  color: darkgreen;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline:0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  margin-bottom: 10px;

  padding: 16px 16px;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus{
    border-bottom-color:(--primary);
  }

  &:focus + span{
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasValeu }) => hasValeu && css`
      &:not([type="color"]) + span{
      transform: scale(.6) translateY(-10px);  
      }
    `}
`;

function FormField({
  titulo,
  type,
  name,
  value,
  onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';


  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>
          {titulo}
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  titulo: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
