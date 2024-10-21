export interface CountriesShape {
  type: string
  features: Feature[]
}

export interface Feature {
  type: string
  properties: Properties
  geometry: Geometry
}

export interface Properties {
  ADMIN: string
  ISO_A3: string
  ISO_A2: string
}

export interface Geometry {
  type: string
  coordinates: number[][][][]
}
