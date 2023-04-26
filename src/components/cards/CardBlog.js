import React from 'react'
import { Link } from 'react-router-dom/dist'


export default function CardBlog({content,title,id}) {
  return (
    <div className='max-w-xs shadow-lg bg-gray-100'>
      <Link to={`/post/${id}`}>
        <img src="img/arizona.jpeg"alt={`Goat ${title}`} className='max-w-s'/>
        <div className='p-4'> 
          <h3 className='font-bold text-2xl py-5 text-center'>{title}</h3>
          <p className='text-center'>{content}</p>
        </div>
      </Link>
    </div>
  )
}