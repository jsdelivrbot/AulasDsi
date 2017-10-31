import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opcao-b',
  templateUrl: 'opcao-b.component.html',
})
export class OpcaoBComponent implements OnInit {

  public id: number;

  constructor(
    private router: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.router.params.subscribe( (params) => {
      const par = params['id'];
      console.log(`Passou ${par}.`);
      if (par != null) {
        this.id = Number.parseInt(par);
      }
    });
  }
}
