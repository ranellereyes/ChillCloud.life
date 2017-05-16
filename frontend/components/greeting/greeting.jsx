import React from 'react';

const Greeting = ({currentUser, logout}) => (
	<div>
		<h1>Welcome to Front End Auth!</h1>

		<h2>Hi, {currentUser.username}!</h2>

		<button onClick={logout}>Log Out</button>
	</div>
);

export default Greeting;
