import React from 'react';
import Card from './Card';
import '../mainfile/styles.css';


const CardList = ({robots})=>{
    return(
            <div>
                {
                    robots.map((user, i) => {
                        return(
                                    <Card
                                    key={i}
                                    id={robots[i].id}
                                    name={robots[i].first_name}
                                    lname={robots[i].last_name}
                                    email={robots[i].email}
                                    />
                            );
                    })
                }
                <p className='copy'style={{  padding:'5px 0px',height: '30px', color: 'grey' }} >Copyright &copy; Archit</p>
            </div>
        );
}

export default CardList;
