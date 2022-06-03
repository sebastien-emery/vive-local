import { companyT } from '../action-types';

export const actionsCompany = () => ({
  type: companyT.GET_COMPANY,
});

export const actionsCompanyDisplay = (data) => ({
  type: companyT.SUCCESS,
  payload: data,
  // payload: {
  //   id: data.id,
  //   name: data.name,
  //   address: data.address,
  //   city: data.city,
  //   zip: data.zip,
  //   phone: data.phone,
  //   mail: data.mail,
  //   detail: data.detail,
  //   communication: data.communication,
  //   lastUpdate: data.updated_at,
  //   product: data.product,
  // },
});

export const actionsCompanyRegister = () => ({
  type: companyT.REGISTER,
});

export const actionsCompanyRegisterSuccess = () => ({
  type: companyT.SUCCESS_REGISTER,
});

export const actionsEditingInput = (data) => ({
  type: companyT.INPUT_EDITING,
  payload: {
    id: data.id,
    name: data.name,
    siret: data.siret,
    mail: data.mail,
    city: data.city,
    zip: data.zip,
    address: data.address,
    phone: data.phone,
    detail: data.detail,
    communication: data.communication,
    user_id: data.user_id,
  },
});

export const actionsEditingSubmit = () => ({
  type: companyT.REGISTER_EDITING,
});

export const actionsEditingDisplay = (payload) => ({
  type: companyT.DISPLAY_EDITING,
  payload,
});
