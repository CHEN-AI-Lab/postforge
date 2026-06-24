import { describe, it, expect } from 'vitest'
import {
  isValidEmail,
  isValidPassword,
  getPasswordStrength,
  isValidUrl,
  isNotEmpty,
  isWithinLength,
  validateSignupInput,
  validateLoginInput,
} from '../../shared/validators'

describe('isValidEmail', () => {
  it('returns true for valid emails', () => {
    expect(isValidEmail('user@example.com')).toBe(true)
    expect(isValidEmail('hello@world.co')).toBe(true)
    expect(isValidEmail('test+label@gmail.com')).toBe(true)
  })

  it('returns false for invalid emails', () => {
    expect(isValidEmail('')).toBe(false)
    expect(isValidEmail('not-an-email')).toBe(false)
    expect(isValidEmail('@domain.com')).toBe(false)
    expect(isValidEmail('user@')).toBe(false)
  })
})

describe('isValidPassword', () => {
  it('returns false for short passwords', () => {
    expect(isValidPassword('1234567')).toBe(false)
  })

  it('returns true for passwords >= 8 chars', () => {
    expect(isValidPassword('12345678')).toBe(true)
    expect(isValidPassword('a'.repeat(128))).toBe(true)
  })

  it('returns false for passwords > 128 chars', () => {
    expect(isValidPassword('a'.repeat(129))).toBe(false)
  })
})

describe('getPasswordStrength', () => {
  it('returns weak for short passwords', () => {
    expect(getPasswordStrength('abc')).toBe('weak')
  })

  it('returns strong for complex long passwords', () => {
    expect(getPasswordStrength('Str0ng!Pass#12')).toBe('strong')
  })
})

describe('isValidUrl', () => {
  it('returns true for valid URLs', () => {
    expect(isValidUrl('https://example.com')).toBe(true)
    expect(isValidUrl('http://localhost:3000')).toBe(true)
  })

  it('returns false for invalid URLs', () => {
    expect(isValidUrl('not-a-url')).toBe(false)
    expect(isValidUrl('')).toBe(false)
  })
})

describe('validateSignupInput', () => {
  it('returns errors for missing fields', () => {
    const errors = validateSignupInput({})
    expect(errors.length).toBeGreaterThan(0)
    expect(errors).toContain('Email is required')
    expect(errors).toContain('Password is required')
  })

  it('returns error for invalid email', () => {
    const errors = validateSignupInput({ email: 'bad', password: '12345678' })
    expect(errors).toContain('Invalid email format')
  })

  it('returns no errors for valid input', () => {
    const errors = validateSignupInput({
      email: 'user@example.com',
      password: 'SecurePass123',
      name: 'Test User',
    })
    expect(errors).toHaveLength(0)
  })
})

describe('validateLoginInput', () => {
  it('returns errors for missing fields', () => {
    const errors = validateLoginInput({})
    expect(errors).toContain('Email is required')
    expect(errors).toContain('Password is required')
  })

  it('returns no errors for valid input', () => {
    const errors = validateLoginInput({
      email: 'user@example.com',
      password: '12345678',
    })
    expect(errors).toHaveLength(0)
  })
})

describe('shared constants', () => {
  it('exports example features', async () => {
    const { EXAMPLE_FEATURES } = await import('../../shared/constants')
    expect(EXAMPLE_FEATURES).toHaveLength(6)
  })

  it('exports example plans', async () => {
    const { EXAMPLE_PLANS } = await import('../../shared/constants')
    expect(EXAMPLE_PLANS).toHaveLength(3)
    expect(EXAMPLE_PLANS.find((p) => p.name === 'Free')?.price).toBe(0)
  })
})