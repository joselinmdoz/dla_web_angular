# DLA - Landing Page Patch v2 (PrimeNG Sakai / Angular)

Este zip es un **patch** para tu proyecto Sakai.
Lo puse en las 2 rutas donde normalmente existe el landing:

- `src/app/demo/components/landing/`  ✅ (la más común en Sakai)
- `src/app/pages/landing/`

## Instalación
1) Descomprime el zip.
2) Copia la carpeta `src/` encima de tu proyecto (merge/replace).
3) Reinicia `ng serve` (Ctrl+C y vuelve a correrlo).
4) En el navegador: Ctrl+Shift+R.

## Si sigues viendo el landing viejo
Tu router puede estar cargando otra carpeta.
Busca `path: 'landing'` en:
- `src/app/app.routes.ts` o
- `src/app/app-routing.module.ts`

Comandos:
- Windows: `findstr /s /n /i "path: 'landing'" src\app\*.ts`
- ripgrep: `rg "path:\s*'landing'" src/app -n`
