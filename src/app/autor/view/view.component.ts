import { Component } from '@angular/core';
import { Autor } from '../autor';
import { AutorService } from '../autor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  codAu!: number;
  autor!: Autor;

  constructor(
    public autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.codAu = this.route.snapshot.params['codAu'];
    this.autorService.find(this.codAu).subscribe((data: Autor) => {
      this.autor = data;
    });
  }

}
