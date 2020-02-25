import React from 'react';

import { CardList } from '../../components/card-list/card-list.component';
import { SearchBox } from '../../components/search-box/search-box.component';
import Header from '../../components/header/header.component';


class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {            
          monsters: [{name: 'Girish i R', 
          id: 1, 
          email: 'girishce4455@gmail.com',
          link: 'new',
          task: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/23_Sowjanya Atyam.docx', 
          resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx',
          Email: " ",
          First_Name: "First_Name ",
          Last_Name:"Last_Name ",
          Phone_Number:" Phone_Number",
          How_did_you_come_by_this_Job_Opportunity:"How_did_you_come_by_this_Job_Opportunity ",
          Where_did_you_see_our_Ad:" Where_did_you_see_our_Ad",
          Which_of_our_recruitment_partners_redirected_you_here:"Which_of_our_recruitment_partners_redirected_you_here",
          Which_Social_Medium_did_you_notice_us_on:"Which_Social_Medium_did_you_notice_us_on",
          Which_Job_Portal_did_you_find_our_listing_on:"Which_Job_Portal_did_you_find_our_listing_on",
          Referrer_Name:"Referrer_Name",
          Referrer_Employee_ID:"Referrer_Employee_ID",
          Upload_your_CV_Resume:"Upload_your_CV_Resume",
          Have_you_ever_downloaded_and_used_BYJUS_The_Learning_App:"Have_you_ever_downloaded_and_used_BYJUS_The_Learning_App", 
          Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas:"Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas",
          Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas:"Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas",
          Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas:"Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas",
          Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas:"Grades_1_to_12_What_is_your_proficiency_level_in_the_following_areas",
          What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below:"What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below",
          What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below:"What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below",
          What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below:"What_is_your_interest_level_in_contributing_to_the_grade_groups_listed_below",
          Why_do_you_want_to_join_BYJUS: "Why_do_you_want_to_join_BYJUS",
          Upload_your_task:'Upload_your_task',
          IP: 'IP',
          Edit_Link:"Edit_Link"},
          {name: 'Sivakumar Manickam', 
          id: 2, 
          email: 'siv14.man@gmail.com',
          link: 'newline',
          task: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/23_Sowjanya Atyam.docx', 
          resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx'},
          {name: 'Gourab Sen', 
          id: 36, 
          email: 'gsen42272@gmail.com', 
          task: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/23_Sowjanya Atyam.docx', 
          resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx'}
          ],
          searchField: ''
        };
    }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ monsters: users }));
  // }
  
    
    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
    };

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
                                                 monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
        return (
          <div className='App'>
            <Header />
            <SearchBox onSearchChange={this.onSearchChange} />
            <CardList monsters={filteredMonsters} />
          </div>
        )
    }
}
  
export default HomePage;