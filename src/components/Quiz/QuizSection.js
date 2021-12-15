import React from 'react'
import { Quiz } from './Quiz';

export const QuizSection = () => {
    return (
        <section className="py-5 bg-light" id="scroll-target">
            <div className="container px-5">
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <Quiz/>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}
