import React from 'react';
import './index.css';

function NavBar() {
  const links = [
    'Store', 'Classes', 'Coaching',
  ];

  const dropdownContents = {
    Store: ['Nutrition', 'Strength', 'Cardio', 'Flexibility', 'Apparel'],
    Classes: ['Group', 'Individual', 'At home', 'Gym', 'Create a class'],
    Coaching: [ 'Arnold', 'Mr. T', 'Goggins', 'Michelle Selter', 'Leslie Knope', 'Become a coach' ],
    };

  return (
    <nav>
      <div className="logo">
        OneFitness
      </div>
      <div className="nav-section">
        {links.map((link, index) => (
          <div key={index} className="dropdown">
            <button className="dropbtn">{link}</button>
            <div className="dropdown-content">
              {dropdownContents[link].map((subLink, idx) => (
                <a key={idx} href={`#${subLink.replace(/\s+/g, '-').toLowerCase()}`}>{subLink}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
