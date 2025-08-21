export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      chains: {
        Row: {
          chain_id: number
          created_at: string | null
          explorer_url: string | null
          id: number
          is_active: boolean | null
          name: string
          native_token: string
          rpc_url: string
          updated_at: string | null
          ws_url: string | null
        }
        Insert: {
          chain_id: number
          created_at?: string | null
          explorer_url?: string | null
          id?: number
          is_active?: boolean | null
          name: string
          native_token: string
          rpc_url: string
          updated_at?: string | null
          ws_url?: string | null
        }
        Update: {
          chain_id?: number
          created_at?: string | null
          explorer_url?: string | null
          id?: number
          is_active?: boolean | null
          name?: string
          native_token?: string
          rpc_url?: string
          updated_at?: string | null
          ws_url?: string | null
        }
        Relationships: []
      }
      listings: {
        Row: {
          amount: number
          block_number: number | null
          chain_id: number
          created_at: string | null
          id: number
          is_active: boolean | null
          item_id: number
          listing_id: number
          native_token: string
          price_human: string
          price_wei: string
          seller_address: string
          tx_hash: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          block_number?: number | null
          chain_id: number
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          item_id: number
          listing_id: number
          native_token: string
          price_human: string
          price_wei: string
          seller_address: string
          tx_hash?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          block_number?: number | null
          chain_id?: number
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          item_id?: number
          listing_id?: number
          native_token?: string
          price_human?: string
          price_wei?: string
          seller_address?: string
          tx_hash?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      marketplace_events: {
        Row: {
          amount: number
          block_number: number
          buyer_address: string | null
          chain_id: number
          created_at: string | null
          currency_symbol: string
          event_id: string
          event_type: string
          id: number
          item_id: number
          item_name: string
          listing_id: string
          price_wei: string
          seller_address: string
          timestamp: string
          transaction_hash: string
        }
        Insert: {
          amount: number
          block_number: number
          buyer_address?: string | null
          chain_id: number
          created_at?: string | null
          currency_symbol: string
          event_id: string
          event_type: string
          id?: number
          item_id: number
          item_name: string
          listing_id: string
          price_wei: string
          seller_address: string
          timestamp: string
          transaction_hash: string
        }
        Update: {
          amount?: number
          block_number?: number
          buyer_address?: string | null
          chain_id?: number
          created_at?: string | null
          currency_symbol?: string
          event_id?: string
          event_type?: string
          id?: number
          item_id?: number
          item_name?: string
          listing_id?: string
          price_wei?: string
          seller_address?: string
          timestamp?: string
          transaction_hash?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_events_chain_id_fkey"
            columns: ["chain_id"]
            isOneToOne: false
            referencedRelation: "chains"
            referencedColumns: ["chain_id"]
          },
        ]
      }
      user_listing_stats: {
        Row: {
          chain_id: number
          created_at: string | null
          id: number
          last_activity: string | null
          total_listings: number | null
          total_sales: number | null
          total_volume: string | null
          updated_at: string | null
          user_address: string
        }
        Insert: {
          chain_id: number
          created_at?: string | null
          id?: number
          last_activity?: string | null
          total_listings?: number | null
          total_sales?: number | null
          total_volume?: string | null
          updated_at?: string | null
          user_address: string
        }
        Update: {
          chain_id?: number
          created_at?: string | null
          id?: number
          last_activity?: string | null
          total_listings?: number | null
          total_sales?: number | null
          total_volume?: string | null
          updated_at?: string | null
          user_address?: string
        }
        Relationships: []
      }
    }
    Views: {
      active_listings_view: {
        Row: {
          amount: number | null
          block_number: number | null
          chain_id: number | null
          created_at: string | null
          id: number | null
          is_active: boolean | null
          item_category: string | null
          item_id: number | null
          item_name: string | null
          listing_id: number | null
          native_token: string | null
          price_human: string | null
          price_wei: string | null
          seller_address: string | null
          tx_hash: string | null
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          block_number?: number | null
          chain_id?: number | null
          created_at?: string | null
          id?: number | null
          is_active?: boolean | null
          item_category?: never
          item_id?: number | null
          item_name?: never
          listing_id?: number | null
          native_token?: string | null
          price_human?: string | null
          price_wei?: string | null
          seller_address?: string | null
          tx_hash?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          block_number?: number | null
          chain_id?: number | null
          created_at?: string | null
          id?: number | null
          is_active?: boolean | null
          item_category?: never
          item_id?: number | null
          item_name?: never
          listing_id?: number | null
          native_token?: string | null
          price_human?: string | null
          price_wei?: string | null
          seller_address?: string | null
          tx_hash?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      recent_marketplace_activity: {
        Row: {
          amount: number | null
          block_number: number | null
          buyer_address: string | null
          chain_id: number | null
          chain_name: string | null
          created_at: string | null
          currency_symbol: string | null
          event_id: string | null
          event_type: string | null
          id: number | null
          item_id: number | null
          item_name: string | null
          listing_id: string | null
          price_wei: string | null
          seller_address: string | null
          timestamp: string | null
          transaction_hash: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_events_chain_id_fkey"
            columns: ["chain_id"]
            isOneToOne: false
            referencedRelation: "chains"
            referencedColumns: ["chain_id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
