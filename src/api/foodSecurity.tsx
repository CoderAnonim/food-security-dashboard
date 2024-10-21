import axios from "axios"
import { CountryData } from "../interfaces/CountryInfo.interface"
import { IPCDataPeaks } from "../interfaces/IPCDataPeaks.interface"
import { CountryFoodConsumption } from "../interfaces/CountryFoodConsumption.interface"

const BASE_URL = "https://api.hungermapdata.org"

export const fetchCountryInfo = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/v2/info/country`)
    return response.data as CountryData
  } catch (error) {
    console.error("Error fetching country data:", error)
  }
}

export const fetchIPCData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/v1/ipc/peaks`)
    return response.data as IPCDataPeaks
  } catch (error) {
    console.error("Error fetching food security data:", error)
  }
}

export const fetchFoodSecurity = async (countryCode: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/v1/foodsecurity/country/${countryCode}`
    )
    return response.data as CountryFoodConsumption
  } catch (error) {
    console.error("Error fetching country food security data:", error)
  }
}
