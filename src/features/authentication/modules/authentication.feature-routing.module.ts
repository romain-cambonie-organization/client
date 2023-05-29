import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationLayout } from '../layouts';
import { ActivatePage, ForgotPasswordPage, LoginPage, RegisterPage, ResetPasswordPage } from '../pages';

const ROUTES: Routes = [
  {
    children: [
      {
        component: LoginPage,
        path: 'login',
        title: 'romain-cambonie - Connexion',
        data: { animation: 'LoginPage' }
      },
      {
        component: RegisterPage,
        path: 'register',
        title: 'romain-cambonie - Créez votre compte',
        data: { animation: 'RegisterPage' }
      },
      {
        component: ForgotPasswordPage,
        path: 'forgot-password',
        title: 'romain-cambonie - Mot de passe oublié',
        data: { animation: 'ForgotPasswordPage' }
      },
      {
        component: ResetPasswordPage,
        path: 'reset-password',
        title: 'romain-cambonie - Réinitialisation du mot de passe',
        data: { animation: 'ResetPasswordPage' }
      },
      {
        component: ActivatePage,
        path: 'activate',
        title: 'romain-cambonie - Activation de votre compte',
        data: { animation: 'ActivatePage' }
      }
    ],
    component: AuthenticationLayout,
    path: ''
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(ROUTES)]
})
export class AuthenticationFeatureRoutingModule {}
