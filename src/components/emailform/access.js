import {
  InteractionRequiredAuthError,
  PublicClientApplication,
} from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "a9d5305a-46f3-439e-b6f3-595e113c9430", // Replace with your Azure AD application's Client ID
    authority:
      "https://login.microsoftonline.com/bb98740e-efe7-4604-a99c-8220cc993f2e", // Replace with your Azure AD Tenant ID
    redirectUri: "http://localhost:3000",
  },
};

export let pca;

export const initialize = async () => {
  pca = new PublicClientApplication(msalConfig);
  await pca.initialize();
};

export const signIn = async () => {
  try {
    const loginRequest = {
      scopes: ["User.Read"],
    };
    const activeAccount = pca.getActiveAccount();
    if (activeAccount) {
      pca.cancelPopup();
      return;
    }
    const response = await pca.loginPopup(loginRequest);
    return response.account;
  } catch (error) {
    console.log({ error });
    throw new Error("Failed to sign in");
  }
};

export const getAccessToken = async () => {
  const accounts = pca.getAllAccounts();

  if (accounts.length === 0) {
    throw new Error("No accounts found");
  }

  const silentRequest = {
    scopes: ["User.Read"],
    account: accounts[0],
  };

  try {
    const response = await pca.acquireTokenSilent(silentRequest);
    return response.accessToken;
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      const interactiveRequest = {
        scopes: ["User.Read"],
        account: accounts[0],
      };

      try {
        const response = await pca.acquireTokenPopup(interactiveRequest);
        return response.accessToken;
      } catch (error) {
        throw new Error("Failed to acquire access token");
      }
    } else {
      throw new Error("Failed to acquire access token");
    }
  }
};

// Usage
// export const accessToken_ = getAccessToken().then((accessToken) => {
//   if (accessToken) {
//     // const graphClient = Client.init({
//     //   authProvider: (done) => {
//     //     done(null, accessToken);
//     //   },
//     // });
//     return accessToken;

//     // Now you can use graphClient to make API calls to Microsoft Graph.
//   } else {
//     return null;
//     // Handle the case where access token retrieval failed.
//   }
// });
