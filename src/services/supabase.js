import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lvrdizxmnoaoxmeaoidz.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2cmRpenhtbm9hb3htZWFvaWR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMDY5MjUsImV4cCI6MjA2MDc4MjkyNX0.a_zMl8Zr-HNAox3XwFGsUxbTdVgOWjJVNx8JBnp8lVU`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
