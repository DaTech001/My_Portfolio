// src/components/Features.jsx
import React, { useState } from 'react';

// Unique placeholder images for each card (replace with actual images)
const images = {
  cryptoIPO: '/images/ipo.jpg',
  recurringStaking: '/images/recur.png',
  fractionalNFTs: '/images/nf.webp',
  support: '/images/sup.webp',
  defiRecommendations: '/images/defi.webp',
  learnCrypto: '/images/learn.png',
};

const Features = () => {
  // State to track which card is flipped
  const [flippedCards, setFlippedCards] = useState({});

  // Toggle flip state for a specific card
  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Array of features with front and back content
  const features = [
    {
      title: 'Crypto IPO Access',
      image: images.cryptoIPO,
      backMessage:
        'Be among the first to invest in new cryptocurrency projects and token launches through our exclusive Crypto IPO access. Gain early access to promising blockchain projects before they hit the public market, allowing you to capitalize on emerging opportunities in the crypto space. Stay ahead of the curve with BlockTechcoins’s curated selection of high-potential token offerings.',
    },
    {
      title: 'Recurring Staking',
      image: images.recurringStaking,
      backMessage:
        'Automate your staking investments to earn consistent rewards on your crypto holdings, helping you grow your portfolio effortlessly. With BlockTechcoins, you can set up recurring stakes for popular cryptocurrencies like Bitcoin, Ethereum, and Solana, ensuring you maximize your returns over time. Our platform provides detailed analytics to track your staking rewards and optimize your strategy.',
    },
    {
      title: 'Fractional NFTs',
      image: images.fractionalNFTs,
      backMessage:
        'Start investing in high-value NFTs with as little as $1 by purchasing fractional shares of digital assets. Own a piece of rare digital art, collectibles, or virtual real estate without needing to buy the entire NFT. BlockTechcoins’s fractional NFT marketplace makes it easy to diversify your portfolio and participate in the growing NFT ecosystem, even with a small budget.',
    },
    {
      title: '24/7 Support',
      image: images.support,
      backMessage:
        'Our dedicated support team is here for you around the clock to assist with any questions or issues you may have. Whether you need help with account setup, trading, staking, or understanding Web3 features, we’re just a click away. Reach out via live chat, email, or phone, and our knowledgeable team will provide prompt and personalized assistance, ensuring a seamless experience on BlockTechcoins.',
    },
    {
      title: 'DeFi Recommendations',
      image: images.defiRecommendations,
      backMessage:
        'Get personalized DeFi investment recommendations to help you navigate the world of decentralized finance with confidence. BlockTechcoins analyzes your risk profile, investment goals, and market trends to suggest high-yield opportunities in DeFi protocols, such as yield farming, liquidity pools, and lending platforms. Start exploring the potential of DeFi with tailored insights designed to maximize your returns.',
    },
    {
      title: 'Learn Crypto Basics',
      image: images.learnCrypto,
      backMessage:
        'Gain more financial knowledge with our beginner-friendly guides on cryptocurrency, blockchain, and Web3 technologies. Whether you’re new to crypto or looking to deepen your understanding, BlockTechcoins offers comprehensive resources, including articles, videos, and tutorials, covering topics like wallet security, smart contracts, and decentralized applications. Start your crypto journey with confidence and build a strong foundation for success.',
    },
  ];

  return (
    <section className="bg-gray-900 py-12 md:py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Why Invest with BlockTechcoins?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative w-full h-80 perspective-1000"
              role="button"
              tabIndex={0}
              aria-expanded={flippedCards[index] || false}
              aria-controls={`feature-back-${index}`}
              onClick={() => toggleFlip(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleFlip(index);
                }
              }}
            >
              {/* Card Container with Flip Animation */}
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d cursor-pointer hover:scale-105 ${
                  flippedCards[index] ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of the Card */}
                <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-between p-6 backface-hidden">
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {feature.title}
                    </h3>
      
                  </div>
                </div>

                {/* Back of the Card */}
                <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center p-6 backface-hidden rotate-y-180">
                  <p className="text-gray-300 text-center text-sm md:text-base">
                    {feature.backMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;