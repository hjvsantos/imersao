import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components'

const Main = styled.main`
    background-color: #98FB98;
    color: darkgreen;
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    display: block;
    
    `;

function PageErrorDefault({ children }){
    return(
       <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
       </>
    );
}

export default PageErrorDefault;