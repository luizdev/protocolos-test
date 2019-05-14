import { isAuthenticated } from '@/utils/auth'

export default function middlewareAuth (to, from, next) {
  if (!isAuthenticated()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
