import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ListCard = ({id, title, minSalary, maxSalary, remote, category, country, companyId}) => {
    return (
        <div className="container listCard mb-4">
            <ul className="list-group">
                <li className="list-group-item">
                    <h3 className="list-group-item-heading bold">
                        {title}
                        {/* <span className="label label-danger pull-right">NEW !</span> */}
                    </h3>
                    <div>
                        <Badge pill bg="primary">
                            {category}
                        </Badge>{' '}
                        {
                            remote
                                ? 
                                    <Badge pill bg="info">
                                        Remoto
                                    </Badge>
                                :
                                    <Badge pill bg="success">
                                        {country}
                                    </Badge>
                        }
                    </div>
            
                    <div className="btn-group mt-4">
                        <span>Salario: ${minSalary}</span>
                        <span> - ${maxSalary}</span>
                    </div>

                    <div className="btn-toolbar pull-right" role="toolbar" aria-label="">
                        <Link exact to={`/jobs/${id}`}>
                            <button className="btn btn-primary">VER MAS</button>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ListCard
