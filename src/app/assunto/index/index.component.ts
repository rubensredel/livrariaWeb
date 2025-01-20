import { Component } from '@angular/core';
import { Assunto } from '../assunto';
import { AssuntoService } from '../assunto.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [RouterModule, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  assuntos: Assunto[] = [];

  constructor(public assuntoService: AssuntoService) { }

  ngOnInit(): void {
    this.assuntoService.getAll().subscribe((data: Assunto[]) => {
      this.assuntos = data;
    })
  }

  deletePost(id: number) {
    this.assuntoService.delete(id).subscribe(res => {
      this.assuntos = this.assuntos.filter(item => item.codAs !== id);
    })
  }
}
