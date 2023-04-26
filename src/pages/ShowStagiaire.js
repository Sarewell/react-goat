
import React, { useEffect, useState } from 'react'
import Layouts from '../components/layouts/Layouts'
import { useParams } from 'react-router-dom'

export default function ShowStagiaire() {
    const {id} = useParams();

    const[user, setUsers]= useState ([]);
    console.log("user:", user);
    const[error, setError]= useState (null);
    const[IsLoading, setIsLoading]= useState (false);

    const API_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

    useEffect (() => {
     fetch(API_URL)
        .then((res) => res.json())
        .then(

          (result) => {
            setIsLoading(true);
            setUsers(result);
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
                  <p>Nom: {user.name}</p>
                  <p>tel: {user.phone}</p>
                  <p>name: {user.username}</p>
                  <p>Website: {user.website}</p>
                  <p>Email: {user.email}</p>
              </div>
          </Layouts>
    )
  }
}