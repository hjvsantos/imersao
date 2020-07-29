import React from 'react';
import error from '../../assets/img/error.png'
import styled from 'styled-components'
import PageErrorDefault from '../../components/PageErrorDefault';

const Container = styled.ul`
  font-family: 'Special Elite', sans-serif;
  background-color: #98FB98;
  box-sizing: border-box;
  
`

function Error(){
    return (
        <PageErrorDefault>
            <Container >
            
            <img className="Error" src={error} alt="error"/>
            
            </Container>
        </PageErrorDefault>
    );
}

export default Error;