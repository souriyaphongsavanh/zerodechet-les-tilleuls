import weightAPI from '../weight/weightAPI'

export const LOAD_STAT = 'LOAD_STAT'

export const handleLoadStat = (period) => {
  // const stat = weightAPI.fetchWeightList(period)
  const stat = 'TODO'

  return {
    type: LOAD_STAT,
    stat
  }
}