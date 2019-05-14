const TOKEN = 'token'
const USER_ID = 'user_id'
const EMAIL = 'email'
const NAME = 'username'
// const EXP = 'exp'

export function jwtDecode (token) {
  let base64Url = token.split('.')[1]
  let base64 = base64Url.replace('-', '+').replace('_', '/')
  let dataUser = JSON.parse(window.atob(base64))
  return dataUser
}

export function setTokenData (token, user) {
  let jsonData = jwtDecode(token)
  let userName = user.username
  setToken(token)
  setName(userName)
  setUserId(jsonData.user_id)
  setEmail(jsonData.email)
  // setExpire(jsonData.exp)
}

export function setToken (token) {
  localStorage.setItem(TOKEN, token)
}

export function setUserId (userId) {
  localStorage.setItem(USER_ID, userId)
}

export function setEmail (email) {
  localStorage.setItem(EMAIL, email)
}

export function setName (name) {
  localStorage.setItem(NAME, name)
}

export function getToken () {
  return localStorage.getItem(TOKEN)
}

export function getUserId () {
  return localStorage.getItem(USER_ID)
}

export function getEmail () {
  return localStorage.getItem(EMAIL)
}

export function getName () {
  return localStorage.getItem(NAME)
}


export function removeToken () {
  return localStorage.removeItem(TOKEN)
}

export function removeUserId () {
  return localStorage.removeItem(USER_ID)
}

export function removeEmail () {
  return localStorage.removeItem(EMAIL)
}

export function removeName () {
  return localStorage.removeItem(NAME)
}
// function setExpire (expire) {
//   if (!expire) { return null; }
//   const date = new Date(0)
//   date.setUTCSeconds(token.exp)
//   return date;
// }

export function isAuthenticated () {
  const idToken = getToken()
  return !!idToken
}

export function authLogout () {
  removeToken()
  removeUserId()
  removeEmail()
  removeName()
}
