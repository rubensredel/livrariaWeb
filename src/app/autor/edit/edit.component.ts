import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutorService } from '../autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from '../autor';
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
    private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      codAu: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required])
    });

    this.autorService.find(this.route.snapshot.params['codAu']).subscribe((data: Autor) => {
      this.form.setValue({
        codAu: data['codAu'],
        nome: data['nome']
      });
    });
  }

  get c() {
    return this.form.controls;
  }

  submit() {
    this.autorService.update(this.route.snapshot.params['codAu'], this.form.value).subscribe(res => {
      this.router.navigateByUrl('autor/index');
    })
  }
}
