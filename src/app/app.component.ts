import { Component, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'localstorageCrud';
  ngOnInit() {
    
  
  }
}
