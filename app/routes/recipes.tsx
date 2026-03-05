import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import type { Route } from "./+types/recipes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Recipes - Vintage Story Companion" },
    { name: "description", content: "Browse and manage Vintage Story recipes" },
  ];
}

// Mock recipe data for testing
const mockRecipes = [
  {
    id: "1",
    name: "Iron Pickaxe",
    category: "Tools",
    craftingStation: "Anvil",
    materials: [
      { name: "Iron Ingot", quantity: 6 },
      { name: "Stick", quantity: 2 },
    ],
    description: "A sturdy pickaxe for mining ores and stones.",
    craftingTime: "10 seconds",
  },
  {
    id: "2",
    name: "Sourdough Bread",
    category: "Food",
    craftingStation: "Table",
    materials: [
      { name: "Flour", quantity: 4 },
      { name: "Water", quantity: 1 },
    ],
    description: "Freshly baked bread with a crispy crust.",
    craftingTime: "30 seconds",
  },
  {
    id: "3",
    name: "Lantern",
    category: "Lighting",
    craftingStation: "Carpenter",
    materials: [
      { name: "Iron Ingot", quantity: 2 },
      { name: "Glass", quantity: 1 },
      { name: "Tallow", quantity: 1 },
    ],
    description: "A portable light source for exploring dark caves.",
    craftingTime: "15 seconds",
  },
];

export default function Recipes() {
  const [recipes, setRecipes] = useState(mockRecipes);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  // Form state
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    category: "",
    craftingStation: "",
    materials: "",
    description: "",
    craftingTime: "",
  });

  // Fuzzy search configuration
  const fuse = useMemo(() => {
    return new Fuse(recipes, {
      keys: ["name", "category", "craftingStation", "description"],
      threshold: 0.4,
      includeScore: true,
    });
  }, [recipes]);

  // Filtered recipes based on search
  const filteredRecipes = useMemo(() => {
    if (!searchQuery.trim()) {
      return recipes;
    }
    const results = fuse.search(searchQuery);
    return results.map((result) => result.item);
  }, [searchQuery, fuse, recipes]);

  const handleAddRecipe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse materials string into array
    const materialsArray = newRecipe.materials
      .split(",")
      .map((m) => {
        const match = m.trim().match(/(\d+)\s+(.+)/);
        if (match) {
          return { quantity: parseInt(match[1]), name: match[2] };
        }
        return null;
      })
      .filter(Boolean) as { name: string; quantity: number }[];

    const recipe = {
      id: Date.now().toString(),
      name: newRecipe.name,
      category: newRecipe.category,
      craftingStation: newRecipe.craftingStation,
      materials: materialsArray,
      description: newRecipe.description,
      craftingTime: newRecipe.craftingTime || "10 seconds",
    };

    setRecipes([recipe, ...recipes]);
    setNewRecipe({
      name: "",
      category: "",
      craftingStation: "",
      materials: "",
      description: "",
      craftingTime: "",
    });
    setShowAddForm(false);
  };

  const categories = ["Tools", "Food", "Lighting", "Armor", "Weapons", "Building", "Decor"];
  const stations = ["Anvil", "Table", "Carpenter", "Pottery Wheel", "Quern"];

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <div className="bg-earth-800 text-earth-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl font-bold mb-2">Recipes</h1>
              <p className="text-earth-300 text-lg">
                Discover and manage crafting recipes for Vintage Story
              </p>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-2 px-6 py-3 bg-earth-600 hover:bg-earth-500 rounded-lg transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Recipe
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-earth-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search recipes by name, category, or station..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors text-earth-900 placeholder-earth-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-earth-400 hover:text-earth-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-2 text-sm text-earth-500">
              Found {filteredRecipes.length} {filteredRecipes.length === 1 ? "result" : "results"}
            </p>
          )}
        </div>
      </div>

      {/* Add Recipe Form */}
      {showAddForm && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="font-serif text-2xl font-bold text-earth-900 mb-6">Add New Recipe</h2>
            <form onSubmit={handleAddRecipe} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recipe Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2">
                    Recipe Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={newRecipe.name}
                    onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
                    className="w-full px-4 py-2 border border-earth-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors"
                    placeholder="e.g., Copper Sword"
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-earth-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    required
                    value={newRecipe.category}
                    onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })}
                    className="w-full px-4 py-2 border border-earth-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Crafting Station */}
                <div>
                  <label htmlFor="station" className="block text-sm font-medium text-earth-700 mb-2">
                    Crafting Station *
                  </label>
                  <select
                    id="station"
                    required
                    value={newRecipe.craftingStation}
                    onChange={(e) => setNewRecipe({ ...newRecipe, craftingStation: e.target.value })}
                    className="w-full px-4 py-2 border border-earth-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors"
                  >
                    <option value="">Select a station</option>
                    {stations.map((station) => (
                      <option key={station} value={station}>{station}</option>
                    ))}
                  </select>
                </div>

                {/* Crafting Time */}
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-earth-700 mb-2">
                    Crafting Time
                  </label>
                  <input
                    type="text"
                    id="time"
                    value={newRecipe.craftingTime}
                    onChange={(e) => setNewRecipe({ ...newRecipe, craftingTime: e.target.value })}
                    className="w-full px-4 py-2 border border-earth-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors"
                    placeholder="e.g., 10 seconds"
                  />
                </div>
              </div>

              {/* Materials */}
              <div>
                <label htmlFor="materials" className="block text-sm font-medium text-earth-700 mb-2">
                  Materials *
                </label>
                <input
                  type="text"
                  id="materials"
                  required
                  value={newRecipe.materials}
                  onChange={(e) => setNewRecipe({ ...newRecipe, materials: e.target.value })}
                  className="w-full px-4 py-2 border border-earth-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors"
                  placeholder="e.g., 3 Iron Ingot, 2 Stick"
                />
                <p className="mt-1 text-xs text-earth-500">Format: quantity Material Name (comma separated)</p>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-earth-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  value={newRecipe.description}
                  onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
                  className="w-full px-4 py-2 border border-earth-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-earth-500 transition-colors"
                  placeholder="Describe the recipe..."
                />
              </div>

              {/* Form Actions */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-earth-600 hover:bg-earth-500 text-white rounded-lg transition-colors font-medium"
                >
                  Add Recipe
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-2 border border-earth-200 hover:bg-earth-50 text-earth-700 rounded-lg transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Recipe List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-earth-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-earth-500 text-lg">No recipes found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* Recipe Header */}
                <div className="bg-earth-700 px-6 py-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-earth-100">{recipe.name}</h3>
                      <span className="inline-block mt-1 px-2 py-1 bg-earth-600 text-earth-200 text-xs rounded">
                        {recipe.category}
                      </span>
                    </div>
                    <div className="text-earth-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Recipe Body */}
                <div className="p-6">
                  {/* Crafting Station */}
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-earth-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-sm font-medium text-earth-700">
                      Station: <span className="text-earth-900">{recipe.craftingStation}</span>
                    </span>
                  </div>

                  {/* Crafting Time */}
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-earth-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-earth-700">
                      Time: <span className="text-earth-900">{recipe.craftingTime}</span>
                    </span>
                  </div>

                  {/* Materials */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-earth-700 mb-2">Materials Required:</h4>
                    <div className="flex flex-wrap gap-2">
                      {recipe.materials.map((material, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 bg-earth-100 text-earth-700 text-sm rounded-full"
                        >
                          <span className="font-bold mr-1">{material.quantity}x</span>
                          {material.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  {recipe.description && (
                    <p className="text-sm text-earth-600 border-t border-earth-100 pt-4">
                      {recipe.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
