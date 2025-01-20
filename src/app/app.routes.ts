import { Routes } from '@angular/router';
import { IndexComponent as AutorIndexComponent } from './autor/index/index.component';
import { ViewComponent as AutorViewComponent } from './autor/view/view.component';
import { CreateComponent as AutorCreateComponent } from './autor/create/create.component';
import { EditComponent as AutorEditComponent } from './autor/edit/edit.component';
import { IndexComponent as AssuntoIndexComponent } from './assunto/index/index.component';
import { ViewComponent as AssuntoViewComponent } from './assunto/view/view.component';
import { CreateComponent as AssuntoCreateComponent } from './assunto/create/create.component';
import { EditComponent as AssuntoEditComponent } from './assunto/edit/edit.component';
import { IndexComponent as VendaIndexComponent } from './venda/index/index.component';
import { ViewComponent as VendaViewComponent } from './venda/view/view.component';
import { CreateComponent as VendaCreateComponent } from './venda/create/create.component';
import { EditComponent as VendaEditComponent } from './venda/edit/edit.component';
import { IndexComponent as LivroIndexComponent } from './livro/index/index.component';
import { ViewComponent as LivroViewComponent } from './livro/view/view.component';
import { CreateComponent as LivroCreateComponent } from './livro/create/create.component';
import { EditComponent as LivroEditComponent } from './livro/edit/edit.component';

export const routes: Routes = [
    { path: 'autor', redirectTo: 'autor/index', pathMatch: 'full'},
    { path: 'autor/index', component: AutorIndexComponent },
    { path: 'autor/:codAu/view', component: AutorViewComponent },
    { path: 'autor/create', component: AutorCreateComponent },
    { path: 'autor/:codAu/edit', component: AutorEditComponent },
    { path: 'assunto', redirectTo: 'assunto/index', pathMatch: 'full'},
    { path: 'assunto/index', component: AssuntoIndexComponent },
    { path: 'assunto/:codAs/view', component: AssuntoViewComponent },
    { path: 'assunto/create', component: AssuntoCreateComponent },
    { path: 'assunto/:codAs/edit', component: AssuntoEditComponent },
    { path: 'venda', redirectTo: 'venda/index', pathMatch: 'full'},
    { path: 'venda/index', component: VendaIndexComponent },
    { path: 'venda/:codV/view', component: VendaViewComponent },
    { path: 'venda/create', component: VendaCreateComponent },
    { path: 'venda/:codV/edit', component: VendaEditComponent },
    { path: 'livro', redirectTo: 'livro/index', pathMatch: 'full'},
    { path: 'livro/index', component: LivroIndexComponent },
    { path: 'livro/:codl/view', component: LivroViewComponent },
    { path: 'livro/create', component: LivroCreateComponent },
    { path: 'livro/:codl/edit', component: LivroEditComponent }
];
