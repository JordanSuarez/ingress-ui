import { useHistory, generatePath } from "react-router-dom";

import '../App.css';
import {missions} from '../data'
import {useEffect} from "react";
import Map from "../components/Map";

function Missions() {
  const history = useHistory()

  const handleClick = (id) => history.push(generatePath('/mission/:id', {id}))

  useEffect(() => {

  }, [])

  return (
    <div className="home">
      <Map items={missions} center={[48.468021, 6.322565]} zoom={8} onClickMarker={handleClick} context='home'/>
    </div>
  );
}

export default Missions;
