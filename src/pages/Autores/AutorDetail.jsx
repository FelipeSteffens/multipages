import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const AutorDetail = () => {

    const {id} = useParams();
    const [autor, setAutor] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/autores/${id}`)
        .then(res => res.json())
        .then(data => setAutor(data))
    }, [id])

    if(!autor) return <div>Carregando...</div>

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h2 className='text-3xl h-10'>{autor.nome}</h2>
    <div className='w-[300px] h-[300px] overflow-hidden rounded-lg'>
        <img src={autor.foto} alt={autor.nome} className="w-full h-full object-cover object-center" />
    </div>
    <h3 className="mt-4 font-bold">{autor.especialidade}</h3>
    <p className="max-w-md">{autor.biografia}</p>
</div>
  )
}

export default AutorDetail