import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VendaService } from '../venda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Venda } from '../venda';
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
    private vendaService: VendaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      codV: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required])
    });

    this.vendaService.find(this.route.snapshot.params['codV']).subscribe((data: Venda) => {
      this.form.setValue({
        codV: data['codV'],
        descricao: data['descricao']
      });
    });
  }

  get c() {
    return this.form.controls;
  }

  submit() {
    this.vendaService.update(this.route.snapshot.params['codV'], this.form.value).subscribe(res => {
      this.router.navigateByUrl('venda/index');
    })
  }
}