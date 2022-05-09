import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// Spies = espiões
const createFeedbackSpy = jest.fn()
const sendMailSpay = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpay }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64, dsaoi5h3n9fhw9834qh9',
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpay).toHaveBeenCalled()
  })

  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64, dsaoi5h3n9fhw9834qh9',
    })).rejects.toThrow()
  })

  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64, dsaoi5h3n9fhw9834qh9',
    })).rejects.toThrow()
  })

  it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Ta bugado',
      screenshot: '123',
    })).rejects.toThrow()
  })
})