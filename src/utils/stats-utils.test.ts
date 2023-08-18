import { average } from './stats-utils'

describe('stats-utils', () => {
  test('average', () => {
    expect(average(2, 4)).toBe(3)
  })
})
