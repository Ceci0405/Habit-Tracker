import type { Tarea } from "@/lib/types";

export const TAREAS: Tarea[] = [
  {
    id: "oscp",
    nombre: "Estudiar OSCP",
    dias: [1, 2, 3, 4, 5],
    stat: "saber", 
    xp: 50,
    opcional: false,
  },
    {
    id: "stream",
    nombre: "Stream",
    dias: [2, 4, 5, 6],
    stat: "brillo", 
    xp: 50,
    opcional: false,
  },
    {
    id: "limpieza",
    nombre: "Limpieza",
    dias: [1, 2, 3, 4,],
    stat: "calma", 
    xp: 30,
    opcional: false,
  },
    {
    id: "piano",
    nombre: "Piano",
    dias: [1, 2, 3, 4, 5, 6, 0],
    stat: "hechizos", 
    xp: 50,
    opcional: false,
  },

];