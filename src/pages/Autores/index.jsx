import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
const Autores = () => {
    const [autores, setAutores] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/autores")
        .then(res => res.json())
        .then(data => {
            setAutores(data)
        })
    }, [])

  return (
     <>
            <div className='flex gap-2'>
                {
                    autores.map(autores => (
                        <div key={autores.id} className='card w-250'>
                            <h2 className='text-2xl h-10'>{autores.nome}</h2>
                            <img className='h-40 w-70' src={autores.foto} alt={autores.nome} />
                            <h3>{autores.especialidade}</h3>
                            <p>{autores.descricao}</p>
                            {/* <a href='#'>Leia Mais</a> */}
                            <Link to={`/autor/${autores.id}`} className='text-white
                             text-blue-500
                              hover:bg-blue-700'>Detalhes</Link>
                        </div>
                    )
                    )
                }
            </div>
        </>
  )
}

export default Autores