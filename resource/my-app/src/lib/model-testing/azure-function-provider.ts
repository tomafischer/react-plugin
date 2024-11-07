import {azureFuncitonConf} from './azure-function-conf';

type Environment = 'localhost' | 'dev' | 'acc';

const fetchGET = async (url: string, method: string, body: any) => {
  const response = fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response;//response.json();
}
//const getFullUrl = (evn: Environment) : string =>  {

// const getFullUrl = (env: string) : string =>  {
//   if (!azureFuncitonConf[env]) {
//     throw new Error(`The environment ${evn} is not defined in azureFuncitonConf`);
//   }
// }

//export {fetchGET};