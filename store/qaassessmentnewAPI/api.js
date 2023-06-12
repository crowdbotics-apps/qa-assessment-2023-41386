import axios from "axios";
const qaassessmentnewAPI = axios.create({
  baseURL: "https://qa-assessment-new-2-39768.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_v1_login_create(payload) {
  return qaassessmentnewAPI.post(`/api/v1/login/`, payload.data);
}

function api_v1_signup_create(payload) {
  return qaassessmentnewAPI.post(`/api/v1/signup/`, payload.data);
}

function rest_auth_user_retrieve(payload) {
  return qaassessmentnewAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return qaassessmentnewAPI.put(`/rest-auth/user/`, payload.data);
}

function rest_auth_user_partial_update(payload) {
  return qaassessmentnewAPI.patch(`/rest-auth/user/`, payload.data);
}

function api_docs_schema_retrieve(payload) {
  return qaassessmentnewAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function rest_auth_login_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/login/`, payload.data);
}

function rest_auth_logout_retrieve(payload) {
  return qaassessmentnewAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/logout/`);
}

function modules_privacy_policy_list(payload) {
  return qaassessmentnewAPI.get(`/modules/privacy-policy/`);
}

function modules_privacy_policy_create(payload) {
  return qaassessmentnewAPI.post(`/modules/privacy-policy/`, payload.data);
}

function rest_auth_registration_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/registration/`, payload.data);
}

function rest_auth_password_reset_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/password/reset/`, payload.data);
}

function rest_auth_password_change_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/password/change/`, payload.data);
}

function modules_privacy_policy_retrieve(payload) {
  return qaassessmentnewAPI.get(`/modules/privacy-policy/${payload.id}/`);
}

function modules_privacy_policy_update(payload) {
  return qaassessmentnewAPI.put(`/modules/privacy-policy/${payload.id}/`, payload.data);
}

function modules_privacy_policy_partial_update(payload) {
  return qaassessmentnewAPI.patch(`/modules/privacy-policy/${payload.id}/`, payload.data);
}

function modules_privacy_policy_destroy(payload) {
  return qaassessmentnewAPI.delete(`/modules/privacy-policy/${payload.id}/`);
}

function rest_auth_password_reset_confirm_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/password/reset/confirm/`, payload.data);
}

function rest_auth_registration_verify_email_create(payload) {
  return qaassessmentnewAPI.post(`/rest-auth/registration/verify-email/`, payload.data);
}

export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
};