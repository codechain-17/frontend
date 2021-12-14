import React from 'react'
import { Pill } from './Pill'

const FeaturesSection = () => {
    return (
        <section className="py-5" id="features">
            <div className="container px-5 my-5">
                <div className="row">
                    <div className="col-md-8 mb-5 mb-lg-0">
                        <h2 className="fw-bolder mb-0">Nuestras categorías más buscadas.</h2>
                    </div>
                    <div class="container mt-5">
                        <div class="row justify-content-evenly">
                            <div class="col-sm-6 my-3 col-md-3">
                                <Pill titulo="Frontend"/>
                            </div>
                            <div class="col-sm-6 my-3 col-md-3">
                                <Pill titulo="Frontend"/>
                            </div>
                            <div class="col-sm-6 my-3 col-md-3">
                                <Pill titulo="Frontend"/>
                            </div>
                            <div class="col-sm-6 my-3 col-md-3">
                                <Pill titulo="Frontend"/>
                            </div>
                        </div>
                   
                    
                        <div class="row justify-content-around">
                            <div class="col-sm-6 my-3 col-md-3">
                                <Pill titulo="Frontend"/>
                            </div>
                            <div class="col-sm-6 my-3 col-md-3">
                                <Pill titulo="Frontend"/>
                            </div>
                            <div class="col-sm-6 my-3 col-md-3">
                                <Pill titulo="Frontend"/>
                            </div>
                        </div>

                        <div class="row justify-content-evenly">
                            <div class="col-sm-6 my-3 col-md-3">
                                <Pill titulo="Frontend"/>
                            </div>
                            <div class="col-sm-6 my-3 col-md-3">
                                <Pill titulo="Frontend"/>
                            </div>
                            <div class="col-sm-6 my-3 col-md-3">
                                <Pill titulo="Frontend"/>
                            </div>
                            <div class="col-sm-6 my-3 col-md-3">
                                <Pill titulo="Frontend"/>
                            </div>
                        </div>
                        
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
