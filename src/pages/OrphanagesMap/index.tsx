import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../images/map-marker.svg';

import './styles.css';

const OrphanagesMap: React.FC = () => (
  <div id="page-map">
    <aside>
      <header>
        <img src={mapMarkerImg} alt="Happy" />
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>
      </header>

      <footer>
        <strong>Campo Grande</strong>
        <span>Mato Grosso do Sul</span>
      </footer>
    </aside>

    <Map
      center={[-20.480722, -54.7756222]}
      zoom={11}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
    </Map>

    <Link to="aaa" className="create-orphanage">
      <FiPlus size={32} color="#FFF" />
    </Link>
  </div>
);

export default OrphanagesMap;
