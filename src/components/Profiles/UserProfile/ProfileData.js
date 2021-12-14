import React from 'react'
import { useParams } from 'react-router-dom'

const ProfileData = () => {
    const {id} = useParams();
    

    return (
        <section className="py-5 bg-light" id="scroll-target" style={{backgroundColor: '#fff'}}>
            <h2 className='text-center bold mb-4'>Perfil</h2>
            <div className="container px-5">
                

                <div className='row'>
                    <div className='col-3'>
                          
                    </div>
                    <div className='col-3'>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProfileData
