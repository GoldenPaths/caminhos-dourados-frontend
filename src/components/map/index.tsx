import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./map.css";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: import.meta.env.VITE_GOOGLE_MAPS_API_ID,
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const position = {
    lat: -23.504192,
    lng: -46.447019,
  };
  return (
    <div className="map">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: "Posição de teste",
                className: "map-marker",
              },
            }}
          ></Marker>
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Map;
