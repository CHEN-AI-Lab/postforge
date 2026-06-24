// ─── Email ──────────────────────────────────────────
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

// ─── Password ───────────────────────────────────────
export function isValidPassword(value: string): boolean {
  return value.length >= 8 && value.length <= 128
}

export function getPasswordStrength(value: string): 'weak' | 'medium' | 'strong' {
  if (value.length < 8) return 'weak'
  const hasUpper = /[A-Z]/.test(value)
  const hasLower = /[a-z]/.test(value)
  const hasNumber = /\d/.test(value)
  const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)
  const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length
  if (score >= 3 && value.length >= 12) return 'strong'
  if (score >= 2) return 'medium'
  return 'weak'
}

// ─── URL ────────────────────────────────────────────
export function isValidUrl(value: string): boolean {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

// ─── Generic String Utils ───────────────────────────
export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0
}

export function isWithinLength(value: string, min: number, max: number): boolean {
  const len = value.trim().length
  return len >= min && len <= max
}

// ─── Signup Input ───────────────────────────────────
export interface SignupInput {
  email?: string
  password?: string
  name?: string
}

export function validateSignupInput(data: SignupInput): string[] {
  const errors: string[] = []

  if (!data.email || !isNotEmpty(data.email)) {
    errors.push('Email is required')
  } else if (!isValidEmail(data.email)) {
    errors.push('Invalid email format')
  }

  if (!data.password || !isNotEmpty(data.password)) {
    errors.push('Password is required')
  } else if (!isValidPassword(data.password)) {
    errors.push('Password must be at least 8 characters')
  }

  if (data.name && !isWithinLength(data.name, 1, 100)) {
    errors.push('Name must be between 1 and 100 characters')
  }

  return errors
}

// ─── Login Input ────────────────────────────────────
export interface LoginInput {
  email?: string
  password?: string
}

export function validateLoginInput(data: LoginInput): string[] {
  const errors: string[] = []

  if (!data.email || !isNotEmpty(data.email)) {
    errors.push('Email is required')
  }

  if (!data.password || !isNotEmpty(data.password)) {
    errors.push('Password is required')
  }

  return errors
}