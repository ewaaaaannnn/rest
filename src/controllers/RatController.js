import { missionService } from "../services/MissionService";
import { ratService } from "../services/RatService";
import BaseController from "../utils/BaseController";

export class RatController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getRats)
      .get('/:ratId/missions', this.getMissionByRatId)
  }

  async getRats(request, response, next) {
    try {
      const rats = await ratService.getRats()
      response.send(rats)
    } catch (error) {
      next(error)
    }
  }



  async getMissionByRatId(request, response, next) {
    try {
      const ratId = request.params.ratId
      const missions = await missionService.getMissionsByRatId(ratId)
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }

}