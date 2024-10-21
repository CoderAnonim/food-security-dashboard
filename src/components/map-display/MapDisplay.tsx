import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet"
import { Feature } from "geojson"
import { Icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import countriesShape from "../../assets/countries.json"
import { centroid } from "@turf/turf"
import { africa_iso_a3 } from "../../utils/staticVariables"
import CountryInfo from "../country-info/CountryInfo"
import { CountriesShape } from "../../interfaces/CountriesShape.interface"

const mapboxAccessToken: String | undefined = import.meta.env.VITE_MapBoxToken

const MapDisplay = () => {
  const [filteredShapeData, setFilteredShapeData] = useState(null as any)

  const getCountryData = (iso3: string) => {
    return iso3 ? (
      <CountryInfo iso3={iso3} />
    ) : (
      <div>No food security data available</div>
    )
  }

  // Filter out features where geometry is null and only add the countries from African continent
  useEffect(() => {
    const validFeatures = (countriesShape as CountriesShape).features.filter(
      (feature: any) =>
        feature.geometry !== null &&
        africa_iso_a3.includes(feature.properties.ISO_A3)
    )

    setFilteredShapeData({
      ...countriesShape,
      features: validFeatures,
    })
  }, [])

  // Calculate centroid of each country to place markers
  const getCentroid = (feature: Feature) => {
    const centroId = centroid(feature)
    return centroId.geometry.coordinates
  }

  // Style for GeoJSON features (Africa boundaries)
  const geoJSONStyle = {
    fillColor: "lightblue",
    weight: 2,
    color: "blue",
    fillOpacity: 0.1,
  }

  return (
    <MapContainer
      center={[0, 20]}
      zoom={4}
      maxZoom={10}
      style={{ height: "100vh", width: "100vw" }}
      worldCopyJump={false}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`}
        id="mapbox/streets-v11"
      />
      {/* Render Africa shape */}
      {filteredShapeData && (
        <GeoJSON data={filteredShapeData} style={geoJSONStyle} />
      )}
      {/* Render country markers */}
      {filteredShapeData &&
        filteredShapeData.features.map((feature: Feature, index: number) => {
          const [lng, lat] = getCentroid(feature)
          return (
            <Marker
              key={index}
              position={[lat, lng]} // Using the centroid as the marker position
              icon={
                new Icon({
                  iconUrl:
                    "https://leafletjs.com/examples/custom-icons/leaf-red.png",
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            >
              <Popup minWidth={150} maxWidth={300}>
                {getCountryData(feature.properties!["ISO_A3"])}
              </Popup>
            </Marker>
          )
        })}
    </MapContainer>
  )
}

export default MapDisplay