import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedService = () => {
    return (
        <section className="featured-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4">
                        <img className="img-fluid" src={featured} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                       <h1>Exceptional Dental <br/> Care, on your Team</h1>
                       <p className="text-secondary my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci vero explicabo iste officia reiciendis alias, repellat id. Mollitia, quisquam odit. Quae, aperiam! Sint, veniam doloribus aliquid ab optio laboriosam quod.
                       </p>
                       <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;