import React from 'react';
import {MdChevronLeft} from 'react-icons/md'
import {Link} from 'react-router-dom'
const Task = ({props}) => {

    const {przedmiot, tytul, tresc, data_zadania, termin_oddania, id} = props;
    return(
        <div className="task--card">
            <ul className="collection with-header">
                <li className="collection-header"><h5>{przedmiot}</h5></li>
                <li className="collection-item">{tytul}</li>
                <li className="collection-item">{tresc}</li>
                <li className="collection-item">Od: {data_zadania}</li>
                <li className="collection-item">Do: {termin_oddania}</li>
            </ul>
            <Link className="button-mlibro" to="/zadania"><MdChevronLeft/></Link>
        </div>
    )
}

export default Task;