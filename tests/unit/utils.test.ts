import { describe, it, expect } from 'vitest'
import { generateId, truncate, cn } from '../../shared/utils'

describe('generateId', () => {
  it('returns a string', () => {
    const id = generateId()
    expect(typeof id).toBe('string')
  })

  it('contains timestamp and random part', () => {
    const id = generateId()
    expect(id).toMatch(/^\d+-[a-z0-9]+$/)
  })

  it('produces unique IDs', () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateId()))
    expect(ids.size).toBe(100)
  })
})

describe('truncate', () => {
  it('returns the full string when under maxLength', () => {
    expect(truncate('Hello', 10)).toBe('Hello')
  })

  it('returns the full string when exactly maxLength', () => {
    expect(truncate('Hello', 5)).toBe('Hello')
  })

  it('truncates and adds ellipsis for longer strings', () => {
    expect(truncate('Hello World', 5)).toBe('Hello...')
  })

  it('trims trailing whitespace before adding ellipsis', () => {
    expect(truncate('Hello   World', 5)).toBe('Hello...')
  })

  it('handles empty string', () => {
    expect(truncate('', 5)).toBe('')
  })

  it('handles single-character max length', () => {
    expect(truncate('ab', 1)).toBe('a...')
    expect(truncate('a', 1)).toBe('a')
  })
})

describe('cn', () => {
  it('joins class names with spaces', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('filters out falsy values', () => {
    expect(cn('a', false, 'b', undefined, null, 'c')).toBe('a b c')
  })

  it('returns empty string when no classes given', () => {
    expect(cn()).toBe('')
  })

  it('returns empty string when all values are falsy', () => {
    expect(cn(false, undefined, null)).toBe('')
  })

  it('handles a single class', () => {
    expect(cn('only-one')).toBe('only-one')
  })
})
