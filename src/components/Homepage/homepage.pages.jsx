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
          resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx'},
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
          resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx'},
          {name: 'Gourab Sen', 
          id: 32, 
          email: 'gsen42272@gmail.com', 
          task: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/23_Sowjanya Atyam.docx', 
          resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx'},
          {name: 'Gourab Sen', 
          id: 23, 
          email: 'gsen42272@gmail.com', 
          task: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/23_Sowjanya Atyam.docx', 
          resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx'},
          {name: 'Gourab Sen', 
          id: 35, 
          link: 'porcupine',
          email: 'gsen42272@gmail.com', 
          task: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/23_Sowjanya Atyam.docx', 
          resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx'},
          {name: 'Gourab Sen', 
          id: 5, 
          email: 'gsen42272@gmail.com', 
          task: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/23_Sowjanya Atyam.docx', 
          resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx'},
          {name: 'Gourab Sen', 
          id: 78, 
          email: 'gsen42272@gmail.com', 
          task: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/23_Sowjanya Atyam.docx', 
          resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx'}],
          searchField: ''
        };
    }
    
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