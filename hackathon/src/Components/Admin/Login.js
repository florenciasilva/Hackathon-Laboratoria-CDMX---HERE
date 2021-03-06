import React, {Component} from 'react';
import {Row, Input, Button, Col} from 'react-materialize';
import Firebase from '../../config';
import '../Global/Login.css';

class loginInput extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
        email: '',
        password: '',
        }
    }

    login(event) {
        event.preventDefault();
        Firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            window.location.assign('/dashboard-admin');
        }).catch((err) => {
            alert(err.code);
        });
    }

    handleOnChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="background">
            <div className='inputContainer'>

                <form>
                <h5>Administración</h5>
                    <Row className="white-background"> 
                        <Col s={12} m={12} l={12}>
                        <Input value={this.state.email} onChange={this.handleOnChange} className='inputHover' s={10}  m={10} l={10} label="Correo" name='email' type='email' validate></Input>
                        </Col>
                    </Row>
                    <Row className="white-background">
                    <Col s={12} m={12} l={12}>
                        <Input value={this.state.password} onChange={this.handleOnChange} className='inputHover' s={10}  m={10} l={10} label="Contraseña" validate name='password' type='password'></Input>
                    </Col>
                    </Row >
                    <Row className="white-background">
                    <Col s={12} m={12} l={12} className='center'>
                        <Button type='submit' onClick={this.login} s={10}  m={10} l={10} waves='light' className='signInButton purple'>Conectate</Button>
                        </Col>
                    </Row>
                </form>
            </div>
            </div>
            )
    }
}
export default loginInput