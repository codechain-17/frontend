import React from 'react'
import { Pill } from './Pill'

const FeaturesSection = () => {
    return (
        <section className="py-5" id="features">
            <div className="container px-5 my-5">
                <div className="row justify-content-evenly"> 
                        <div className="col-sm-12 col-md-4">
                            <div className="col-md-6 mb-5 mb-lg-0">
                                <h1 className="fw-bolder mb-0 text-right">Nuestras categorías más buscadas.</h1>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="d-flex justify-content-evently flex-wrap">
                                <div className="mb-4">
                                    <Pill titulo="Frontend"/>
                                </div>
                                <div className="mb-4">
                                    <Pill titulo="Backend"/>
                                </div>
                                <div className="mb-4">
                                    <Pill titulo="React Js"/>
                                </div>
                                <div className="mb-4">
                                    <Pill titulo="Python"/>
                                </div>
                                <div className="mb-4">
                                    <Pill titulo="HTML"/>
                                </div>
                            </div>
                        </div> 
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
