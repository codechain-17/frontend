import React from 'react'
import { useParams } from 'react-router-dom'

const ProfileData = () => {
    const {id} = useParams();
    

    return (
        <div className="container">
            <ul className="list-group">
                <li className="list-group-item clearfix">
                <img className="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
                <h3 className="list-group-item-heading">
                    Amazing Item
                    <span className="label label-danger pull-right">NEW !</span>
                </h3>
                <p className="list-group-item-text lead">
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio.
                    <br />
                    <a href="#"><small>Details&#8230;</small></a>
                </p>
                <div className="btn-toolbar pull-right" role="toolbar" aria-label="">
                    <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-fw fa-list"></i> <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Add to new list</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">A list</a></li>
                        <li><a href="#">Another list</a></li>
                        <li><a href="#">Third list</a></li>
                    </ul>
                    </div>
                    <a href="#" className="btn btn-default">Add to cart</a>
                    <a href="#" className="btn btn-primary">$29.99</a>
                </div>
                </li>
                <li className="list-group-item active clearfix">
                <img className="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
                <h3 className="list-group-item-heading">
                    Current thing
                </h3>
                <p className="list-group-item-text lead">
                    Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.
                    <br />
                    <a href="#"><small>Details&#8230;</small></a>
                </p>
                <div className="btn-toolbar pull-right" role="toolbar" aria-label="">
                    <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-fw fa-list"></i> <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Add to new list</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">A list</a></li>
                        <li><a href="#">Another list</a></li>
                        <li><a href="#">Third list</a></li>
                    </ul>
                    </div>
                    <a href="#" className="btn btn-default">Add to cart</a>
                    <a href="#" className="btn btn-info">$9.95</a>
                </div>
                </li>
                <li className="list-group-item clearfix">
                <img className="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
                <h3 className="list-group-item-heading">
                    Something great
                </h3>
                <p className="list-group-item-text lead">
                    Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.
                    <br />
                    <a href="#"><small>Details&#8230;</small></a>
                </p>
                <div className="btn-toolbar pull-right" role="toolbar" aria-label="">
                    <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-fw fa-list"></i> <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Add to new list</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">A list</a></li>
                        <li><a href="#">Another list</a></li>
                        <li><a href="#">Third list</a></li>
                    </ul>
                    </div>
                    <a href="#" className="btn btn-default">Add to cart</a>
                    <a href="#" className="btn btn-primary">$42.50</a>
                </div>
                </li>
                <li className="list-group-item clearfix">
                <img className="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
                <h3 className="list-group-item-heading">
                    Another thing
                    <span className="label label-default pull-right">SOLD OUT</span>
                </h3>
                <p className="list-group-item-text lead">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    <br />
                    <a href="#"><small>Details&#8230;</small></a>
                </p>
                <div className="btn-toolbar pull-right" role="toolbar" aria-label="">
                    <div className="btn-group">
                    <button type="button" className="btn disabled btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-fw fa-list"></i> <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Add to new list</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">A list</a></li>
                        <li><a href="#">Another list</a></li>
                        <li><a href="#">Third list</a></li>
                    </ul>
                    </div>
                    <a href="#" className="btn disabled btn-default">Add to cart</a>
                    <a href="#" className="btn disabled btn-primary">$1.99</a>
                </div>
                </li>
                <li className="list-group-item clearfix">
                <img className="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
                <h3 className="list-group-item-heading">
                    Yet another item
                </h3>
                <p className="list-group-item-text lead">
                    Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.
                    <br />
                    <a href="#"><small>Details&#8230;</small></a>
                </p>
                <div className="btn-toolbar pull-right" role="toolbar" aria-label="">
                    <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-fw fa-list"></i> <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Add to new list</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">A list</a></li>
                        <li><a href="#">Another list</a></li>
                        <li><a href="#">Third list</a></li>
                    </ul>
                    </div>
                    <a href="#" className="btn btn-default">Add to cart</a>
                    <a href="#" className="btn btn-primary">$16.00</a>
                </div>
                </li>
                <li className="list-group-item clearfix">
                <img className="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
                <h3 className="list-group-item-heading">
                    Something else
                </h3>
                <p className="list-group-item-text lead">
                    Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.
                    <br />
                    <a href="#"><small>Details&#8230;</small></a>
                </p>
                <div classNameName="btn-toolbar pull-right" role="toolbar" aria-label="">
                    <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-fw fa-list"></i> <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Add to new list</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">A list</a></li>
                        <li><a href="#">Another list</a></li>
                        <li><a href="#">Third list</a></li>
                    </ul>
                    </div>
                    <a href="#" className="btn btn-default">Add to cart</a>
                    <a href="#" className="btn btn-primary">$12.99</a>
                </div>
                </li>
                <li className="list-group-item clearfix">
                <img className="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
                <h3 className="list-group-item-heading">
                    Last thing here
                </h3>
                <p className="list-group-item-text lead">
                    Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.
                    <br />
                    <a href="#"><small>Details&#8230;</small></a>
                </p>
                <div className="btn-toolbar pull-right" role="toolbar" aria-label="">
                    <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-fw fa-list"></i> <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Add to new list</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">A list</a></li>
                        <li><a href="#">Another list</a></li>
                        <li><a href="#">Third list</a></li>
                    </ul>
                    </div>
                    <a href="#" className="btn btn-default">Add to cart</a>
                    <a href="#" className="btn btn-success">Free!</a>
                </div>
                </li>
            </ul>
        </div>
    )
}

export default ProfileData
