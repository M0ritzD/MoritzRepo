// header.component.ts – Standalone Header-Komponente

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    template: `<!-- TODO: Header-Navigation Template -->`,
    styles: [],
})
export class HeaderComponent { }
