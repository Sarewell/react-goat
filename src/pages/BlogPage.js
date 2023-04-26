import React, { useState } from 'react'
import CardBlog from '../components/cards/CardBlog'

import Layouts from '../components/layouts/Layouts'
import { useEffect } from 'react';

export default function BlogPage() {
  const[posts, setPosts]= useState ([]);
  const[error, setError]= useState (null);
  const[isLoading, setIsLoading]= useState (false);
const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  // 1-utilise hook useEffect pour fetcher data de l'API
  //2-fetch me renvoir une promesse
  //3-Ensuite je transforme la reponse en json et je stocks ds mon state posts.
  useEffect (() =>{
    fetch(API_URL)
    .then((res) => res.json())
    .then(
      (result) => {
        setIsLoading(true);
        setPosts(result);
      },
      //Capture les errreurs
    (error) => {
      setIsLoading(true);
      setError(error.message);
    }
    );
  },[]);

  if(!isLoading){
    return (
      <Layouts> 
        <p className='text-red-500 text-center text-2xl'>
          En chargement je recupère la data ...
        </p>
      </Layouts>
    );
  } else if (error) {
      return (
        <Layouts>
          <p className='text-red-500 text-center text-2xl py-24'>Erreur : {error}</p>
        </Layouts>
      )
  }else{
    return (
      <Layouts> 
        <div className='px-24 py-20'>
          <h1 className='text-center text-4xl font-bold text-blue-600 pb-6'>
            Bienvenue sur mon blog
          </h1>
            <div className='flex flex-wrap space-x-7'>
              {posts.map((item) => (
              <CardBlog
              key={item.id}
              title={item.title}
              id={item.id}
              //subtitle={item.subtitle}
              content={item.body}
              />
              ))}
            </div>
        </div>
      </Layouts>
  )
}}