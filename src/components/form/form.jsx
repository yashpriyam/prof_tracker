import React from 'react';
import './form.style.scss';

// import Card from '../card/card.component';

class Form extends React.Component {
    constructor(props) {
//        console.log(props);
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',
                       password:''});
    };
    
    handleChange = event => {
        const { value, name } = event.target;
        
        this.setState({ [name]: value });
    };
    
    
    render() {
        return (
        <div>
            <form className="userform" onSubmit={this.handleSubmit}>
                <div className="grid-container">
                    <div className="grid-item">
                        <label> Date </label><br></br>
                        <input 
                            name='date'
                            type='date' 
                            value='2020-02-20'
                            readOnly
                        />
                    </div>                    
                    <div className="grid-item">
                        <label> Name </label><br></br>
                        <input 
                            name='name'
                            type='text' 
                            value='Girish i R'
                            readOnly
                        />
                    </div>                    
                    <div className="grid-item">
                        <label> ID </label><br></br>
                        <input 
                            name='id' 
                            type='number' 
                            onChange={this.handleChange} 
                            value={this.state.email}
                            required  />
                    </div>                    
                    <div className="grid-item">
                        <label> E-Mail </label><br></br>
                        <input 
                            name='email' 
                            type='email' 
                            onChange={this.handleChange} 
                            value={this.state.email} 
                            autoComplete="email" 
                            required  />
                    </div>                    
                    <div className="grid-item">
                        <label> Phone </label><br></br>                        
                        <input
                            name='phone'
                            type='number' 
                            value='1234567890'
                            readOnly
                        />
                    </div>
                    
                    <div className="grid-item">
                        <label> Task </label><br></br>
                        <input 
                            name='task' 
                            type='url' 
                            value={this.state.password} 
                            onChange={this.handleChange} />
                    </div>                    
                    <div className="grid-item">
                        <label> Resume </label><br></br>
                        <input 
                            name='resume' 
                            type='url' 
                            value={this.state.password} 
                            onChange={this.handleChange} />
                    </div>                    
                    <div className="grid-item">
                        <label> Date </label><br></br>
                        <input 
                            name='date'
                            type='date' 
                            value='2020-02-20'
                            readOnly
                        />
                    </div>                    
                    <div className="grid-item">
                        <label> Name </label><br></br>
                        <input                             
                            name='name'
                            type='text' 
                            value='Girish i R'
                            readOnly
                        />
                    </div>                    
                    <div className="grid-item">
                        <label> ID </label><br></br>
                        <input 
                            name='id' 
                            type='number' 
                            onChange={this.handleChange} 
                            value={this.state.email} 
                            autoComplete="email" />
                    </div>                    
                    <div className="grid-item">
                        <label> E-Mail </label><br></br>
                        <input 
                            name='email' 
                            type='email' 
                            onChange={this.handleChange} 
                            value={this.state.email} 
                            autoComplete="email" />
                    </div>                    
                    <div className="grid-item">
                        <label> Phone </label><br></br>
                        <input                           
                            name='phone'
                            type='number' 
                            value='1234567890'
                            readOnly
                        />
                    </div>                    
                    <div className="grid-item">
                        <label> Task </label><br></br>
                        <input 
                            name='task' 
                            type='url' 
                            value={this.state.password} 
                            onChange={this.handleChange} />
                    </div>                    
                    <div className="grid-item">
                        <label> Resume </label><br></br>
                        <input 
                            name='resume' 
                            type='url' 
                            value={this.state.password} 
                            onChange={this.handleChange} />
                    </div>
                </div>                
                <input className="grid-item" type='submit' value='Submit'/>
            </form>
        </div>)
    }
}

export default Form;