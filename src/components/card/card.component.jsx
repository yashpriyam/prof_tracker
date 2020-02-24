import React from 'react';
import { connect } from 'react-redux';
// import { auth } from '../../firebase/firebase.utils';
//import { Switch, Route } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
// import Form from '../form/form';
import './card.styles.css';
import { withRouter } from 'react-router-dom';

const Card = ( props ) => (
  // console.log(props.currentUser),
  
 <div className='card-container' onClick={() => props.currentUser ? props.history.push('/userform') : props.history.push('/signin') }>
   <img
     alt='monster'
     src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
   />
   <h2> {props.monster.name} </h2>
   <p> {props.monster.email} </p>
   {/* <button onClick={() => props.history.push(`${props.monster.resume}`)}>Download Resume</button>
   <button onClick={() => props.history.push(`${props.monster.task}`)}>Download Task</button> */}
   <button><a href={`${props.monster.resume}`} target="_blank" rel="noopener noreferrer">Download Resume</a></button>
   <button><a href={`${props.monster.task}`} target="_blank" rel="noopener noreferrer">Download {`${props.monster.name}'s`} Task</a></button>
   
   {/* <Link to='/'>Resume</Link> */}
 </div>
);

// class Card extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
//     render() {
//         return (
//             <div className='card-container' onClick={() => this.props.history.push('/userform')}>
//                 <img
//                   alt='monster'
//                   src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}
//                 />
//                 <h2> {this.props.monster.name} </h2>
//                 <p> {this.props.monster.email} </p>
//                 {/* <button onClick={() => props.history.push(`${props.monster.resume}`)}>Download Resume</button>
//                 <button onClick={() => props.history.push(`${props.monster.task}`)}>Download Task</button> */}
//                 <button><a href={`${this.props.monster.resume}`} target="_blank" rel="noopener noreferrer">Download Resume</a></button>
//                 <button><a href={`${this.props.monster.task}`} target="_blank" rel="noopener noreferrer">Download {`${props.monster.name}'s`} Task</a></button>

//                 {/* <Link to='/'>Resume</Link> */}
//             </div>            
//         )
//     }
// }

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(withRouter(Card));