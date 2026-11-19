// lib/types.ts

export type Stat = "saber" | "brillo" | "calma" | "hechizos";

// 0 = domingo, 1 = lunes … 6 = sábado (igual que Date.getDay())
export type Dia = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface Tarea {
  id: string;
  nombre: string;
  dias: Dia[];
  stat: Stat;
  xp: number;
  opcional: boolean;
}

export interface RegistroDia {
  fecha: string; // formato "YYYY-MM-DD", ej. "2026-11-19"
  completadas: Tarea[]; // copia de las tareas: el historial no cambia si editas una tarea
  rol: boolean;
}

export interface Hada {
  nombre: string;
  xpTotal: number; // el nivel se calcula a partir de aquí en lib/xp.ts
  monedas: number;
  stats: Record<Stat, number>; // XP acumulada en cada stat
  racha: number;
  comodinesRestantes: number;
}