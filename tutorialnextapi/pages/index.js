import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Index = ({dados}) => (
    <div class="mt-3">

        <Container>
            
            <Alert color="primary"><h1 class="text-center">Artigos <FontAwesomeIcon icon="award" /></h1></Alert>

        {console.log(dados)}

        <ul>
            {dados.map(artigo => (
                <li key={artigo._id}>
                    <h2>{artigo.titulo}</h2>
                    <p>{artigo.conteudo}</p>
                </li>
            ))}
        </ul>

        </Container>
        

    </div>
);

Index.getInitialProps = async () => {
    const response = await axios.get(
        'http://localhost:8080/artigo'
    );

    return {dados: response.data}
}

export default Index;