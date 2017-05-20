import React from 'react';

class UploadForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "",
      user_id: props.currentUser,
      source: undefined,
      image_url: undefined,
      genre: ""
		};
	}

	update(field){
    // if (field === "source" || field === "image_url") {
    //   return e => {
    //     debugger;
    //     this.setState({[field]: File.new(e.currentTarget.value)});};
    // }
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	_handleSubmit(song){
	   return () => this.props.actionNewSong(song);
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
		this.props.closeModal();
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
									value={this.state.title}
									onChange={this.update("title")}
									className="login-input" />
                <label className="form-text"> Title:
							</label>

							<br />
								<input type="text"
									value={this.state.genre}
									onChange={this.update("genre")}
									className="login-input" />
                <label className="form-text"> Genre:
							</label>

              <br />
                <input type="file"
                  value={this.state.source}
                  onChange={this.update("source")}
                  className="login-input" />
                <label className="form-text">
                  Music File
                </label>

              <br />
                <input type="file"
                  value={this.state.image_url}
                  onChange={this.update("image_url")}
                  className="login-input" />
                <label className="form-text">
                  Cover Image
                </label>
							<div>
								{ this.renderErrors() }
							</div>
							<br />
								<button
									onClick={this._handleSubmit(this.state)}>
									<span>
										Upload!
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

export default UploadForm;
