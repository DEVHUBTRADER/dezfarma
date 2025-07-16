import { createClient } from '@supabase/supabase-js'

// Valores temporários para evitar erros
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo_key_placeholder'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
})

export interface Database {
  public: {
    Tables: {
      farmacias: {
        Row: {
          id: string
          nome: string
          endereco: string
          bairro: string
          cidade: string
          created_at: string
        }
        Insert: {
          id?: string
          nome: string
          endereco: string
          bairro: string
          cidade: string
          created_at?: string
        }
        Update: {
          id?: string
          nome?: string
          endereco?: string
          bairro?: string
          cidade?: string
          created_at?: string
        }
      }
      funcionarios: {
        Row: {
          id: string
          nome: string
          cargo: string
          farmacia_id: string
          leads_count: number
          created_at: string
        }
        Insert: {
          id?: string
          nome: string
          cargo: string
          farmacia_id: string
          leads_count?: number
          created_at?: string
        }
        Update: {
          id?: string
          nome?: string
          cargo?: string
          farmacia_id?: string
          leads_count?: number
          created_at?: string
        }
      }
      leads: {
        Row: {
          id: string
          nome_cliente: string
          email: string
          telefone: string
          telefone_verificado: boolean
          idade: number
          numero_familiares: number
          interesse_telemedicina: string
          farmacia_id: string
          funcionario_id: string
          created_at: string
        }
        Insert: {
          id?: string
          nome_cliente: string
          email: string
          telefone: string
          telefone_verificado?: boolean
          idade: number
          numero_familiares: number
          interesse_telemedicina: string
          farmacia_id: string
          funcionario_id: string
          created_at?: string
        }
        Update: {
          id?: string
          nome_cliente?: string
          email?: string
          telefone?: string
          telefone_verificado?: boolean
          idade?: number
          numero_familiares?: number
          interesse_telemedicina?: string
          farmacia_id?: string
          funcionario_id?: string
          created_at?: string
        }
      }
    }
  }
}