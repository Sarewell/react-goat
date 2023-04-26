const [ company, setCompany] =useState("Apple");
import React, { useEffect, useState } from 'react'
import Layouts from '../components/layouts/Layouts'
import { useParams } from 'react-router-dom'
import CardBlog from '../components/cards/CardBlog';

export default function ShowPost() {
    const {id} = useParams();

    const[post, setPost]= useState ([]);
    console.log("post:", post);
    const[error, setError]= useState (null);
    const[IsLoading, setIsLoading]= useState (false);

    const API_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

    useEffect (() => {
     fetch(API_URL)
        .then((res) => res.json())
        .then(

          (result) => {
            setIsLoading(true);
            setPost(result);
         },
    //Capture les errreurs
    (error) => {
        setIsLoading(true);
        setError(error.message);
     },
     );
    },[]);

    if(!IsLoading){
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
                  <div>
                      <img src="/img/arizona.jpeg" alt={`Goat ${post.title} `} className='' />
                  </div>
                  <h1 className="font-bold text-4xl">{post.title}</h1>
                  <p>{post.body}</p>
              </div>
          </Layouts>
    )
  }
}