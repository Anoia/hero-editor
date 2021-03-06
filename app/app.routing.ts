import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
