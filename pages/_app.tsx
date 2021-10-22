import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apolloClient'
import Layout from '../components/Layout'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import reducer from '../reducers'


const store = configureStore({reducer})

export default function App({ Component, pageProps }:AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Provider>
    </ApolloProvider>
  )
}