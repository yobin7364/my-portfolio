//for prooduction , the env keys are set on Netlify
const apikeys = {
  USER_ID: process.env.REACT_APP_USER_ID,
  TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
  SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
};

export default apikeys;
