import Menu from './Menu';
import {useParams} from 'react-router-dom';
export default function PersonneDetail(props){
    const {id} = useParams();
    const pesronne = props.personnes.find(p => p.id === parseInt(id));
    // alert(personne);
    return (
        <div>
            <Menu />
            <div className='col card'>
                    <div className='card-title'>{pesronne.Nom}</div>
                    <p>Né le : {pesronne.DateNaissance}</p>
                    <p>Nationalité : {pesronne.Nationalite}</p>
                    <p>Genre : {pesronne.Genre}</p>
                    <p>Loisir : {pesronne.Loisir.join('-')}</p>
                    <p>Observation : {pesronne.Observation}</p>
                </div>
        </div>
    )
}