import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server },
  { path: 'landing', renderMode: RenderMode.Server },
  { path: 'login', renderMode: RenderMode.Server },
  { path: 'registro', renderMode: RenderMode.Server },
  { path: '**', renderMode: RenderMode.Server } // ← Maneja todo lo demás (SSR dinámico)
];