export interface HazardsData {
  statusCode: string
  body: HazardsBody
}

export interface HazardsBody {
  hazards: Hazard[]
}

export interface Hazard {
  severity: string
  type: string
  name: string
  latitude: number
  longitude: number
  created: string
  lastUpdate: string
}
