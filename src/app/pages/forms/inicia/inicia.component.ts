import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inicia',
  templateUrl: './inicia.component.html',
  styleUrls: ['./inicia.component.scss']
})
export class IniciaComponent implements OnInit {

  idioma: string = "en"

  txt_sube = "Sube";
  txt_busca = "Busca";
  txt_analiza = "Analiza";

  txt_crece = "Invierte";
  txt_cuida = "Ahorra";


  constructor(private router: Router) {}

  ngOnInit() {
    if (this.idioma === 'en') {
        this.txt_sube = "Upload";
        this.txt_busca = "Search";
        this.txt_analiza = "Analyze";
    }
  }

  func1() {
    console.log('FinnApp: action func1');
  }

  func2() {
    console.log('FinnApp: action func2');
  }

  gotoCrece(){
    console.log('FinnApp: action sube - crece');
    this.router.navigate(['/pages/sube']); 
  }
  
  gotoCuida(){
    console.log('FinnApp: action busca - cuida');
    this.router.navigate(['/pages/busca']); 
  }
  

  gotoBoton() {
    console.log('FinnApp: action boton :: Cripto');
    this.router.navigate(['/pages/buttons']); 
  }


  gotoAuth(){
    console.log('FinnApp: action auth');
    this.router.navigate(['/auth']); 
  }

  gotoRegister(){
    console.log('FinnApp: action auth');
    this.router.navigate(['/auth/register']); 
  }



}
