import { useState } from 'react';
import Menu from '../Component/Menu';
import {useSelector,useDispatch} from 'react-redux';
import { AjouterPersonne } from '../config/actions';
import  {useNavigate} from 'react-router-dom';

export default function Ajouter() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newpersonne , setNewPersonne] = useState({
        id: useSelector(data => data.length === 0 ? 1 : data[data.length - 1].id +1),
        Nom: "",
        DateNaissance: "",
        Genre: "",
    })

    function Ajouter(e){
        e.preventDefault();
        dispatch(AjouterPersonne(newpersonne));
        setNewPersonne({...newpersonne,id : newpersonne.id + 1} );
        navigate("/Personnes");
    }
    return (
        <div>
            <Menu />
        <div className='text-center text-warning'> <b>Ajouter Personne : </b></div>
        <div>
            <form onSubmit={(e) => Ajouter(e)}>
                <div className='form-group m-3'>
                    <label className='form-label'>Id :</label>
                    <input type='text' className='form-control' readOnly value={newpersonne.id} />
                </div>
                <div className='form-group m-3'>
                    <label className='form-label'>Nom :</label>
                    <input type='text' className='form-control' onChange={(e) => setNewPersonne({...newpersonne,Nom:e.target.value})} />
                </div>
                <div className='form-group m-3'>
                    <label className='form-label'>Date de Naissance :</label>
                    <input type='date' className='form-control'   onChange={(e) => setNewPersonne({...newpersonne,DateNaissance:e.target.value})}/>
                </div>
                <div className='form-group m-3'>
                    <label className='form-label'>Genre :</label> &nbsp;&nbsp;&nbsp;
                    <input type='radio'  value='Homme' onChange={(e) => setNewPersonne({...newpersonne,Genre:e.target.value})}/> Homme&nbsp;&nbsp;
                    <input type='radio'  value='Femme' onChange={(e) => setNewPersonne({...newpersonne,Genre:e.target.value})} /> Femme
                </div>

                <div className='form-group m-3'>
                    <input type='submit' className='btn btn-primary' value="Ajouter"  />
                </div>
            </form>
        </div>
        </div>
    );
}
