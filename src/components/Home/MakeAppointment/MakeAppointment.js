import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-white p-5">
                        <h4 className="text-primary">Appointment</h4>
                        <h1 className="my-4">Make an appointment <br /> today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corrupti fuga inventore in deserunt neque doloremque! Accusamus, vero atque. Repellendus.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;