import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/link-context";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("jwtToken");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  }
  return;
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value

const clientInit = () => {
  if (process.browser) {
    const wsLink = new WebSocketLink({
      uri: "ws://localhost:4000/graphql",
      options: {
        reconnect: true,
      },
    });

    const splitLink = split(
      ({ query }: any) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      authLink.concat(httpLink)
    );

    return new ApolloClient({
      ssrMode: true,
      link: splitLink,
      cache: new InMemoryCache(),
    });
  } else {
    return new ApolloClient({
      ssrMode: true,
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }
};

// export const Client = new ApolloClient({
//   ssrMode:true,
//   link: splitLink,
//   cache: new InMemoryCache()
// });

export const client = clientInit();

export const useApolloQuery = (gql: any, callback?: any, variables?: any) =>
  client
    .query({
      query: gql,
      variables,
    })
    .then((res) => {
      callback(res.data);
    });

export const useApolloMutation = (gql: any, callback?: any, variables?: any) =>
  client
    .mutate({
      mutation: gql,
      variables,
    })
    .then((res) => {
      callback(res.data);
    });

export const useApolloSubscription = (
  gql: any,
  callback?: any,
  variables?: any
) =>
  client
    .subscribe({
      query: gql,
      variables,
    })
    .subscribe({
      next({ data }) {
        callback(data);
      },
      error(err) {
        console.log({ testerror: err });
      },
    });
