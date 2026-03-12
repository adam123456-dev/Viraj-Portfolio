/*
    File: ServiceList.jsx
    Author: Viraj
    Copyright: 2023 - Viraj https://edpark.space
    Version: 1.0
*/

import PropTypes from 'prop-types';

ServiceList.propTypes = {
    services: PropTypes.array.isRequired,
}

export default function ServiceList({ services }) {
    return (
        <dl className="mt-6 grid justify-items-stretch items-stretch justify-center gap-8 md:gap-9 grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] sm:mt-7 md:mt-8 lg:gap-10 lg:mt-9">
            {services.map((service, id) => (
                <div key={id} className="glassy-screen flex flex-col flex-nowrap justify-start items-center gap-6 px-mobileBound py-7 max-w-[350px] w-[100%] h-full sm:px-7 sm:py-8 md:px-8 md:py-9 lg:px-9 lg:py-10">
                    <service.Icon />
                    <dt className="text-center font-heading font-bold shrink-0">{service.title}</dt>
                    <dd className="text-justify flex-1">{service.description}</dd>
                </div>
            ))}
        </dl>
    );
}