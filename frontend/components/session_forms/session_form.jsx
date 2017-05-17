import React from 'react';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			errors: this.props.errors,
			type: this.props.type
		};
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	_handleSubmit(type){
		return () => {
			const user = this.state;
			this.setState({errors: []});
			this.props.processForm(user, type);
		};
	}

	renderErrors(){
		return(
			<ul className='errors'>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	componentWillUnmount() {
		this.props.errorClear();
	}

	render() {

		return (
			<div>
				<div className="login-form-container">
						<p className="form-title">
							ChillCloud
						</p>
						<div className="login-form">
							<br />
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
								<label className="form-text"> Username:
							</label>

							<br />
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
								<label className="form-text"> Password:
							</label>
							<div>
								{ this.renderErrors() }
							</div>
							<br />
								<button
									onClick={this._handleSubmit(this.state.type)}>
									<span>
										{this.state.type === 'login' ?
											"Log In" :
											"Sign Up"}
									</span>
								</button>
						</div>
				</div>
			</div>
		);
	}

}

// <button onClick={this._handleSubmit('login')}>
// 	Log In
// </button>
// <button onClick={this._handleSubmit('signup')}>
// 	Sign Up
// </button>

export default SessionForm;
