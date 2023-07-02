import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@app/footer/page';

export const metadata = {
  title: 'Scout',
  description: 'Search and employ the best clients',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        <Provider>
          <Nav />
          {children}
          <Footer />
        </Provider>
      </main>
    </body>
  </html>
);

export default RootLayout;
