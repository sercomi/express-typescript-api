import { app, Shutdown } from '../../src/index'

describe('Server', () => {
  afterAll((done) => {
    Shutdown(done)
  })

  it('Starts', async () => {
    expect(process.env.NODE_ENV).toBe('test')
    expect(app).toBeDefined()
  }, 10000)
})
