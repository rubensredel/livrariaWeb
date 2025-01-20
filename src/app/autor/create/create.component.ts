import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutorService } from '../autor.service';
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
    private autorService: AutorService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required])
    });
  }

  get c() {
    return this.form.controls;
  }

  submit() {
    this.autorService.create(this.form.value).subscribe(res => {
      this.router.navigateByUrl('autor/index');
    })
  }

}
