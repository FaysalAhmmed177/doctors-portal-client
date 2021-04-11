import React from 'react';
import './BookAppointment.css';
import BookingCard from './../BookingCard/BookingCard';

const bookingData = [
    {
        id: '1',
        subject: 'Teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: '2',
        subject: 'Cosmetic Dentistry',
        visitingHours: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        id: '3',
        subject: 'Teeth Cleaning',
        visitingHours: '5:00 AM - 6:30 AM',
        totalSpace: 10
    },
    {
        id: '4',
        subject: 'Cavity Protection',
        visitingHours: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        id: '5',
        subject: 'Teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: '6',
        subject: 'Teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]

const BookAppointment = ({ date }) => {
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Available Appointment on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking}
                        date={date}
                        key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;