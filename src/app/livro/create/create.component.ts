import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router';
import { Autor } from '../../autor/autor';
import { Assunto } from '../../assunto/assunto';
import { Venda } from '../../venda/venda';
import { AutorService } from '../../autor/autor.service';
import { AssuntoService } from '../../assunto/assunto.service';
import { VendaService } from '../../venda/venda.service';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form!: FormGroup;
  autores: Autor[] = [];
  assuntos: Assunto[] = [];
  precos: Venda[] = [];
  
  constructor(
    private livroService: LivroService,
    private autorService: AutorService,
    private assuntoService: AssuntoService,
    private vendaService: VendaService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      editora: new FormControl('', [Validators.required]),
      edicao: new FormControl('', [Validators.required]),
      anoPublicacao: new FormControl('', [Validators.required]),
      autores: new FormControl(null, [Validators.required]),
      assuntos: new FormControl(null),
      precos: new FormControl(null)
    });

    this.autorService.getAll().subscribe(res => {
      this.autores = res;
    });

    this.assuntoService.getAll().subscribe(res => {  
      this.assuntos = res;
    });

    this.vendaService.getAll().subscribe(res => {
      this.precos = res;
    });
  }

  get c() {
    return this.form.controls;
  }

  submit() {
    this.form.value.precos = this.precos.filter(p => p.venda > 0);
    this.livroService.create(this.form.value).subscribe(res => {
      this.router.navigateByUrl('livro/index');
    })
  }

}
