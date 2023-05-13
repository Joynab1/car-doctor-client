import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center space-y-3 my-8'>
                <h3 className="text-3xl text-cyan-500 font-bold">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p className='w-3/4 mx-auto'>We offer a comprehensive range of services, including oil changes, tire rotations, brake inspections, engine tune-ups, and more. Our skilled technicians provide expert diagnostics, quality repairs, and regular maintenance to keep your vehicle running smoothly. With state-of-the-art equipment and a commitment to customer satisfaction, we ensure efficient and reliable service.Visit us today and experience the difference in our top-notch car servicing solutions.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                services.map(service=> <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;