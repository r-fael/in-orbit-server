import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import fastify from 'fastify'
import z from 'zod'
import { getWeekPendingGoals } from '../functions/get-week-pending-goals'
import { createGoalCompletetion } from '../functions/create-goal-completion'
import { createGoalRoute } from './routes/create-goal'
import { createGoalCompletion } from './routes/create-completion'
import { getPendingGoalsRoute } from './routes/get-pending-goals'

const app = fastify().withTypeProvider<ZodTypeProvider>()

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalRoute)
app.register(createGoalCompletion)
app.register(getPendingGoalsRoute)

const PORT = 3333

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log('server running at', PORT)
  })
