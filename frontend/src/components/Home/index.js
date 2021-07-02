import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Card, CardList, SearchContent, ImgContent, InfContent, LikeContent } from './styles';
import { useHistory } from "react-router-dom";

import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';




export default function Home() {
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [pages, setPages] = useState([]);
  const [total, setTotal] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  let history = useHistory();

  useEffect(() => {
    api.get(`https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge`).then((response) => {
      console.log('response: ', response);

      setPages(Math.ceil(response.data.length / 8));
      setTotal(response.data.length);
      setFilteredList(response.data);
      setList(response.data);
    })
  }, [loading]);

  useEffect(() => {
    let new_list = list.filter(el => el.name.includes(name));
    setFilteredList(new_list);
  }, [name, list])

  useEffect(() => {
    console.log('value: ', filter)
    switch (filter) {
      case 'Melhores Avaliados': {
        console.log('Melhores Avaliados');
        let new_list = list.sort(function (a, b) { return (parseInt(b.users_who_liked.length) - parseInt(a.users_who_liked.length)) })
        setFilteredList(new_list);
        break;
      }
      case 'Em estoque': {
        console.log('Em estoque');
        let new_list = list.filter(el => parseInt(el.stock) > 0);
        console.log(new_list)
        setFilteredList(new_list);
        break;
      }
      case 'Ordem Alfabética': {
        console.log('Ordem Alfabética');
        let new_list = list.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) });
        console.log(new_list)
        setFilteredList(new_list);
        break;
      }
      case 'Livros Curtidos': {
        console.log('Livros Curtidos');
        break;
      }
      case 'Por Categoria': {
        console.log('Por Categoria');
        break;
      }
      default: {
        setFilteredList(list);
      }
    }
  }, [filter, list]);

  return <>
    <SearchContent className="main-search">
      <div className="search-section">
        <div>
          <input placeholder="Procure por um livro" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="second-filter">
          {filter === 'Por Categoria' && <input placeholder="Nome da categoria" value={category} onChange={(event) => setCategory(event.target.value)} />}
          <select value={filter} onChange={
            (event) => setFilter(event.target.value)
          }>
            <option value="">
              Filtros
            </option>
            <option value="Melhores Avaliados">
              Melhores Avaliados
            </option>
            <option value="Em estoque">
              Em estoque
            </option>
            <option value="Ordem Alfabética">
              Ordem Alfabética
            </option>
            <option value="Livros Curtidos">
              Livros Curtidos
            </option>
            <option value="Por Categoria">
              Por categoria
            </option>
          </select>
        </div>
      </div>
      <div>
        <p>Total: {filteredList.length}</p>
      </div>
    </SearchContent>
    <CardList>
      {filteredList.length > 0 && filteredList.map((el, index) =>
        <Card key={index} onClick={() => history.push(`/book/${index}`)}>
          <ImgContent>
            <img src={el.cover_picture} />
          </ImgContent>
          <div className="bottom-content">
            <InfContent>
              <p><b>Nome: </b>{el.name}</p>
              <p><b>Autor: </b>{el.author}</p>
              <p><b>Categoria:</b>{el.category}</p>
              <p><b>Qty: </b>{el.stock}</p>
              <p><b>Curtidas: </b>{el.users_who_liked.length}</p>
            </InfContent>
            <LikeContent>
              <Button type="text" onClick={() => el.users_who_liked.push('Me')}>
                {el.users_who_liked.length > 0 && el.users_who_liked.includes('Me') ? <HeartFilled style={{ fontSize: 33, backgrounColor: 'red', color: '#DC143c' }} /> : <HeartOutlined style={{ fontSize: 33, backgrounColor: 'red', color: 'black' }} />}
              </Button>
            </LikeContent>
          </div>
        </Card>
      )}
    </CardList>

  </>
}