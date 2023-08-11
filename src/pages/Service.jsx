import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Service = (props) => {
	const { service } = useParams();

	// useEffect(() => {
	// 	setSelectedService(
	// 		ServicesItems.filter((item) => item.urlParam == { service })
	// 	);
	// }, []);

	return <div>{service}</div>;
};

export default Service;
