import { defineStore } from "pinia";
import { supabase } from "../utils/supabase";
import { ref } from "vue";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref([]);

  // TODO Complete getTodos using the user_id (RLS), Implement easy and fast auth form for users

  const addTodo = async (todo) => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .insert([todo])
        .select()
        .single();

      if (error) throw error;

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getTodos = async () => {
    try {
      const { data, error } = await supabase.from("todos").select();

      if (error) throw error;

      console.log(data);

      todos.value = data;
    } catch (err) {
      console.error(err.message);
    }
  };

  return {
    todos,
    addTodo,
    getTodos,
  };
});
