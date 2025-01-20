import { Component } from '@angular/core';
import { Venda } from '../venda';
import { VendaService } from '../venda.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [RouterModule, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  vendas: Venda[] = [];

  constructor(public vendaService: VendaService) { }

  ngOnInit(): void {
    this.vendaService.getAll().subscribe((data: Venda[]) => {
      this.vendas = data;
    })
  }

  deletePost(id: number) {
    this.vendaService.delete(id).subscribe(res => {
      this.vendas = this.vendas.filter(item => item.codV !== id);
    })
  }
}
