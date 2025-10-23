import { createClient } from '@/lib/supabase/server'
import { Recipe as SupabaseRecipe } from '@/lib/types/database'
import { SiteHeader } from '@/components/site-header'

// Mock recipe interface for fallback data
interface MockRecipe {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  likes: number;
  comments: number;
  saves: number;
}

export default async function Home() {
  const supabase = await createClient()
  
  // Fetch recipes from Supabase
  const { data: recipes, error } = await supabase
    .from('recipes')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching recipes:', error)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 py-8 sm:py-10">
        <HeroSection />
        <SearchAndFilters />
        <RecipeGrid recipes={recipes || []} />
      </main>
      <SiteFooter />
    </div>
  );
}

// Mock data for when no recipes exist
function getMockRecipes(): MockRecipe[] {
  return [
    {
      id: "1",
      title: "Creamy Garlic Pasta",
      description: "Silky, garlicky pasta ready in 20 minutes.",
      category: "Dinner",
      imageUrl: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?w=800&q=60&auto=format&fit=crop",
      likes: 128,
      comments: 12,
      saves: 54,
    },
    {
      id: "2",
      title: "Avocado Toast Deluxe",
      description: "Crispy sourdough, creamy avo, chili flakes.",
      category: "Breakfast",
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=60&auto=format&fit=crop",
      likes: 86,
      comments: 5,
      saves: 33,
    },
    {
      id: "3",
      title: "Berry Yogurt Parfait",
      description: "Layers of yogurt, granola, and fresh berries.",
      category: "Dessert",
      imageUrl: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&q=60&auto=format&fit=crop",
      likes: 64,
      comments: 3,
      saves: 21,
    },
    {
      id: "4",
      title: "Veggie Buddha Bowl",
      description: "Wholesome grains, greens, and tahini drizzle.",
      category: "Vegan",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=60&auto=format&fit=crop",
      likes: 142,
      comments: 18,
      saves: 71,
    },
    {
      id: "5",
      title: "Chicken Tacos",
      description: "Zesty chicken with pico and lime crema.",
      category: "Lunch",
      imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=60&auto=format&fit=crop",
      likes: 97,
      comments: 10,
      saves: 40,
    },
    {
      id: "6",
      title: "Quick Fried Rice",
      description: "Weeknight-friendly, loaded with veggies.",
      category: "Quick",
      imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=60&auto=format&fit=crop",
      likes: 120,
      comments: 9,
      saves: 58,
    },
  ];
}

function HeroSection() {
  return (
    <section className="py-2 sm:py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Discover and share your favorite recipes</h1>
      <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">Create, explore, and save delicious ideas from the community. Start with a search or browse by category.</p>
    </section>
  );
}

function SearchAndFilters() {
  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Vegan", "Quick"];
  return (
    <section className="mt-6 flex flex-col gap-4">
      <form className="flex w-full items-center gap-2">
        <input
          name="q"
          placeholder="Search recipes, ingredients, or categories..."
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary"
        />
        <button type="submit" className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 active:opacity-100">
          Search
        </button>
      </form>
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className="rounded-full border border-border px-3 py-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40"
          >
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}

function RecipeGrid({ recipes }: { recipes: SupabaseRecipe[] }) {
  // Use mock data if no recipes from Supabase
  const displayRecipes = recipes.length > 0 ? recipes : getMockRecipes();
  
  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {displayRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

function RecipeCard({ recipe }: { recipe: SupabaseRecipe | MockRecipe }) {
  // Handle both Supabase and mock data structures
  const isSupabaseRecipe = 'ingredients' in recipe;
  
  return (
    <article className="group rounded-lg border border-border bg-card text-card-foreground overflow-hidden">
      <div className="relative aspect-[16/10] bg-muted">
        {isSupabaseRecipe ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="text-4xl">🍽️</div>
          </div>
        ) : (
          <img
            src={(recipe as MockRecipe).imageUrl}
            alt={recipe.title}
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold leading-snug line-clamp-2">{recipe.title}</h3>
          <span className="shrink-0 rounded-full bg-secondary text-secondary-foreground px-2 py-0.5 text-[10px] uppercase tracking-wide">
            {isSupabaseRecipe ? recipe.category || 'Recipe' : recipe.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {isSupabaseRecipe ? recipe.ingredients.substring(0, 100) + '...' : (recipe as MockRecipe).description}
        </p>
        <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            {isSupabaseRecipe ? (
              <>
                <span className="inline-flex items-center gap-1">⏱️ {recipe.cooking_time || 'N/A'}min</span>
                <span className="inline-flex items-center gap-1">📊 {recipe.difficulty || 'N/A'}</span>
              </>
            ) : (
              <>
                <span className="inline-flex items-center gap-1">❤️ {(recipe as MockRecipe).likes}</span>
                <span className="inline-flex items-center gap-1">💬 {(recipe as MockRecipe).comments}</span>
                <span className="inline-flex items-center gap-1">🔖 {(recipe as MockRecipe).saves}</span>
              </>
            )}
          </div>
          <button className="rounded-md border border-border px-2 py-1 hover:bg-accent hover:text-accent-foreground">View</button>
        </div>
      </div>
    </article>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border/60">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} RecipeShare</span>
        <a className="hover:text-foreground" href="#">About</a>
      </div>
      </footer>
  );
}
