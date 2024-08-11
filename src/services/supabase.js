import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sxgxueapcmjqyrnmvnln.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4Z3h1ZWFwY21qcXlybm12bmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4MTQyMzUsImV4cCI6MjAzODM5MDIzNX0.9bbUNaUCH5QW6d3rlwQbknjzJU1YWabkeHuksB4ZY4E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
