import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet';

import './Map.css'
import {useLocalStorage} from "../../hooks/localStorage";

function Map({center, items, zoom, onClickMarker, context, offset}) {
    const [missionsAccomplished,] = useLocalStorage('missions', [])

    const newIcon = (iconUrl, id) => L.icon({
        iconUrl,
        iconAnchor: [15, 15],
        iconSize: [30, 30],
        className : missionsAccomplished.includes(id) ? 'map_icon-accomplish' : 'map_icon'
    });

    const itemsFormatted = items.map((item) => ({
        ...item,
        icon: context === 'mission' ? new L.Icon.Default() : newIcon(item.icon, item.id)
    }))

  return (
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className='map'>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {itemsFormatted.map(({coords, name, icon, id}) => {
              return (
                  <Marker
                      position={coords}
                      key={name}
                      icon={icon}
                      eventHandlers={{
                          click: () => id ? onClickMarker(id) : () => {},
                      }}

                  >
                      <Tooltip direction="top" offset={offset}>{name}</Tooltip>
                  </Marker>
              )
          })}
      </MapContainer>
  );
}

export default Map;
