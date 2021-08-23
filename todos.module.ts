import { NgModule } from "@angular/core";
import { TodosComponent } from 'src/app/todos/components/todos.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "src/app/todos/components/header/header.component";
import {TodosService} from './services/todos.services';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './components/todo/todo.component';
import {MainComponent} from './components/main/main.component';
import { FooterComponent } from "./components/footer/footer.component";
const routes: Routes = [
    {
        path: '',
        component: TodosComponent,
    },
];

@NgModule({
    declarations:[ FooterComponent, TodoComponent, TodosComponent, HeaderComponent,MainComponent],
    imports:[RouterModule.forChild(routes), CommonModule],
    providers: [TodosService],
})
export class TodosModule {

}