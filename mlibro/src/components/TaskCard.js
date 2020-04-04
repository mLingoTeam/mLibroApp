import React from 'react'
import {Link} from 'react-router-dom';

const TaskCard = ({props}) => {
    console.log(props);
    const {przedmiot, tytul, termin_oddania, id} = props;

    return(

            <div class="col s12 m6" key={id}>
            <div class="card taskcard">
                <div class="card-content white-text">
                <span class="card-title">{przedmiot}</span>
                <p>{tytul}</p>
                </div>
                <div className="card-action">
                    <div>
                        <p>Termin oddania: {termin_oddania}</p>
                    </div>
                    <Link to={`/zadania/${id}`}>Zobacz szczegóły</Link>
                </div>
            </div>
            </div>
    )
}

export default TaskCard;