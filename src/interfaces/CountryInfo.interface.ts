export interface CountryInfo {
  statusCode: string
  body: CountryInfoBody
}

export interface CountryInfoBody {
  countries: CountryData[]
}

export interface CountryData {
  country: Country
  population: Population
  chronic_hunger: any
  malnutrition?: Malnutrition
  income_group: IncomeGroup
}

export interface Country {
  id: number
  name: string
  iso3: string
  iso2: string
}

export interface Population {
  number: number
  year: any
  source: string
}

export interface Malnutrition {
  acute_percent: number
  chronic_percent: number
  year: number
  source: string
}

export interface IncomeGroup {
  level: string
}
