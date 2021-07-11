import axios from 'axios';
import {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";

import './Missions.css';
import Map from "../../common/components/Map/Map";
import Body from "../../common/components/Body/Body";
import {getMissionRoute} from "../../common/routing/routesResolver";

function Missions() {
  const history = useHistory()
  const [missions, setMissions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleClick = (id) => history.push(getMissionRoute(id))

  const getMissions = async () => {
    try {
        const {data} = await axios.get('http://localhost:8741/missions')

        return setMissions(data)
    } catch (e) {
      return []
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMissions();
  }, [isLoading])

  return (
    <Body isLoading={isLoading}>
      <div className="missions_map">
        <Map items={missions} center={[48.468021, 6.322565]} zoom={8} onClickMarker={handleClick} context='home' offset={[0, -11]}/>
      </div>
    </Body>
  );
}

export default Missions;
