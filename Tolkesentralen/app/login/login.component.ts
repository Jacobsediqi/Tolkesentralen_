import { Component } from '@angular/core';
@Component({
    template: `
        <h4>Login: Velg bruker</h4>
        <hr />
        <button class="btn btn-default" routerLink="/kunde">Kunde</button>
        <button class="btn btn-default" routerLink="/tolk">Tolk</button>
        <button class="btn btn-default" routerLink="/admin">Admin</button>
        `
})
export class LoginComponent { }