import { Component } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [RouterModule, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  livros: Livro[] = [];

  constructor(public livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.getAll().subscribe((data: Livro[]) => {
      this.livros = data;
    })
  }

  deletePost(id: number) {
    this.livroService.delete(id).subscribe(res => {
      this.livros = this.livros.filter(item => item.codl !== id);
    })
  }
}
