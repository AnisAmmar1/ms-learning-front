import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Ajout de l'import pour le routage

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursComponent } from './cours/cours.component';
import { PostsComponent } from './posts/posts.component';
import { EventsComponent } from './events/events.component';
import { QuizComponent } from './quiz/quiz.component';
import { ForumComponent } from './forum/forum.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'cours/:id', component: CourseDetailComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursComponent,
    PostsComponent,
    EventsComponent,
    QuizComponent,
    ForumComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
