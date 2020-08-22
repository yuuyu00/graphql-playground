import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { APOLLO_SERVER_URL } from "../constants";

export const useApolloClient = () => {
  const httpLink = createHttpLink({
    uri: APOLLO_SERVER_URL,
  });

  const errorLink = onError(({ graphQLErrors }) => {
    if (!graphQLErrors) return;

    graphQLErrors.map(() => {
      // handling error
    });

    // eslint-disable-next-line no-console
    graphQLErrors.map((error) =>
      console.error(`caught by errorLink: ${error.message}`)
    );
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return { client };
};
