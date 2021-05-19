import GlobalStyle from '../components/GolbalStyle/global';
import AuthProvider from '../config/auth';
import NavBar from '../components/NavBar/navbar';
import { Cart } from '../config/shoppingcart';

function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider>
      <GlobalStyle />
      <NavBar />
      <Cart>
        <Component {...pageProps} />
      </Cart>
    </AuthProvider>
  )
}

export default MyApp
