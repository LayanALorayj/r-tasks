import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-grow-1 container my-4 text-center">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
