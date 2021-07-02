import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory, useParams } from "react-router-dom";

import { BookContent, Container } from './styles';


function Header() {
  const [list, setList] = useState([]);
  let { id } = useParams();
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  console.log(id)
  useEffect(() => {
    api.get(`https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge`).then((response) => {
      console.log('response: ', response);
      setList(response.data);
    })
  }, [loading]);

  return (
    <Container>
      <div>
        <h2 onClick={() => history.goBack()} style={{ fontSize: 16, color: 'black', cursor: 'pointer' }}>  Voltar</h2>
      </div>
      {
        list.length > 0 && <BookContent>
          <div className="infor">
            <h1>{list[id].name}</h1>
            <p><b>Autor: </b>{list[id].author}</p>
            <p><b>Em estoque: </b>{list[id].stock} unidades</p>
            <p>{list[id].description}</p>
          </div>
          <div className='imgcontent'>
            <img src={list[id].cover_picture} />
          </div>
        </BookContent>
      }

    </Container>
  )
}

export default Header;