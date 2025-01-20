import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VendaService } from '../venda.service';
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
    private vendaService: VendaService,
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
    this.vendaService.create(this.form.value).subscribe(res => {
      this.router.navigateByUrl('venda/index');
    })
  }

}
