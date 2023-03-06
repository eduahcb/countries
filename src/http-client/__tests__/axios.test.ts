import axios from 'axios'
import { AxiosClient } from '../axios'

vi.mock('axios')

describe('AxiosClient', () => {
  let client: AxiosClient

  afterEach(() => {
    vi.mocked(axios.create).mockClear()
    vi.spyOn(axios, 'get').mockClear()
    vi.spyOn(axios, 'post').mockClear()
  })

  test('should call axios create instance', () => {
    vi.mocked(axios.create).mockReturnThis()

    client = new AxiosClient()
    expect(axios.create).toHaveBeenCalledTimes(1)
  })

  test('should call axios get method', async () => {
    vi.mocked(axios.create).mockReturnThis()
    vi.spyOn(axios, 'get').mockResolvedValue({})

    client = new AxiosClient()

    await client.get('http://localhost:3000/all')

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/all')
  })

  test('should reject axios get method', async () => {
    vi.mocked(axios.create).mockReturnThis()
    vi.spyOn(axios, 'get').mockRejectedValue({})

    client = new AxiosClient()

    const handle = async (): Promise<any> => await client.get('http://localhost:3000/all')

    await expect(handle).rejects.toThrow()
  })
})
