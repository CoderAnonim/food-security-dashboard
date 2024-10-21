export interface ClimateData {
  statusCode: string
  body: ClimateBody
}

export interface ClimateBody {
  countries: CountryData[]
}

export interface CountryData {
  country: Country
  dataPoints: DataPoint[]
}

export interface Country {
  id: number
  name: string
  iso3: string
  iso2: string
}

export interface DataPoint {
  dekadStart: string
  inSeason: boolean
  rainfall: Rainfall
  ndvi: Ndvi
  overall: Overall
}

export interface Rainfall {
  peopleDry: number
  peopleWet: number
  peopleAnomaly: number
  prevalenceDry: number
  prevalenceWet: number
  prevalenceAnomaly: number
}

export interface Ndvi {
  peopleDry: number
  peopleAnomaly: number
  prevalenceDry: number
  prevalenceAnomaly: number
}

export interface Overall {
  peopleDry: number
  peopleWet: number
  peopleAnomaly: number
  prevalenceDry: number
  prevalenceWet: number
  prevalenceAnomaly: number
}
