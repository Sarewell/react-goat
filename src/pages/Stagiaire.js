import React, { useEffect } from 'react'
import Layouts from '../components/layouts/Layouts';
import { useState } from 'react';
import { Link } from 'react-router-dom/dist';

export default function Stagiaire() {
    const[user, setUsers]= useState ([]);
    const[error, setError]= useState (null);
    const[isLoading, setIsLoading]= useState (false);
const API_URL = "https://jsonplaceholder.typicode.com/users?_limit=10";

  // 1-utilise hook useEffect pour fetcher data de l'API
  //2-fetch me renvoir une promesse
  //3-Ensuite je transforme la reponse en json et je stocks ds mon state posts.
  useEffect (() =>{
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
            Bienvenue sur mes stagiaire
          </h1>
                <div className="overflow-x-auto">
    <table className="table w-full">
        {/* head */}
        <thead>
        <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
        </tr>
        </thead>
        <tbody>
            {
                user.map((user)=>(
                <Link to={`/showstagiaire/${user.id}`} >
                    <tr key={user.id}></tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    
                </Link>
                
                ))}
                
        
        
        </tbody>
    </table>
</div>
        </div>
      </Layouts>
  )
}}