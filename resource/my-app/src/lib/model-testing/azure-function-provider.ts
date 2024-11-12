import { Asset } from "@/models/asset";
import { azureFuncitonConf } from "./azure-function-conf";
import assetsFake from "./assets-fake.json";
type Environment = "localhost" | "dev" | "acc";

export const fetchGET = async (url: string, method: string, body: any) => {
  const response = fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response; //response.json();
};

export const getFullPredictUrl = (env: string, asset: string): string => {
  if (!(env in azureFuncitonConf)) {
    throw new Error(
      `The environment ${env} is not defined in azureFuncitonConf`
    );
  }
  const env2 = env as Environment;
  const port =
    "port" in azureFuncitonConf[env2] ? `:${azureFuncitonConf[env2].port}` : "";
  const url = `${
    azureFuncitonConf[env2].base_url + port
  }/api/model_${asset}_predict?code=${azureFuncitonConf[env2].function_key}`;
  return url;
};

export const getAssets = async (): Promise<Array<Asset>> => {
  // Placeholder implementation, replace with actual logic
  return new Promise((resolve, reject) => {
    resolve(assetsFake as any as Array<Asset>);
  });
};


export const ctxf_default_request = `{
    "v": "V6",
    "CollectingDate": "2023-11-07T19:27:10.461904Z",
    "Parameters": {
        "Manufactured Date": [
            {
                "Value": "1995-01-02T00:00:00Z",
                "Timestamp": "2002-01-02T00:00:00Z"
            }
        ],
        "Visible Damage": [
            {
                "Value": "N",
                "Timestamp": "2023-10-14T00:00:00Z"
            }
        ],
        "SF6 Leak": [
            {
                "Value": "N",
                "Timestamp": "2023-10-14T00:00:00Z"
            }
        ],
        "Oil Leak": [
            {
                "Value": "N",
                "Timestamp": "2023-10-14T00:00:00Z"
            }
        ],
        "Oil Level OK": [
            {
                "Value": "Y",
                "Timestamp": "2023-10-14T00:00:00Z"
            }
        ],
        "SF6 Pressure": [
            {
                "Value": "60",
                "Timestamp": "2023-10-14T00:00:00Z"
            }
        ],
        "Gas Pressure OK": [
            {
                "Value": "Excellent",
                "Timestamp": "2023-10-14T00:00:00Z"
            }
        ],
        "Manufacturer Model": [
            {
                "Value": "SAS 550/2G",
                "Timestamp": "2002-01-02T00:00:00Z"
            }
        ]
    },
    "SimulationConfiguration": null
}
`;
