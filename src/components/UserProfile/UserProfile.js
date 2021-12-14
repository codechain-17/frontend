import React from 'react'
import CardList from '../Cards/CardList'
import PillCard from '../Cards/PillCard'
import Sidebar from '../Sidebar/Sidebar'
import ProfileHeader from './ProfileHeader'
import { MdQuiz } from 'react-icons/md'
import { RiFileCopy2Fill } from 'react-icons/ri'
import { MdOutlineWork } from 'react-icons/md'

const UserProfile = () => {

    const pills = [
        {
            icon: MdQuiz,
            title: 'Quizzes',
            quantity: 2,
        },
        {
            icon: RiFileCopy2Fill,
            title: 'Postulaciones',
            quantity: 2
        },
        {
            icon: MdOutlineWork,
            title: 'Empleos guardados',
            quantity: 3
        }
    ]


    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <Sidebar />
                    
                    
                    {/* <!--Content--> */}
                    <div className="col-md-9">
                        <div className="dashboard-area">
                            <ProfileHeader />
                            <div className="row">
                                <div className="col-12">
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="row">
                                                <CardList cardsData={pills} CardComponent={PillCard} />
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="p-3 border mb-3">
                                                <a className="position-absolute" style={{right: "25px"}} href="setting.html" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit profile"><i className="fas fa-cog"></i></a>
                                                <h3>Jenifer Tan</h3>
                                                <p><b>Jobs:</b> Writter</p>
                                                <p><b>About:</b> Hello my name is Jenifer, My passion is writting. I hope you enjoy with my article.</p>
                                                <p><b>Address:</b> Street 12 vo 05, California, United States</p>
                                                <p><b>Phone:</b> +1 987654321</p>
                                                
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div className="p-3 border mb-3">
                                                <h5>Recently Published</h5>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="list-unstyled statistics">
                                                            <li>
                                                                <span className="text-primary">Oct 20</span> <a className="h6" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Toyota Sienna rates marginal in passenger-side overlap crash test</a>
                                                            </li>
                                                            <li>
                                                                <span className="text-primary">Oct 12</span> <a className="h6" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Ford reveals autonomous vehicle philosophies, priorities</a>
                                                            </li>
                                                            <li>
                                                                <span className="text-primary">Oct 7</span> <a className="h6" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Offer Hints to How Dogs Became Domesticated</a>
                                                            </li>
                                                            <li>
                                                                <span className="text-primary">Oct 6</span> <a className="h6" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Consumer apprehension grows over autonomous tech, study says</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProfile
