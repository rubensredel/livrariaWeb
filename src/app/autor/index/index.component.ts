import { Component } from '@angular/core';
import { Autor } from '../autor';
import { AutorService } from '../autor.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [RouterModule, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  autores: Autor[] = [];

  constructor(public autorService: AutorService) { }

  ngOnInit(): void {
    this.autorService.getAll().subscribe((data: Autor[]) => {
      this.autores = data;
    })
  }

  deletePost(id: number) {
    this.autorService.delete(id).subscribe(res => {
      this.autores = this.autores.filter(item => item.codAu !== id);
    })
  }
}
