import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { SearchPage } from './pages/search-page/search-page';
import { ProfilePage } from './pages/profile-page/profile-page';
import { Layout } from './common-ui/layout/layout';
import { canActivateAuth } from './auth/access.guard';
import { SettingPage } from './pages/setting-page/setting-page';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'profile/me', pathMatch: 'full' },
      { path: 'profile/:id', component: ProfilePage },
      { path: 'settings', component: SettingPage },
      { path: 'search', component: SearchPage },
    ],
    canActivate: [canActivateAuth],
  },
  { path: 'login', component: LoginPage },
];
