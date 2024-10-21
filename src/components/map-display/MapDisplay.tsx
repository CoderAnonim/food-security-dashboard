import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet"
import { Feature } from "geojson"
import { Icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import AfricaShape from "../../assets/africa_countries.json"
import { centroid } from "@turf/turf"
import CountryInfo from "../country-info/CountryInfo"
import { CountriesShape } from "../../interfaces/CountriesShape.interface"
import { useResponsiveZoom } from "../../utils/hooks/useResponsiveZoom"
import "./mapDisplay.css"

const mapboxAccessToken: String =
  "pk.eyJ1Ijoiam9rZXIyOTg4IiwiYSI6ImNtMmc1aXlybjBpMGgyanBmNHVtbzdmYnUifQ.OFmhsJBmTyE27Uovymh9jA"

const MapDisplay = () => {
  const [filteredShapeData, setFilteredShapeData] = useState(null as any)
  const responsiveZoom = useResponsiveZoom()

  const getCountryData = (iso3: string) => {
    return iso3 ? (
      <CountryInfo iso3={iso3} />
    ) : (
      <div>No food security data available</div>
    )
  }

  // Filter out features where geometry is null and only add the countries from African continent
  useEffect(() => {
    const validFeatures = (AfricaShape as CountriesShape).features.filter(
      (feature: any) => feature.geometry !== null
    )

    setFilteredShapeData({
      ...AfricaShape,
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
      className="map-container"
      center={[0, 20]}
      zoom={responsiveZoom}
      maxZoom={8}
      worldCopyJump={true}
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
