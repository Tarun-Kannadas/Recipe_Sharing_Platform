export interface Profile {
  id: string
  username: string | null
  full_name: string | null
  phone_number: string | null
  created_at: string
  updated_at: string
}

export interface Recipe {
  id: string
  created_at: string
  user_id: string
  title: string
  ingredients: string
  instructions: string
  cooking_time: number | null
  difficulty: 'easy' | 'medium' | 'hard' | null
  category: string | null
  updated_at: string
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile
        Insert: Omit<Profile, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Profile, 'id' | 'created_at' | 'updated_at'>>
      }
      recipes: {
        Row: Recipe
        Insert: Omit<Recipe, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Recipe, 'id' | 'created_at' | 'updated_at'>>
      }
    }
  }
}
