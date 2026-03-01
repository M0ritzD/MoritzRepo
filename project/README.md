# Project

Angular 20 Projekt mit Standalone Components Architektur.

## Entwicklung

```bash
npm install
ng serve
```

App öffnen unter `http://localhost:4200/`.

## Build

```bash
ng build
```

## Architektur

- **`core/`** – Singleton-Services, Guards, Interceptors
- **`shared/`** – Wiederverwendbare standalone Komponenten, Pipes, Directives
- **`features/`** – Feature-Bereiche mit eigenen Routes (Lazy Loaded)
- **`layout/`** – App-Layout Komponenten (Header, Footer)
