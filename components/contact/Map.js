import { GoogleMap, LoadScript, CircleF } from "@react-google-maps/api";
import MapStyle from "./MapStyle";

const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;

const containerStyle = {
  width: "100%",
  height: "400px",
};

// const center = {
//   lat: 37.06669,
//   lng: -80.44114,
// };
const citymap = {
    center: { lat: 37.132142860702864, lng: -80.39228332643232 },
    population: 30000,
};

const Map = () => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <LoadScript googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={citymap.center}
          zoom={10.25}
          options={{
            styles: MapStyle,
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeId: 'hybrid',
          }}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <CircleF
            center={citymap.center}
            radius={Math.sqrt(citymap.population) * 100}
            options={{
              strokeColor: "#37614A",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "lightGreen",
              fillOpacity: 0.45,
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
