import { type SchemaTypeDefinition } from 'sanity'
import { service } from './schemas/service'
import { project } from './schemas/project'
import { team } from './schemas/team'
import { stat } from './schemas/stat'
import { pricing } from './schemas/pricing'
import { client as clientSchema } from './schemas/client'
import { contact } from './schemas/contact' // Add this

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, project, team, stat, pricing, clientSchema, contact],
}