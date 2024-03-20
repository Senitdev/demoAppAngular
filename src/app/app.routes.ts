import { Routes } from '@angular/router';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { AjoutCompteComponent } from './ajout-compte/ajout-compte.component';
import { CafeComponent } from './cafe/cafe.component';
import { CalculeDegreComponent } from './calcule-degre/calcule-degre.component';
import { ComptesComponent } from './comptes/comptes.component';
import { DomComponent } from './dom/dom.component';
import { FormationRjsComponent } from './formation-rjs/formation-rjs.component';
import { FormationComponent } from './formation/formation.component';
import { LoginComponent } from './layout/composant/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ListeMatieresComponent } from './liste-matieres/liste-matieres.component';
import { MatiereComponent } from './matiere/matiere.component';
import { ModifierCompteComponent } from './modifier-compte/modifier-compte.component';
import { MonCVComponent } from './mon-cv/mon-cv.component';
import { MonDomComponent } from './mon-dom/mon-dom.component';
import { OperationComponent } from './operation/operation.component';
import { PersonneComponent } from './personne/personne.component';

export const routes: Routes = [
  {path:"liste",component:ComptesComponent},
  {path:"ajouter",component:AjoutCompteComponent},
  {path:"modifier/:id",component:ModifierCompteComponent},
  {path:"matiere",component:MatiereComponent},
  {path:"listeMatiere",component:ListeMatieresComponent},
  {path:"age",component:OperationComponent},
  {path:"personne",component:PersonneComponent},
  {path:"addpersonne",component:AddPersonneComponent},
  {path:"cv",component:MonCVComponent},
  {path:"testDom",component:MonDomComponent},
  {path:"test1",component:FormationComponent},
  {path:"test2",component:DomComponent},
  {path:"exo2",component:CafeComponent},
  {path:"exo3",component:CalculeDegreComponent},
  {path:"exo4",component:FormationRjsComponent},
  {path:"tweet",component:LayoutComponent},
  {path:"login",component:LoginComponent}
];
