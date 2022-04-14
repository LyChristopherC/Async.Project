import React from 'react';
import L from 'leaflet';
import Locate from 'leaflet.locatecontrol';

class Map extends React.Component {
  componentDidMount() {
    // Create map using mapbox tile layer. Replace Access Token with your access token.
    let map = L.map('map').setView([51.505, -0.09], 13);
    let marker = L.marker([51.5, -0.09]).addTo(map);
    const lc = new Locate();
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1IjoibHljaHJpc3RvcGhlcmMiLCJhIjoiY2wxeHE0Y20wMDU5YjNmbWtrZTBkNnNzdyJ9.7VuIvPdDXVvlN4I5UOll-Q',
      }
    ).addTo(map);

    lc.addTo(map);
  }
  render() {
    return <div id="map" />;
  }
}
export default Map;

// import React, { useEffect, useRef } from 'react';
// import reactDom from 'react-dom';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

// import L from 'leaflet';

// // import LocateControl from 'react-leaflet-locate-control';

// function Map() {
//   // const mapRef = useRef();

//   // useEffect(() => {
//   //   const { current = {} } = mapRef;
//   //   const { leafletElement: map } = current;
//   //   map.locate({
//   //     setView: true,
//   //   });
//   // }, []);
//   // L.control.locate().addTo(map);

//   return (
//     // const locateOptions = {
//     //   position: 'topright',
//     //   strings: {
//     //     title: 'Show me where I am, yo!',
//     //   },
//     //   onActivate: () => {}, // callback before engine starts retrieving locations
//     // };
//     <Map id="map" center={[51.505, -0.09]} zoom={13}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {/* <Marker position={[51.505, -0.09]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker> */}
//       {/* <LocateControl options={locateOptions} startDirectly /> */}
//     </Map>
//   );
// }

// export default Map;
