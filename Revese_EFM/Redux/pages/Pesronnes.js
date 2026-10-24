import Menu from "../Component/Menu";
import Personne from "../Component/Personne";
import { useSelector} from "react-redux";
export default function Personnes() {
  const personnes = useSelector((data) => data);
  return (
    <div >
      <Menu />
      <div>Personnes : </div>
      <div className="row">
        {personnes.map((p,i) => <Personne personne={p} key={i}/>)}

      </div>
    </div>
  );
}
