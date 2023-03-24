import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Spinner from "./Spinner"; // componente para exibir o spinner de carregamento

// Corrige um erro de ícone que ocorre ao usar o pacote Leaflet com o pacote create-react-app
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  // iconUrl: require("./icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

const icon = new L.Icon({
  iconUrl: require("./icon.png"), // substitua pelo caminho do seu próprio ícone
  iconSize: [25, 41], // tamanho do ícone
  iconAnchor: [12, 41], // ponto de ancoragem do ícone
  popupAnchor: [0, -35] // ponto de ancoragem do popup
});

class Map extends Component {
  state = {
    loading: true,
    center: [0, 0],
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          loading: false,
          center: [position.coords.latitude, position.coords.longitude],
        });
      },
      (error) => {
        console.error(error);
        this.setState({ loading: false });
      },
      { enableHighAccuracy: true }
    );
  }

  render() {
    const { loading, center } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <MapContainer
        center={center}
        zoom={13}
        // scrollWheelZoom={false}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center} icon={icon}>
          <Popup>
            Nome do local <br /> Informação que a gente quiser
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;
