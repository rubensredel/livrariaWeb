import { Component } from '@angular/core';
import { Assunto } from '../assunto';
import { AssuntoService } from '../assunto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  codAu!: number;
  assunto!: Assunto;

  constructor(
    public assuntoService: AssuntoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.codAu = this.route.snapshot.params['codAs'];
    this.assuntoService.find(this.codAu).subscribe((data: Assunto) => {
      this.assunto = data;
    });
  }
}
