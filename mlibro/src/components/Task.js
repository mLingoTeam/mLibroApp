import React from 'react';
const Task = ({props}) => {

    const {przedmiot, tytul, tresc, data_zadania, termin_oddania, id} = props;

    return(
        <div className="task--card">
            <ul class="collection with-header">
                <li class="collection-header"><h5>{przedmiot}</h5></li>
                <li class="collection-item">{tytul}</li>
                <li class="collection-item">{tresc}</li>
                <li class="collection-item">Od: {data_zadania}</li>
                <li class="collection-item">Do: {termin_oddania}</li>
            </ul>
        </div>
    )
}

export default Task;