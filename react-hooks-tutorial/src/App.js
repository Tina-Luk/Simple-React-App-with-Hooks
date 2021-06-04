import React, { useEffect, useState } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useFetch } from './useFetch';

const App = () => {
	const [values, handleChange] = useForm({
		email: '',
		password: '',
		firstName: '',
	});

	const [count, setCount] = useState(0);

	const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

	return (
		<div>
			<div>{loading ? 'loading...' : data}</div>
			<div>count: {count}</div>
			<button onClick={() => setCount((c) => c + 1)}>increment</button>

			{/* <button onClick={() => setShowHello(!showHello)}>toggle</button> */}
			{/* {showHello && <Hello />} */}
			<input name="email" value={values.email} placeholder="Email" onChange={handleChange} />
			<input name="firstName" value={values.firstName} placeholder="First Name" onChange={handleChange} />
			<input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
		</div>
	);
};

export default App;
