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
                <div className="form-style-10"><div className="section"><span>1</span></div></div>
                    <div className="grid-item">
                        <label> Date </label><br></br>
                        <input name='date' type='date' value='2020-02-20' readOnly/>
                    </div>                                      
                    <div className="grid-item">
                        <label> ID </label><br></br>
                        <input name='id' type='number' onChange={this.handleChange} value={this.state.email} required  />
                    </div>                    
                    <div className="grid-item">
                        <label> E-Mail </label><br></br>
                        <input name='email' type='email' onChange={this.handleChange} value={this.state.email} autoComplete="email" required  />
                    </div>                    
                    <div className="grid-item">
                        <label> Phone </label><br></br>                        
                        <input name='phone' type='number' value='1234567890' readOnly/>
                    </div>
                </div>                
                <input className="submit" type='submit' value='Submit'/>
            </form>
        </div>)
    }
}

export default Form;


// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

// const Form = () => {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md='6'>
//           <MDBCard
//             className='card-image'
//             style={{
//               backgroundImage:
//                 'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
//               width: '28rem'
//             }}
//           >
//             <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
//               <div className='text-center'>
//                 <h3 className='white-text mb-5 mt-4 font-weight-bold'>
//                   <strong>SIGN</strong>
//                   <a href='#!' className='green-text font-weight-bold'>
//                     <strong> UP</strong>
//                   </a>
//                 </h3>
//               </div>
//               <MDBInput
//                 label='Your email'
//                 group
//                 type='text'
//                 validate
//                 labelClass='white-text'
//               />
//               <MDBInput
//                 label='Your password'
//                 group
//                 type='password'
//                 validate
//                 labelClass='white-text'
//               />
//               <div className='md-form pb-3'>
//                 <MDBInput
//                   label={
//                     <>
//                       Accept the&nbsp;
//                       <a href='#!' className='green-text font-weight-bold'>
//                         Terms and Conditions
//                       </a>
//                     </>
//                   }
//                   type='checkbox'
//                   id='checkbox1'
//                   labelClass='white-text'
//                 />
//               </div>
//               <MDBRow className='d-flex align-items-center mb-4'>
//                 <div className='text-center mb-3 col-md-12'>
//                   <MDBBtn
//                     color='success'
//                     rounded
//                     type='button'
//                     className='btn-block z-depth-1'
//                   >
//                     Sign in
//                   </MDBBtn>
//                 </div>
//               </MDBRow>
//               <MDBCol md='12'>
//                 <p className='font-small white-text d-flex justify-content-end'>
//                   Have an account?
//                   <a href='#!' className='green-text ml-1 font-weight-bold'>
//                     Log in
//                   </a>
//                 </p>
//               </MDBCol>
//             </div>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default Form;