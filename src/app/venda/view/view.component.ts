import { Component } from '@angular/core';
import { Venda } from '../venda';
import { VendaService } from '../venda.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  codV!: number;
  venda!: Venda;

  constructor(
    public assuntoService: VendaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.codV = this.route.snapshot.params['codV'];
    this.assuntoService.find(this.codV).subscribe((data: Venda) => {
      this.venda = data;
    });
  }
}
