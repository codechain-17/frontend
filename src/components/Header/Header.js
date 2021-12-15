import React from 'react';
import { useLocation } from 'react-router-dom';
import headerOptions from './headerOptions';


const Header = ({options}) => {
    const location = useLocation();
    console.log(location.pathname)

    
    return (
        <header className="bg-dark py-5 bg" style={{backgroundImage:'url(/img/bk_home.png)'}}>
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                       
                    </div>
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                    <div className="my-5 text-center text-xl-start">
                            <h1 className="display-3 fw-bolder text-white mb-2">{headerOptions[options].title}</h1>
                            <p className="lead fw-normal text-white-50 mb-4">{headerOptions[options].description}</p>
                            {
                                (location.pathname === '/') &&
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3 text-light" href="/signin">{headerOptions[options].primaryButton}</a>
                                    <a className="btn btn-outline-light btn-lg px-4 text-light border-white" href="/singup">{headerOptions[options].secondaryButton}</a>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
