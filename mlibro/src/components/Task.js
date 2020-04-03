import React from 'react';

const Task = ({props}) => {

    const {przedmiot, tytul, tresc, data_zadania, termin_oddania, id} = props;

    return(
        <div>
               <h5>{przedmiot}</h5>
               <p>{tresc}</p>
        </div>
    )
}

export default Task;