import React from 'react';

const Tryout = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between">
          <div>
            <h3>About Us</h3>
            <p>AEY</p>
            <p>darkshadystreet 4</p>
            <p>MysteriousCity 8321, Switzerlandia</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Email: atom.aey.paw@gmail.com</p>
            <p>Phone: +41 123 45 67</p>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="https://www.freeprivacypolicy.com/live/b043ab43-0b49-4d41-8a24-595281217dad" className="text-blue-500 hover:underline">Privacy Policy</a></li>
              <li><a href="https://www.freeprivacypolicy.com/live/3a61184e-2bda-4d67-84c0-d3819e073237" className="text-blue-500 hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <p>&copy; 2023 AEY Buddies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Tryout;
