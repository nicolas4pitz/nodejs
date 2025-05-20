export const getDataByPathParams = (data, locationType, locationName) =>{
  return data.filter((destinations) => {
      return destinations[locationType].toLowerCase() === locationName.toLowerCase()
    })

}