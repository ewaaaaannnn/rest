import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RatSchema } from '../models/Rat';
import { MissionSchema } from '../models/Mission';
import { LocationSchema } from '../models/Location';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rat', RatSchema);
  Missions = mongoose.model('Mission', MissionSchema);
  Locations = mongoose.model('Location', LocationSchema)
}

export const dbContext = new DbContext()
