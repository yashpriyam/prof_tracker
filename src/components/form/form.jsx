import React from 'react';
import './form.style.scss';
import Collapsible from 'react-collapsible';

// import Card from '../card/card.component';

class Form extends React.Component {
    constructor(props) {
//        console.log(props);
        super(props);
        this.state = {
            email: '',
            password: '',
            inputLinkClicked: false,
            count: 1
        }
    }
    
    handleAddSecondInput = () => {
        this.setState({
            inputLinkClicked: true,
            count: count+1
        })
    };

    onSecondChange = () => {
        this.setState({ inputLinkClicked: false });
    };

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
            <form onSubmit={this.handleSubmit}>                
                <div className="grid-container">                 
                  {/* <div className="grid-item"><div className="form-style-10"><div className="section"><span>1</span></div></div></div> */}
                  {/* <div className="grid-item">
                      <label> ID </label><br></br>
                      <input name='id' type='number' onChange={this.handleChange} value={this.state.email} required  />
                  </div>                     */}
                   <div className="form-style-3">
                    <div className="grid-item"><div className="form-style-10"><div className="section"><span>0</span></div></div></div>
                        <fieldset>
                            <legend>User Details</legend>
                            <Collapsible trigger="User Name" triggerTagName="fieldset">
                                <div className='userinfo'>
                                    <label> name </label>
                                    <input name='date' type='text' value='Girish i R' readOnly/>               
                                    <label> id </label>
                                    <input name='date' type='text' value='123456789' readOnly/>               
                                    <label> email </label>
                                    <input name='date' type='text' value='girishce4455@gmail.com' readOnly/>
                                    <label> link </label>
                                    <input name='date' type='text' value='new' readOnly/>
                                    <label> resume </label>
                                    <input name='date' type='text' value='https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx' readOnly/>
                                    <label> Email </label>
                                    <input name='date' type='text' value='123456789' readOnly/>
                                    <label> First_Name </label>
                                    <input name='date' type='text' value='First_Name' readOnly/>
                                    <label> Last_Name </label>
                                    <input name='date' type='text' value='Last_Name' readOnly/>
                                    <label> Phone_Number </label>
                                    <input name='date' type='text' value='Phone_Number' readOnly/>
                                    <label> How_did_you_come_by_this_Job_Opportunity </label>
                                    <input name='date' type='text' value='How_did_you_come_by_this_Job_Opportunity' readOnly/>
                                    <label> Where_did_you_see_our_Ad </label>
                                    <input name='date' type='text' value='Where_did_you_see_our_Ad' readOnly/>
                                    <label> Which_of_our_recruitment_partners_redirected_you_here </label>
                                    <input name='date' type='text' value='Which_of_our_recruitment_partners_redirected_you_here' readOnly/>
                                    <label> Which_Social_Medium_did_you_notice_us_on </label>
                                    <input name='date' type='text' value='Which_Social_Medium_did_you_notice_us_on' readOnly/>
                                    <label> Which_Job_Portal_did_you_find_our_listing_on </label>
                                    <input name='date' type='text' value='Which_Job_Portal_did_you_find_our_listing_on' readOnly/>
                                    <label> Referrer_Name </label>
                                    <input name='date' type='text' value='Referrer_Name' readOnly/>
                                    <label> Referrer_Employee_ID </label>
                                    <input name='date' type='text' value='Referrer_Employee_ID' readOnly/>
                                    <label> Upload_your_CV_Resume </label>
                                    <input name='date' type='text' value='Upload_your_CV_Resume' readOnly/>
                                    <label> Have_you_ever_downloaded_and_used_BYJUS_The_Learning_App </label>
                                    <input name='date' type='text' value='Have_you_ever_downloaded_and_used_BYJUS_The_Learning_App' readOnly/>
                                    <label> Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas </label>
                                    <input name='date' type='text' value='Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas' readOnly/>
                                    <label> Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas </label>
                                    <input name='date' type='text' value='Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas' readOnly/>
                                    <label> Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas </label>
                                    <input name='date' type='text' value='Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas' readOnly/>
                                    <label> Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas </label>
                                    <input name='date' type='text' value='Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas' readOnly/>
                                    <label> What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below </label>
                                    <input name='date' type='text' value='What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below' readOnly/>
                                    <label> What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below </label>
                                    <input name='date' type='text' value='What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below' readOnly/>
                                    <label> What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below </label>
                                    <input name='date' type='text' value='What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below' readOnly/>
                                    <label> Why_do_you_want_to_join_BYJUS </label>
                                    <input name='date' type='text' value='Why_do_you_want_to_join_BYJUS' readOnly/>
                                    <label> Upload_your_task </label>
                                    <input name='date' type='text' value='Upload_your_task' readOnly/>
                                    <label> IP </label>
                                    <input name='date' type='text' value='IP' readOnly/>
                                    <label> Edit_Link </label>
                                    <input name='date' type='text' value='Edit_Link' readOnly/>
                                </div>
                            </Collapsible>                         
                        </fieldset>
                   </div>
                   
                   <div class="form-style-3">
                    <div className="grid-item"><div className="form-style-10"><div className="section"><span>1</span></div></div></div>
                    <fieldset>
                        <legend>First Round Process</legend>                        
                        {/* <div className="form-style-10">
                            <div className="section">
                                <span> Face-To-Face Interview </span>
                            </div>
                        </div>                         */}
                        <label for="field1"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
                        <label for="field2"><span>Email <span class="required">*</span></span><input type="email" class="input-field" name="field2" value="" /></label>
                        <label for="field3"><span>Phone <span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" /></label>
                        <label for="field4"><span>Subject</span>
                        <select name="field4" class="select-field">
                            <option value="Appointment">Appointment</option>
                            <option value="Interview">Interview</option>
                            <option value="Regarding a post">Regarding a post</option>
                        </select></label>
                        {/* <legend>Message</legend> */}
                        <label for="field6"><span>Message <span class="required">*</span></span>
                        <textarea name="field6" class="textarea-field"></textarea></label>
                        <label><span> </span><input type="submit" value="Submit" /></label>
                    </fieldset>
                   </div>
                   <div class="form-style-3">
                    <div className="grid-item"><div className="form-style-10"><div className="section"><span>2</span></div></div></div>
                    <fieldset>
                        <legend>Second Round Process</legend>
                        <label for="field1"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
                        <label for="field2"><span>Email <span class="required">*</span></span><input type="email" class="input-field" name="field2" value="" /></label>
                        <label for="field3"><span>Phone <span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" /></label>
                        <label for="field4"><span>Subject</span>
                        <select name="field4" class="select-field">
                            <option value="Appointment">Appointment</option>
                            <option value="Interview">Interview</option>
                            <option value="Regarding a post">Regarding a post</option>
                        </select></label>
                        {/* <legend>Message</legend> */}
                        <label for="field6"><span>Message <span class="required">*</span></span>
                        <textarea name="field6" class="textarea-field"></textarea></label>
                        <label><span> </span><input type="submit" value="Submit" /></label>
                        {
                            this.state.inputLinkClicked
                            ?
                            (<input type="text" class="input-field" name="field3" value="" /> )
                            : 
                            (<div></div>) 
                        }

                        <button type="button" className="make-button-link" onClick={this.handleAddSecondInput}>
                            Add a condition
                        </button>
                    </fieldset>
                   </div>
                   <div class="form-style-3">
                    <div className="grid-item"><div className="form-style-10"><div className="section"><span>3</span></div></div></div>
                    <fieldset>
                        <legend>Third Round Process</legend>
                        <label for="field1"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
                        <label for="field2"><span>Email <span class="required">*</span></span><input type="email" class="input-field" name="field2" value="" /></label>
                        <label for="field3"><span>Phone <span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" /></label>
                        <label for="field4"><span>Subject</span>
                        <select name="field4" class="select-field">
                            <option value="Appointment">Appointment</option>
                            <option value="Interview">Interview</option>
                            <option value="Regarding a post">Regarding a post</option>
                        </select></label>
                        {/* <legend>Message</legend> */}
                        <label for="field6"><span>Message <span class="required">*</span></span>
                        <textarea name="field6" class="textarea-field"></textarea></label>
                        <label><span> </span><input type="submit" value="Submit" /></label>
                    </fieldset>
                   </div>                   
                  {/* <div className="grid-item">
                      <label> Phone </label><br></br>                        
                      <input name='phone' type='number' value='1234567890' readOnly/>
                  </div> */}
                </div>                
                <input className="submit" type='submit' value='Submit'/>
            </form>
        );
    }
}



export default Form;