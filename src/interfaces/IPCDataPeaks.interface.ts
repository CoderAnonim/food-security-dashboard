export interface IPCDataPeaks {
  statusCode: string
  body: IPCDataBody
}

export interface IPCDataBody {
  year: number
  ipc_peaks: IpcPeak[]
}

export interface IpcPeak {
  iso3: string
  country_name: string
  analysis_type: string
  analysis_date: string
  analysis_period_from: string
  analysis_period_to: string
  analyzed_population_number: number
  phase_3_number: number
  phase_3_percent: number
  phase_4_number: number
  phase_4_percent: number
  phase_5_number: number
  phase_5_percent: number
  phase_3_plus_number: number
  phase_4_plus_number: number
  source: string
}
