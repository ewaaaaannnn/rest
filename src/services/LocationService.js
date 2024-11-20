import { dbContext } from "../db/DbContext"

class LocationService {
  async getLocations() {
    const locations = await dbContext.Locations.find()
    return locations
  }

}

export const locationService = new LocationService()