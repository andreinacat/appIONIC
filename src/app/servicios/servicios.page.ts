import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  private productos =[
    {
      id : '1',
      nombre : 'cazuela',
      imagenurl : 'https://images-gmi-pmc.edge-generalmills.com/5722b9dc-deaa-497b-8581-a79af9cf1002.jpg',
      coment : ['rica la cazuelita','las papitas de muerte']
    },
    {
      id : '2',
      nombre : 'pastel de choclo',
      imagenurl : 'http://perudelights.com/wp-content/uploads/2012/10/Pastel-de-choclo.jpg',
      coment : ['lo mejor de shile','gratinado con azucar']
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
