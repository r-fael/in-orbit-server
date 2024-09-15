import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoalCompletetion } from '../../functions/create-goal-completion'

export const createGoalCompletion: FastifyPluginAsyncZod = async app => {
  app.post(
    '/completions',
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async req => {
      const { goalId } = req.body

      const result = await createGoalCompletetion({
        goalId,
      })

      return {
        result,
      }
    }
  )
}
