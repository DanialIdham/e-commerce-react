import '../styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import store from '../root-store'

const makeStore = () => store
const wrapper = createWrapper(makeStore);

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        { getLayout(<Component {...pageProps} />) }
      </ThemeProvider>
  </Provider>
  )
}

export default wrapper.withRedux(MyApp);
