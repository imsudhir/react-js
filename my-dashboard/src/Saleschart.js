import React from "react";
const Saleschart = (props) =>{
    return (
    <React.Fragment>
     <div className="container">
        <h5 className="section-title h1">OUR TEAM</h5>
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Sunlimetech</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.</p>
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Sunlimetech</h4>
                                    <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-google"></i>
                                            </a>
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
  </React.Fragment>
    )
}
export default Saleschart;