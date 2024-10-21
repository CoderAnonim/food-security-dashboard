export interface CountryFoodConsumption {
  statusCode: string
  body: CountryBody
}

export interface CountryBody {
  country: Country
  date: string
  dataType: string
  metrics: Metrics
}

export interface Country {
  id: number
  name: string
  iso3: string
  iso2: string
}

export interface Metrics {
  fcs: Fcs
  rcsi: Rcsi
  healthAccess: HealthAccess
  marketAccess: MarketAccess
}

export interface Fcs {
  people: number
  prevalence: number
}

export interface Rcsi {
  people: number
  prevalence: number
}

export interface HealthAccess {
  people: number
  prevalence: number
}

export interface MarketAccess {
  people: number
  prevalence: number
}
