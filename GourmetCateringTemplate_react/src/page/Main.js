import React from 'react';
import About from '../components/About';
import Menu from '../components/Menu';
import Contact from '../components/Contact';

const Main = () => {
  return (
    <div>
      {/* About 컴포넌트 */}
      <About title="About Catering" subTitle="Tradition since 1889" />
      <hr />

      {/* Menu 컴포넌트 */}
      <Menu title="Our Menu" />
      <hr />

      {/* Contact 컴포넌트 */}
      <Contact title="Contact" />
    </div>
  );
};

export default Main;
