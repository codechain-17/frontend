import React from 'react'

const AboutSection = () => {

    const options = {
        image: 'https://dummyimage.com/600x400/343a40/6c757d',
        title: 'Our founding',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.'
    }

    return (
        <section className="py-5 bg-light" id="scroll-target">
            <div className="container px-5 my-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src={options.image} alt={options.title} /></div>
                    <div className="col-lg-6">
                        <h2 className="fw-bolder">{options.title}</h2>
                        <p className="lead fw-normal text-muted mb-0">{options.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
