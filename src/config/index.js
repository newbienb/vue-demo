export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'https://localhost:9000/'
  :'http://localhost:8080/api/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
  ? ''
  : ''