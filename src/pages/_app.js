import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { useState, useEffect } from 'react';
import { SessionProvider } from "next-auth/react"


const MyApp = ({ Component, 
  pageProps: { session, ...pageProps},
 }) => {

  const [isClient, setIsClient] = useState(false);

  useEffect (()=> {setIsClient(true);
  }, []);

  return (
    <div suppressHydrationWarning={true}>
      {isClient ? (
        <SessionProvider session = {session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </SessionProvider>
      ): null}
    </div>
  );
};

export default MyApp;






