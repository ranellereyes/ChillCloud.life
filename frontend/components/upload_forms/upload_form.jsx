import React from 'react';
import { withRouter } from 'react-router-dom';

class UploadForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "",
      user_id: props.currentUser,
      source: "",
      image_url: "",
      genre: ""
		};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillUnmount() {
		this.props.errorClear();
		this.props.closeModal();
	}

	componentDidUpdate() {
		if (this.props.songs.redirect) {
			this.props.closeModal();
			this.props.history.push(`/songs/${this.props.songs.redirect}`);
		}
	}

	update(field){
    if (["source", "image_url"].includes(field)) {
      return e => {
        var fileReader = new FileReader();
        const file = e.currentTarget.files[0];
        fileReader.onloadend = () => {
          this.setState({[field]: file});
        };

        if (file) { fileReader.readAsDataURL(file); }
      };
    } else {
			return e => this.setState({[field]: e.currentTarget.value });
		}
	}

	handleSubmit(){
    var formData = new FormData();
    const data = this.state;

	  Object.keys(data).forEach(key => {
      formData.append(`song[${key}]`, data[key]);
    });

    this.props.actionNewSong(formData);
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
                onChange={this.update("source")}
                className="login-input" />
              <label className="form-text">
                Music File
              </label>

            <br />
              <input type="file"
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
							onClick={this.handleSubmit}>
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

export default withRouter(UploadForm);
