import { locationService } from "../services/LocationService";
import { missionService } from "../services/MissionService";
import BaseController from "../utils/BaseController";

export class LocationController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
      .get('/:locationId/missions', this.getMissionByLocationId)
  }


  async getLocations(request, response, next) {
    try {
      const locations = await locationService.getLocations()
      response.send(locations)
    } catch (error) {
      next(error);

    }
  }


  async getMissionByLocationId(request, response, next) {
    try {
      const locationId = request.params.locationId
      const missions = await missionService.getMissionsByLocationId(locationId)
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }


}