import { dbContext } from "../db/DbContext"

class MissionService {
  async updateMission(missionId, missionData) {
    const missionToUpdate = await dbContext.Missions.findById(missionId)
    missionToUpdate.completed = missionData.completed
    await missionToUpdate.save()
    return missionToUpdate
  }
  async getMissionsByLocationId(locationId) {
    const mission = await dbContext.Missions.find({ locationId: locationId }).populate('rat', '-name -picture')
    return mission
  }
  async getMissionsByRatId(ratId) {
    const mission = await dbContext.Missions.find({ ratId: ratId }).populate('location')
    return mission
  }
  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('rat', '-name -picture')
    await mission.populate('location')
    return mission
  }
  async getMissions() {
    const missions = await dbContext.Missions.find().populate('rat', '-name -picture').populate('location')
    return missions
  }

}



export const missionService = new MissionService()