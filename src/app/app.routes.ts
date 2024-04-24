import { Routes } from '@angular/router';
import { AddMessageComponent } from './add-message/add-message.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { AjoutCompteComponent } from './ajout-compte/ajout-compte.component';
import { CafeComponent } from './cafe/cafe.component';
import { CalculeDegreComponent } from './calcule-degre/calcule-degre.component';
import { Comp1Component } from './comp1/comp1.component';
import { ComptesComponent } from './comptes/comptes.component';
import { DasbordComponent } from './dasbord/dasbord.component';
import { DesignMatComponent } from './design-mat/design-mat.component';
import { DomComponent } from './dom/dom.component';
import { ExoComponent } from './exo/exo.component';
import { Exo2Component } from './exo2/exo2.component';
import { FormationRjsComponent } from './formation-rjs/formation-rjs.component';
import { FormationComponent } from './formation/formation.component';
import { LoginComponent } from './layout/composant/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ListeMatieresComponent } from './liste-matieres/liste-matieres.component';
import { MatiereComponent } from './matiere/matiere.component';
import { MessagerieListComponent } from './messagerie-list/messagerie-list.component';
import { ModifierCompteComponent } from './modifier-compte/modifier-compte.component';
import { MonCVComponent } from './mon-cv/mon-cv.component';
import { MonDomComponent } from './mon-dom/mon-dom.component';
import { OnchangeComponent } from './onchange/onchange.component';
import { OperationComponent } from './operation/operation.component';
import { ParentComponent } from './parent/parent.component';
import { PersonneComponent } from './personne/personne.component';
import { UploadComponent } from './upload/upload.component';

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
  {path:"login",component:LoginComponent},
  {path:"exo5",component:ParentComponent},
  {path:"exo6",component:OnchangeComponent},
  {path:"comp1",component:Comp1Component},
  {path:"dasbord",component:DasbordComponent},
  {path:"exo7",component:ExoComponent},
  {path:"message",component:MessagerieListComponent},
  {path:"addMessage",component:AddMessageComponent},
  {path:"upload",component:UploadComponent},
  {path:"design",component:DesignMatComponent},
  {path:"exo8",component:Exo2Component}
];
