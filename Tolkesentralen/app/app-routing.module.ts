import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { InfoOmOssComponent }   from './info/info-om-oss.component';
import { InfoTolkComponent }     from './info/info-tolk.component';
import { InfoOversettelseComponent }     from './info/info-oversettelse.component';
import { PageNotFoundComponent } from './not-found.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { BestillTolkComponent } from './bestill/bestill-tolk.component';
import { BestillOversettelseComponent } from './bestill/bestill-oversettelse.component';
import { AdminComponent } from './admin/admin.component';
import { KundeComponent } from './kunde/kunde.component';
import { TolkComponent } from './tolk/tolk.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'kunde', component: KundeComponent },
    { path: 'tolk', component: TolkComponent },
    { path: 'bestill-tolk', component: BestillTolkComponent },
    { path: 'bestill-oversettelse', component: BestillOversettelseComponent },
    { path: 'home', component: HomeComponent },
    { path: 'info-om-oss', component: InfoOmOssComponent },
    { path: 'info-tolk', component: InfoTolkComponent },
    { path: 'info-oversettelse', component: InfoOversettelseComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

export const routingComponents = [HomeComponent, BestillTolkComponent, BestillOversettelseComponent, PageNotFoundComponent, InfoOmOssComponent, InfoTolkComponent, InfoOversettelseComponent, LoginComponent, AdminComponent, KundeComponent, TolkComponent]
