import React from "react";
import { connect } from 'react-redux';
import { fetchUsers, createUser } from '../../actions/users_actions';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      image: null,
      images: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateFiles = this.updateFiles.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.state)
      .then(() => {
        this.setState({
          name: "",
          email: "",
          image: null,
          images: []
        });
      });
  }

  updateFiles(e){
    const { target: 
      {
        validity,
        files
      }
    } = e;
    return validity.valid && this.setState({ images: files });
  }

  updateFile(e){
    const { target: 
      {
        validity,
        files: [file]
      }
    } = e;
    return validity.valid && this.setState({ image: file });
  }

  render() {
    return (
      <div>
        <h1>AWS S3 Express-React Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input 
              type="text" 
              placeholder="Name" 
              value={this.state.name} 
              onChange={this.update("name")} />
          </label>
          <label>
            <input 
              type="email" 
              placeholder="Email"
              value={this.state.email} 
              onChange={this.update("email")} />
          </label>
          <label>
            Single Upload
            <input 
              type="file"
              onChange={this.updateFile} />
          </label>
          {/* <label>
            Multiple Upload
            <input 
              type="file"
              multiple
              onChange={this.updateFiles} />
          </label> */}
          <input type="submit" value="Create User" />
        </form>
        <ul>
          {this.props.users.map(user => (
            <li key={user._id}>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <img src={user.image} alt=""/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const msp = state => {
  return {
    users: Object.values(state.users)
  };
};

const mdp = dispatch => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(msp, mdp)(MainPage);
