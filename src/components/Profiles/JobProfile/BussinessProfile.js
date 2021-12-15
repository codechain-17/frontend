import React, { useContext, useEffect, useState } from 'react'
import Axios from "axios";
import { Badge } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { jobsData } from '../../../data/getData';
import { UserContext } from '../../../Context/UserContext';

const BussinessProfile = () => {
    const {id} = useParams();
    const {dataUser} = useContext(UserContext)
    const {push} = useHistory();
    const [ values, setValues ] = useState({
        title: '',
        descriptionHeadline: '',
        description: '',
        projects: '',
        functionsHeadline: '',
        functions: '',
        benefitsHeadline: '',
        benefits: '',
        desirableHeadline: '',
        desirable: '',
        remote: '',
        category: '',
        country: '' 
    });

    const handlePost = () => {
            Axios({
              method: "POST",
              data: {
                user: {
                  username: dataUser.username,
                },
                jobs: [
                  {
                    id: id
                  },
                ],
              },
              withCredentials: true,
              url: "/api/jobs/create",
            }).then((res) => {
              const data = res.data;
              const status = res.status;
              if (data === "User Already Exists") {
                window.location = "/failregister";
              } else if (status === 200 && data !== "User Already Exists") {
                push("/login");
              }
            });
    };
    

    const getJobs = async () => {
        const data = await jobsData()
        const jobData = data.data.find((item =>item.id === id))
       
        console.log(jobData)
        setValues({
            title: jobData.attributes.title,
            descriptionHeadline: jobData.attributes.description_headline,
            description: (jobData.attributes.description).replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, ""),
            projects: (jobData.attributes.projects.replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, "")),
            functionsHeadline: jobData.attributes.functions_headline,
            functions: (jobData.attributes.functions).replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, ""),
            benefitsHeadline: jobData.attributes.benefits_headline,
            benefits: (jobData.attributes.benefits).replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, ""),
            desirableHeadline: jobData.attributes.desirable_headline,
            desirable: (jobData.attributes.desirable).replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, ""),
            remote: jobData.attributes.remote,
            category: jobData.attributes.category_name,
            country: jobData.attributes.country
        })
        
    }

    useEffect(()=>{        
        getJobs()
    }, [])

    return (
        <>
            <div className='my-2'>
                {
                    values.remote 
                    ?
                        <Badge pill bg="info">
                            Remoto
                        </Badge>
                    :
                        <Badge pill bg="success">
                            {values.country}
                        </Badge>
                }
                {' '}
                <Badge pill bg="primary">
                    {values.category}
                </Badge>{' '}
                
            </div>
            <div className="row">
                <div className="col-12 bussinessProfile">
                    <h2>{values.title}</h2>
                    
                    <h3>{values.descriptionHeadline}</h3>
                    <p>{values.description}</p>

                    <p>{values.projects}</p>

                    <h3>{values.functionsHeadline}</h3>
                    <p>{values.functions}</p>

                    <h3>{values.benefitsHeadline}</h3>
                    <p>{values.benefits}</p>

                    <h3>{values.desirableHeadline}</h3>
                    <p>{values.desirable}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <button className='btn btn-primary btn-lg px-4 me-sm-3 bold' onClick={handlePost}>POSTULAR</button>
                </div>
            </div>
        </>
    )
}

export default BussinessProfile
