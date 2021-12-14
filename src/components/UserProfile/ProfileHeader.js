import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images'

const ProfileHeader = ({id}) => {

    const user = {
        name: 'Juan Perez',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
        avatar: 3,
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="mb-3 bg-dark">
                    <div className="row">
                        <div className="col-12">
                            {/* <a className="position-absolute ml-3 mt-3 text-white" href="setting.html" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit cover images"><i className="fas fa-cog"></i></a> */}
                            <button className="position-absolute ml-3 mt-3 text-white">Editar</button>
                            
                            <div className="col-12 ml-auto m-auto">
                                <div className="profiles p-3 my-4 rounded text-center shadow-sm">
                                    <div className="avatars">
                                        <Link exact to={`/dashboard/${id}`}>
                                            <img src={images[user.avatar]} alt='' className="avatar-lg rounded-circle img-fluid" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="avatar images" />
                                        </Link>
                                    </div>
                                    <div>
                                        <h3 className="title text-light">{user.name}</h3>
                                        
                                        <p className="title text-light">{user.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
