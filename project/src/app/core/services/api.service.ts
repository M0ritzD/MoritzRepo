// api.service.ts – Zentraler API-Service
// Stellt HTTP-Methoden für die gesamte Anwendung bereit (providedIn: 'root')

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
    // private readonly baseUrl = environment.apiUrl;

    constructor(private readonly http: HttpClient) { }

    // TODO: Generische CRUD-Methoden implementieren
}
