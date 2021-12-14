import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProfileData = () => {
    const [values, setValues0] = useState({
        
    })
    const {id} = useParams();



    

    return (
        <section className="py-5">
            <h2 className='text-center bold mb-4'>Tus datos</h2>
            <div className="container px-5 profileData" >
                <div className='row'>
                    <div className='col-12'>
                        <ul className='py-4'>
                            <li className='bold'>Email: <span>juanperez@mail.com</span></li>
                            <li className='bold'>Github: <span>www.github.com/juanperez</span></li>
                            <li className='bold'>Linkedin: <span>www.linkedin.com/in/juanperez</span></li>
                            <li className='bold'>Portfolio: <span>www.juanperez.com</span></li>
                            <li className='bold'>Genero: <span>Masculino</span></li>
                            <li className='bold'>Área de conocimiento: <span>Programación</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProfileData
