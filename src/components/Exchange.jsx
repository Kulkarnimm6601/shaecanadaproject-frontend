import React from "react";

const Exchange = () => {
  return (
    <section id="exchange" className="py-24 bg-gray-50 text-green-950 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-green-950 text-3xl md:text-5xl  mb-4">
            Shae Exchange
          </h2>
          <p className="text-green-800 max-w-3xl mx-auto text-lg leading-relaxed">
            Shae Exchange is the dedicated trading platform for Shae Coin
            and other leading cryptocurrencies.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {/* Shae Coin Trading */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <div className="mb-4 flex justify-center items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="green"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-14 h-14"
  >
    <path d="M4 4v14h16" />
    <path d="M8 14l3-3 3 3 5-6" />
  </svg>
</div>
            <h3 className="text-green-950 text-lg font-semibold mb-2">Shae Coin Trading</h3>
            <p className="text-green-800 text-sm">
              Primary home for Shae Coins post-ICO.
            </p>
          </div>

          {/* Multi-Currency Support */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <div className="mb-4 flex justify-center items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="green"
    className="w-12 h-12"
  >
    {/* Top disk */}
    <ellipse cx="32" cy="14" rx="22" ry="8" />

    {/* Middle layer */}
    <path d="M10 22v10c0 4 10 8 22 8s22-4 22-8V22c0 4-10 8-22 8s-22-4-22-8z" />

    {/* Bottom layer */}
    <path d="M10 36v10c0 4 10 8 22 8s22-4 22-8V36c0 4-10 8-22 8s-22-4-22-8z" />
    
  </svg>
</div>
            
            <h3 className="text-green-950 text-lg font-semibold mb-2">Multi-Currency Support</h3>
            <p className="text-green-800 text-sm">
              Trade BTC, ETH, USDT, and top altcoins.
            </p>
          </div>

          {/* Integrated Payments */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <div className="mb-4 flex justify-center items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="#1f5f3a"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12"
  >
    {/* Top circular arrow */}
    <path d="M12 24a20 20 0 0 1 36-6" />
    <polyline points="44,10 50,18 40,20" />

    {/* Bottom circular arrow */}
    <path d="M52 40a20 20 0 0 1-36 6" />
    <polyline points="20,54 14,46 24,44" />
  </svg>
</div>
            <h3 className="text-green-950 text-lg font-semibold mb-2">Integrated Payments</h3>
            <p className="text-green-800 text-sm">
              Seamless conversion within the Shae marketplace.
            </p>
          </div>

          {/* Staking & Yield */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <div className="mb-4 flex justify-center items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="#1f5f3a"
    className="w-12 h-12"
  >
    {/* Cup body */}
    <path d="M20 18h24v6c0 10-6 16-12 18-6-2-12-8-12-18z" />

    {/* Cup top rim */}
    <rect x="18" y="14" width="28" height="4" rx="2" />

    {/* Left handle */}
    <path d="M20 20c-8 2-8 14 4 16" fill="none" stroke="#1f5f3a" strokeWidth="4" />

    {/* Right handle */}
    <path d="M44 20c8 2 8 14-4 16" fill="none" stroke="#1f5f3a" strokeWidth="4" />

    {/* Stem */}
    <rect x="29" y="42" width="6" height="8" rx="2" />

    {/* Base */}
    <rect x="22" y="50" width="20" height="6" rx="3" />
  </svg>
</div>
            <h3 className="text-green-950 text-lg font-semibold mb-2">Staking & Yield</h3>
            <p className="text-green-800 text-sm">
              Earn rewards and exclusive benefits.
            </p>
          </div>

          {/* Investor Value */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center">
            <div className="mb-4 flex justify-center items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="#1f5f3a"
    className="w-12 h-12"
  >
    {/* Cup body */}
    <path d="M20 18h24v6c0 10-6 16-12 18-6-2-12-8-12-18z" />

    {/* Cup top rim */}
    <rect x="18" y="14" width="28" height="4" rx="2" />

    {/* Left handle */}
    <path d="M20 20c-8 2-8 14 4 16" fill="none" stroke="#1f5f3a" strokeWidth="4" />

    {/* Right handle */}
    <path d="M44 20c8 2 8 14-4 16" fill="none" stroke="#1f5f3a" strokeWidth="4" />

    {/* Stem */}
    <rect x="29" y="42" width="6" height="8" rx="2" />

    {/* Base */}
    <rect x="22" y="50" width="20" height="6" rx="3" />
  </svg>
</div>
            <h3 className="text-green-950 text-lg font-semibold mb-2">Investor Value</h3>
            <p className="text-green-800 text-sm">
              Exchange revenues fuel long-term growth opportunities.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="bg-green-900 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-green-800 hover:scale-105 transition duration-300">
            Explore Shae Exchange
          </button>
        </div>

      </div>
    </section>
  );
};

export default Exchange;
