import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AssuntoService } from '../assunto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form!: FormGroup;
  
  constructor(
    private assuntoService: AssuntoService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      descricao: new FormControl('', [Validators.required])
    });
  }

  get c() {
    return this.form.controls;
  }

  submit() {
    this.assuntoService.create(this.form.value).subscribe(res => {
      this.router.navigateByUrl('assunto/index');
    })
  }

}
