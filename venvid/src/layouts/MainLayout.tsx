import React, { ReactNode } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';

interface Props {
  children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container-fluid flex-grow-1">
        <div className="row">
          <Sidebar />

          <main className="col py-4" style={{ marginLeft: '220px' }}>
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
