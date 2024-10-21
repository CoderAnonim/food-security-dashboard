import { useEffect, useState } from "react"
import { Chart } from "react-google-charts"
import { fetchFoodSecurity } from "../../api/foodSecurity"

// Chart options for visual representation
const chartOptions = {
  title: "Food Security Metrics",
  hAxis: { title: "Metric" },
  vAxis: { title: "Value" },
  legend: "none",
}

const CountryInfo = ({ iso3 }: { iso3: string }) => {
  const [countryData, setCountryData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  // Fetch country data based on the ISO3 code dynamically
  useEffect(() => {
    const fetchCountryFoodSecurity = async () => {
      const response = await fetchFoodSecurity(iso3)
      if (response) setCountryData(response?.body)
      setLoading(false)
    }

    if (iso3) fetchCountryFoodSecurity()
  }, [iso3])

  if (loading) return <p>Loading country data...</p>
  if (!countryData || !countryData.metrics)
    return <p>No data available for this country.</p>

  const {
    country,
    date,
    metrics: { fcs, rcsi, healthAccess, marketAccess } = {},
  } = countryData

  const hasMetrics = fcs || rcsi || healthAccess || marketAccess

  const chartData = [
    ["Metric", "Value"],
    fcs ? ["Food Consumption Score", fcs.prevalence] : null,
    rcsi ? ["Coping Strategy Index", rcsi.prevalence] : null,
    healthAccess ? ["Health Access", healthAccess.prevalence] : null,
    marketAccess ? ["Market Access", marketAccess.prevalence] : null,
  ].filter(Boolean) // Filter out null values for missing metrics

  return (
    <div>
      <h2>
        {country.name} ({country.iso3})
      </h2>
      <p>
        <strong>Last Update:</strong> {date} <br />
        {fcs ? (
          <>
            <strong>Food Consumption Score (FCS):</strong> {fcs.people} people (
            {(fcs.prevalence * 100).toFixed(2)}%) <br />
          </>
        ) : (
          <p>Food Consumption Score: Data unavailable</p>
        )}
        {rcsi ? (
          <>
            <strong>Reduced Coping Strategy Index (rCSI):</strong> {rcsi.people}{" "}
            people ({(rcsi.prevalence * 100).toFixed(2)}%) <br />
          </>
        ) : (
          <p>Reduced Coping Strategy Index: Data unavailable</p>
        )}
        {healthAccess ? (
          <>
            <strong>Health Access:</strong> {healthAccess.people} people (
            {(healthAccess.prevalence * 100).toFixed(2)}%) <br />
          </>
        ) : (
          <p>Health Access: Data unavailable</p>
        )}
        {marketAccess ? (
          <>
            <strong>Market Access:</strong> {marketAccess.people} people (
            {(marketAccess.prevalence * 100).toFixed(2)}%) <br />
          </>
        ) : (
          <p>Market Access: Data unavailable</p>
        )}
      </p>

      {hasMetrics ? (
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="200px"
          data={chartData}
          options={chartOptions}
        />
      ) : (
        <p>No metrics available for this country.</p>
      )}
    </div>
  )
}

export default CountryInfo
