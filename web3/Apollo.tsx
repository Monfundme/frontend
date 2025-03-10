"use client";
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'http://localhost:8080/v1/graphql',
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'network-only',
        },
    },
});

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
    return <ApolloProvider client={ client }> { children } </ApolloProvider>;
};

export default ApolloClientProvider;
