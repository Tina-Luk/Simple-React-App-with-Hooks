import React, { useEffect, useState } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';

const App = () => {
	const [values, handleChange] = useForm({
		email: '',
		password: '',
		firstName: '',
	});
	const [showHello, setShowHello] = useState(true);
	// const [values2, handleChange2] = useForm({ firstName: '', lastName: '' });

	// useEffect(() => {
	// 	console.log('render');
	// 	return () => {
	// 		console.log('unmount');
	// 	};
	// }, []);

	return (
		<div>
			<button onClick={() => setShowHello(!showHello)}>toggle</button>
			{showHello && <Hello />}
			<input name="email" value={values.email} placeholder="Email" onChange={handleChange} />
			<input name="firstName" value={values.firstName} placeholder="First Name" onChange={handleChange} />
			<input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
		</div>
	);
};

export default App;
