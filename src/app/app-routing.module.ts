import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'forno',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'receita',
    loadChildren: () => import('./pages/receita/receita.module').then( m => m.ReceitaPageModule)
  },
  {
    path: 'forno',
    loadChildren: () => import('./pages/forno/forno.module').then( m => m.FornoPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'receitaaberta',
    loadChildren: () => import('./pages/receitaaberta/receitaaberta.module').then( m => m.ReceitaabertaPageModule)
  },
  {
    path: 'criarreceita',
    loadChildren: () => import('./pages/criarreceita/criarreceita.module').then( m => m.CriarreceitaPageModule)
  },
  {
    path: 'historicoprocesso',
    loadChildren: () => import('./pages/historicoprocesso/historicoprocesso.module').then( m => m.HistoricoprocessoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
