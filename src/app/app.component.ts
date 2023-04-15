import { Component } from '@angular/core';
import { FactsService } from 'src/service/facts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalProjectRandomFacts';
  constructor(
    private factservice: FactsService
  ){}

  fact = "Click button to get a random fact!";

getFact(){
  this.factservice.getFacts().subscribe(res =>{
    this.fact = res[0].fact;
    console.log(this.fact)
  })
}

}
