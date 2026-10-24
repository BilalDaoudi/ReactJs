import Menu from './Menu';
import {Link} from 'react-router-dom';
export default function Personnes(props){
    return (
        <div>
            <Menu />
            <div>Personnes :</div>
            <div className='row'>
                {props.personnes.map((p,i) =>
                <div className='col card'>
                    <div className='card-title'>{p.Nom}</div>
                    <p>Né le : {p.DateNaissance}</p>
                    <Link to={`/Personne/${p.id}`}>Plus</Link>
                </div>
                )}
                
            </div>
        </div>
    )
}