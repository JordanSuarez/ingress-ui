import axios from "axios";
import {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";

import Map from '../../common/components/Map/Map'
import Body from "../../common/components/Body/Body";
import {useLocalStorage} from "../../common/hooks/localStorage";
import {MISSIONS} from "../../common/routing/routesResolver";
import './Mission.css'

function Mission() {
    const { id } = useParams();
    const [mission, setMission] = useState({name: '', waypoints: []})
    const [isLoading, setIsLoading] = useState(true)
    const [missionsAccomplished, setMissionsAccomplished] = useLocalStorage('missions', [])

    const isExist = missionsAccomplished.includes(mission.id)

    const getMission = async () => {
        try {
            const {data} = await axios.get(`http://localhost:8741/mission/${id}`)
            return setMission(data)
        } catch (e) {
            return {name: '', waypoints: []}
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getMission()
    }, [isLoading])

    const handleClick = () => {
        if (!isExist) {
            return setMissionsAccomplished([...missionsAccomplished, mission.id])
        }
        const filteredMissions = missionsAccomplished.filter((id) => id !== mission.id)

        return setMissionsAccomplished(filteredMissions)
    }

  return (
      <Body isLoading={isLoading}>
          <div className="mission">
              <section className='mission_header'>
                  <h2>Étapes de {mission.name}</h2>
                  <div>
                      <button
                          onClick={handleClick}
                          className={!isExist ? 'mission_header_button' : 'mission_header_button mission_header_button--cancel'}
                      >
                          {isExist ? "Annuler la mission" : "Accomplir la mission"}
                      </button>
                      <Link to={MISSIONS} className='mission_header_return'>Retour</Link>
                  </div>
              </section>
              <section>
                  <ul>
                      {mission.waypoints.map(({name, type}) => (
                          <li key={name}>
                              {name} - {type}
                          </li>
                      ))}
                  </ul>
              </section>
              <section className="mission_map">
              <Map items={mission.waypoints} center={mission.coords} zoom={15} context='mission'/>
          </section>
          </div>
      </Body>
  );
}

export default Mission;
