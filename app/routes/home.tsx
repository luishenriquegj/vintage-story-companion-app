import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vintage Story Companion - Your Ultimate Game Guide" },
    { name: "description", content: "Your companion app for Vintage Story - crafting recipes, tools, items, and world exploration." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-earth-700 via-earth-600 to-earth-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grain" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="100" height="100" fill="transparent" />
              <circle cx="25" cy="25" r="1" fill="currentColor" />
              <circle cx="75" cy="75" r="1" fill="currentColor" />
              <circle cx="50" cy="10" r="0.5" fill="currentColor" />
              <circle cx="10" cy="60" r="0.5" fill="currentColor" />
              <circle cx="90" cy="40" r="0.5" fill="currentColor" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grain)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Vintage Story
              <span className="block text-earth-200 text-2xl md:text-3xl mt-2 font-normal">Companion App</span>
            </h1>
            <p className="text-lg md:text-xl text-earth-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Your ultimate guide to the medieval sandbox adventure. 
              Discover crafting recipes, explore tools, and master the art of survival in a blocky world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/recipes"
                className="inline-flex items-center justify-center px-8 py-4 bg-earth-800 hover:bg-earth-900 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Browse Recipes
              </Link>
              <Link
                to="/tools"
                className="inline-flex items-center justify-center px-8 py-4 bg-earth-100 text-earth-800 hover:bg-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                View Tools
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f7f3eb" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Everything You Need
            </h2>
            <p className="text-earth-600 max-w-2xl mx-auto">
              Your comprehensive guide to surviving and thriving in Vintage Story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Recipe Card */}
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              }
              title="Crafting Recipes"
              description="Browse all crafting recipes from basic tools to advanced machinery."
              href="/recipes"
              color="bg-amber-100 text-amber-600"
            />

            {/* Items Card */}
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              }
              title="Item Database"
              description="Explore all items in the game with detailed information and stats."
              href="/items"
              color="bg-stone-100 text-stone-600"
            />

            {/* Tools Card */}
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Tools Guide"
              description="Learn about all tools, their uses, and how to craft them."
              href="/tools"
              color="bg-forest-100 text-forest-600"
            />

            {/* World Card */}
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="World Info"
              description="Discover biomes, weather, and world generation details."
              href="/world"
              color="bg-clay-100 text-clay-600"
            />
          </div>
        </div>
      </section>

      {/* Game Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-earth-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-6">
                About Vintage Story
              </h2>
              <p className="text-earth-700 leading-relaxed mb-6">
                Vintage Story is a sandbox game inspired by Minecraft and Rust, 
                featuring a unique blocky world with a medieval, rustic aesthetic. 
                Survive, craft, build, and explore in a procedurally generated world 
                filled with challenges and adventures.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Procedurally generated voxel world",
                  "Realistic crafting and survival mechanics",
                  "Dynamic weather and climate system",
                  "Rich modding support and community",
                  "Beautiful medieval/Renaissance art style"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-earth-700">
                    <svg className="w-5 h-5 text-forest-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.vintagestory.bblockgames.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-earth-600 hover:text-earth-800 font-medium transition-colors"
              >
                Learn more on the official website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="relative">
              {/* Decorative Blocks */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { color: 'bg-earth-400', name: 'Dirt' },
                  { color: 'bg-stone-400', name: 'Stone' },
                  { color: 'bg-forest-500', name: 'Leaves' },
                  { color: 'bg-clay-500', name: 'Clay' },
                  { color: 'bg-earth-500', name: 'Wood' },
                  { color: 'bg-stone-500', name: 'Ore' },
                  { color: 'bg-amber-600', name: 'Copper' },
                  { color: 'bg-earth-600', name: 'Coal' },
                ].map((block, index) => (
                  <div
                    key={index}
                    className={`${block.color} aspect-square rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 flex items-end justify-center pb-2`}
                  >
                    <span className="text-xs text-white/80 font-medium drop-shadow-md">{block.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-earth-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Adventure?
          </h2>
          <p className="text-earth-200 text-lg mb-8">
            Start exploring the world of Vintage Story with all the tools and information you need at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/recipes"
              className="inline-flex items-center justify-center px-8 py-4 bg-earth-100 text-earth-800 hover:bg-white font-semibold rounded-xl transition-all duration-300"
            >
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://store.steampowered.com/app/582050/Vintage_Story/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-earth-400 text-earth-100 hover:bg-earth-700 font-semibold rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.979 0C5.668 0 .504 4.926.04 11.13L0 11.56c0 .138.014.27.042.4l.007.03.007.04c.117.45.292.87.505 1.25l.02.036c.21.374.46.72.745 1.025l.03.032c.282.3.6.562.95.78l.037.023c.345.214.72.38 1.114.49l.055.014c.383.107.783.16 1.19.16.38 0 .75-.04 1.105-.116l.05-.012c.362-.07.707-.183 1.03-.336l.045-.022c.314-.148.607-.333.873-.55l.037-.03c.26-.213.496-.45.705-.705l.027-.033c.204-.25.382-.516.532-.795l.02-.04c.144-.27.26-.554.35-.846l.012-.043c.085-.283.144-.577.177-.877l.004-.04c.03-.29.044-.583.044-.88 0-.284-.015-.563-.044-.835l-.005-.057c-.03-.27-.076-.532-.137-.785l-.015-.06c-.064-.256-.142-.503-.234-.74l-.023-.056c-.095-.242-.205-.47-.33-.684l-.024-.04c-.128-.22-.27-.425-.426-.614l-.03-.035c-.16-.192-.336-.37-.527-.533l-.037-.032c-.194-.165-.402-.316-.622-.45l-.04-.023c-.223-.137-.46-.257-.708-.36l-.05-.02c-.25-.104-.513-.19-.787-.255l-.06-.014c-.276-.065-.563-.113-.858-.143l-.06-.005c-.296-.03-.6-.046-.912-.046z"/>
              </svg>
              Get the Game
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, href, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
}) {
  return (
    <Link
      to={href}
      className="group block p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold text-earth-800 mb-2 group-hover:text-earth-600 transition-colors">
        {title}
      </h3>
      <p className="text-earth-600 text-sm leading-relaxed">
        {description}
      </p>
    </Link>
  );
}
