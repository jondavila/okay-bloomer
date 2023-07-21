"use client";
import 'bulma/css/bulma.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './signup.css';

const Signup = () => {
	const router = useRouter();

	const [redirect, setRedirect] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	// create the 
	const handleName = (e) => {
		// fill in code
		setName(e.target.value);
	};

	const handleEmail = (e) => {
		// fill in code
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		// fill in code
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // at the beginning of a submit function

		const newUser = {
			name,
			email,
			password
		};
		axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/signup`, newUser)
			.then(response => {
				console.log('response.data', response.data);
				setRedirect(true);
			})
			.catch(error => {
					console.log('===> Error in Signup', error);
					setError(true);
			});

	};

	if (redirect) { router.push('/users/login'); }
	if (error) {
		return (

			<div>
				<div className="card text-white bg-primary py-5 d-md-down-none" style={{ width: "44%" }}>
					<div className="card-body text-center">
						<div>
							<p>Email already exists</p>
							<br />
							<h2>Login</h2>
							<p>Sign In to your account</p>
							<a href="/users/login" type="button" className="btn btn-primary active mt-3">Login</a>
							<span>  </span>
							<a href="/users/signup" type="button" className="btn btn-secondary active mt-3">Signup</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
	// You can have them redirected to profile (your choice)

	return (

		<div className="hero is-fullheight">
			<div className="hero-body is-justify-content-center is-align-items-center">
				<div className="columns is-flex is-flex-direction-column box">
					<div className="column">
						<label for="name">Name</label>
						<input className="input is-primary" type="text" placeholder="Enter Name" onChange={handleName} />
					</div>
					<div className="column">
						<label for="email">Email</label>
						<input className="input is-primary" type="text" placeholder="Email address" onChange={handleEmail} />
					</div>
					<div className="column">
						<label for="Name">Password</label>
						<input className="input is-primary" type="password" placeholder="Password" onChange={handlePassword} />


					</div>
					<div className="column">
						<button className="button is-primary is-fullwidth" type="submit" onClick={handleSubmit}>Create an account</button>
					</div>
					<div className="has-text-centered">
						<p> Already have an account?  <a href="/users/login" className="has-text-primary">Login</a>
						</p>
					</div>
				</div>
			</div>
		</div>

	);
};



export default Signup;