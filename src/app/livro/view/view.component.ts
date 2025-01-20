import { Component } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  codl!: number;
  livro!: Livro;

  constructor(
    public livroService: LivroService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.codl = this.route.snapshot.params['codl'];
    this.livroService.find(this.codl).subscribe((data: Livro) => {
      this.livro = data;
    });
  }
}
