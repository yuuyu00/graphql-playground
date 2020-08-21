import React, { memo } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApolloClient } from "./hooks/useApolloClient";

export const App = () => {
  const { client } = useApolloClient();
  const MemoizedApolloProvider = memo(ApolloProvider);

  return (
    <MemoizedApolloProvider client={client}>
      <div>App</div>
    </MemoizedApolloProvider>
  );
};
