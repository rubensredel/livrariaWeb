
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro';
import { CommonModule } from '@angular/common';
import { Autor } from '../../autor/autor';
import { Assunto } from '../../assunto/assunto';
import { Venda } from '../../venda/venda';
import { AutorService } from '../../autor/autor.service';
import { AssuntoService } from '../../assunto/assunto.service';
import { VendaService } from '../../venda/venda.service';
import { NgSelectModule } from '@ng-select/ng-select'; 

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, CommonModule, NgSelectModule ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  form!: FormGroup;
  autores: Autor[] = [];
  assuntos: Assunto[] = [];
  precos: Venda[] = [];

  constructor(
    private livroService: LivroService,
    private autorService: AutorService,
    private assuntoService: AssuntoService,
    private vendaService: VendaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      codl: new FormControl('', [Validators.required]),
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

    this.livroService.find(this.route.snapshot.params['codl']).subscribe((data: Livro) => {
      this.form.setValue({
        codl: data['codl'],
        titulo: data['titulo'],
        editora: data['editora'],
        edicao: data['edicao'],
        anoPublicacao: data['anoPublicacao'],
        autores: data['autores'],
        assuntos: data['assuntos'],
        precos: data['precos']
      });
    });
  }

  get c() {
    return this.form.controls;
  }

  compareAutores(t1: Autor, t2: Autor): boolean {
    return t1 && t2 ? t1.codAu === t2.codAu : t1 === t2;
  } 

  compareAssuntos(t1: Assunto, t2: Assunto): boolean {
    return t1 && t2 ? t1.codAs === t2.codAs : t1 === t2;
  } 

  submit() {
    this.form.value.precos = this.precos.filter(p => p.venda > 0);
    this.livroService.update(this.route.snapshot.params['codl'], this.form.value).subscribe(res => {
      this.router.navigateByUrl('livro/index');
    })
  }
}
