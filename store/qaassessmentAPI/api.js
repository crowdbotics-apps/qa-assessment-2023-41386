import axios from "axios"
const qaassessmentAPI = axios.create({
  baseURL: "https://qa-assessment-2023-41386.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return qaassessmentAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return qaassessmentAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_profile_list(payload) {
  return qaassessmentAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(payload) {
  return qaassessmentAPI.post(`/api/v1/profile/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return qaassessmentAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return qaassessmentAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return qaassessmentAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return qaassessmentAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return qaassessmentAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return qaassessmentAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return qaassessmentAPI.post(`/rest-auth/logout/`)
}
function api_v1_profile_retrieve(payload) {
  return qaassessmentAPI.get(`/api/v1/profile/${payload.id}/`)
}
function api_v1_profile_update(payload) {
  return qaassessmentAPI.put(`/api/v1/profile/${payload.id}/`, payload.data)
}
function api_v1_profile_partial_update(payload) {
  return qaassessmentAPI.patch(`/api/v1/profile/${payload.id}/`, payload.data)
}
function api_v1_profile_destroy(payload) {
  return qaassessmentAPI.delete(`/api/v1/profile/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return qaassessmentAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return qaassessmentAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return qaassessmentAPI.post(`/rest-auth/password/change/`, payload.data)
}
function modules_terms_and_conditions_list(payload) {
  return qaassessmentAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return qaassessmentAPI.post(`/modules/terms-and-conditions/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return qaassessmentAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function modules_terms_and_conditions_retrieve(payload) {
  return qaassessmentAPI.get(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_terms_and_conditions_update(payload) {
  return qaassessmentAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return qaassessmentAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_destroy(payload) {
  return qaassessmentAPI.delete(`/modules/terms-and-conditions/${payload.id}/`)
}
function rest_auth_registration_verify_email_create(payload) {
  return qaassessmentAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_profile_list,
  api_v1_profile_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_profile_retrieve,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  rest_auth_password_reset_confirm_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  rest_auth_registration_verify_email_create
}
