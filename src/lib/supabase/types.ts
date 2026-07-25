export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole = "student" | "teacher" | "admin";

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string | null;
          full_name: string | null;
          avatar_url: string | null;
          role: UserRole;
          phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: UserRole;
          phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: UserRole;
          phone?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      instructors: {
        Row: {
          id: string;
          name: string;
          slug: string;
          bio: string;
          photo_url: string | null;
          specialties: string[];
          active: boolean;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          bio: string;
          photo_url?: string | null;
          specialties?: string[];
          active?: boolean;
        };
        Update: Partial<Database["public"]["Tables"]["instructors"]["Insert"]>;
        Relationships: [];
      };
      class_types: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          level: string;
          intensity: string;
          duration_minutes: number;
          active: boolean;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description: string;
          level: string;
          intensity: string;
          duration_minutes: number;
          active?: boolean;
        };
        Update: Partial<Database["public"]["Tables"]["class_types"]["Insert"]>;
        Relationships: [];
      };
      class_sessions: {
        Row: {
          id: string;
          class_type_id: string;
          instructor_id: string | null;
          starts_at: string;
          ends_at: string;
          capacity: number;
          location: string;
          status: string;
        };
        Insert: {
          id?: string;
          class_type_id: string;
          instructor_id?: string | null;
          starts_at: string;
          ends_at: string;
          capacity: number;
          location: string;
          status?: string;
        };
        Update: Partial<Database["public"]["Tables"]["class_sessions"]["Insert"]>;
        Relationships: [];
      };
      bookings: {
        Row: {
          id: string;
          user_id: string;
          class_session_id: string;
          status: string;
          created_at: string;
          cancelled_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          class_session_id: string;
          status?: string;
          created_at?: string;
          cancelled_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["bookings"]["Insert"]>;
        Relationships: [];
      };
      memberships: {
        Row: {
          id: string;
          user_id: string;
          type: string;
          status: string;
          starts_at: string;
          ends_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          type: string;
          status?: string;
          starts_at: string;
          ends_at: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["memberships"]["Insert"]>;
        Relationships: [];
      };
      site_settings: {
        Row: {
          key: string;
          value: Json;
          updated_at: string;
        };
        Insert: {
          key: string;
          value?: Json;
          updated_at?: string;
        };
        Update: {
          value?: Json;
          updated_at?: string;
        };
        Relationships: [];
      };
      testimonials: {
        Row: {
          id: string;
          name: string;
          body: string;
          rating: number | null;
          active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          body: string;
          rating?: number | null;
          active?: boolean;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["testimonials"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
