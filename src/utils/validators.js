// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Number validation
export const isValidNumber = (value) => {
  return !isNaN(value) && !isNaN(parseFloat(value))
}

// Required field validation
export const isRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== ''
}

// Min length validation
export const minLength = (value, min) => {
  return value && value.length >= min
}

// Max length validation
export const maxLength = (value, max) => {
  return value && value.length <= max
}
