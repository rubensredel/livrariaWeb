import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AssuntoService } from '../assunto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Assunto } from '../assunto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  form!: FormGroup;

  constructor(
    private assuntoService: AssuntoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      codAs: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required])
    });

    this.assuntoService.find(this.route.snapshot.params['codAs']).subscribe((data: Assunto) => {
      this.form.setValue({
        codAs: data['codAs'],
        descricao: data['descricao']
      });
    });
  }

  get c() {
    return this.form.controls;
  }

  submit() {
    this.assuntoService.update(this.route.snapshot.params['codAs'], this.form.value).subscribe(res => {
      this.router.navigateByUrl('assunto/index');
    })
  }
}