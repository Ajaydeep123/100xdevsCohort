const API_URL = 'http://localhost:3000'
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/admin/signup`,
  LOG_IN: `${API_URL}/admin/login`,
  COURSES: `${API_URL}/admin/courses`,
  COURSE: `${API_URL}/admin/courses/:courseId`
}

export const APP_ROUTES = {
  SIGN_UP: '/signup',
  LOG_IN: '/login',
  LANDING_PAGE: '/',
}