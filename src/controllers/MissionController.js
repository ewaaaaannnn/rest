import { missionService } from "../services/MissionService";
import BaseController from "../utils/BaseController";

export class MissionController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getMissions)
      .post('', this.createMission)
      .put('/:missionId', this.updateMission)
  }


  async getMissions(request, response, next) {
    try {
      const missions = await missionService.getMissions()
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }

  async createMission(request, response, next) {
    try {
      const missionData = request.body
      const mission = await missionService.createMission(missionData)
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }


  async updateMission(request, response, next) {
    try {
      const missionId = request.params.missionId
      const missionData = request.body
      const updatedMission = await missionService.updateMission(missionId, missionData)
      response.send(updatedMission)
    } catch (error) {
      next(error)
    }
  }


}