import { Component, OnInit, ElementRef} from '@angular/core';
import { Comments } from './model/comments';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  index: string = '';
  currentDate = new Date();
  constructor() {

  }

  ngOnInit(): void {
  }
  parentCall(data: string) {
    alert("thank you  " + data);
  }
  listData = [{
    "id": "1",
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "country": "India",
    "amount": 5000,
    "currencycode": "INR"
  },
  {
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "country": "AUSTRIA",
    "amount": 5000,
    "currencycode": "EUR"
  },
  {
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "country": "AMERICAN SAMOA",
    "amount": 5000,
    "currencycode": "USD"
  },
  {
    "id": 4,
    "name": "alias odio sit",
    "email": "Lew@alysha.tv",
    "country": "BRAZIL",
    "amount": 3500,
    "currencycode": "BRL"

  },
  {
    "id": 5,
    "name": "vero eaque aliquid doloribus et culpa",
    "email": "Hayden@althea.biz",
    "country": "INDONESIA",
    "amount": 1000,
    "currencycode": "IDR"
  },
  {
    "id": 6,
    "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
    "email": "Presley.Mueller@myrl.com",
    "country": "Barbados",
    "amount": 1000,
    "currencycode": "BBD"
  },
  {
    "id": 7,
    "name": "repellat consequatur praesentium vel minus molestias voluptatum",
    "email": "Dallas@ole.me",
    "country": "Banagladesh",
    "amount": 1000,
    "currencycode": "BDT"
  },
  {
    "id": 8,
    "name": "et omnis dolorem",
    "email": "Mallory_Kunze@marie.org",
    "country": "India",
    "amount": 1256,
    "currencycode": "INR"
  },
  {
    "id": 9,
    "name": "provident id voluptas",
    "email": "Meghan_Littel@rene.us",
    "country": "Chinese",
    "amount": 99,
    "currencycode": "CNY"
  },
  {
    "id": 10,
    "name": "eaque et deleniti atque tenetur ut quo ut",
    "email": "Carmen_Keeling@caroline.name",
    "country": "Cost Rican",
    "amount": 1000,
    "currencycode": "CRC"
  },
  {
    "id": 11,
    "name": "fugit labore quia mollitia quas deserunt nostrum sunt",
    "email": "Veronica_Goodwin@timmothy.net",
    "country": "Egypt",
    "amount": 1000,
    "currencycode": "EGP"
  },
  {
    "id": 12,
    "name": "modi ut eos dolores illum nam dolor",
    "email": "Oswald.Vandervort@leanne.org",
    "country": "Island",
    "amount": 1000,
    "currencycode": "FKP"
  },
  {
    "id": 13,
    "name": "aut inventore non pariatur sit vitae voluptatem sapiente",
    "email": "Kariane@jadyn.tv",
    "country": "Georgian",
    "amount": 1000,
    "currencycode": "GEL"
  },
  {
    "id": 14,
    "name": "et officiis id praesentium hic aut ipsa dolorem repudiandae",
    "email": "Nathan@solon.io",
    "country": "Isral",
    "amount": 1000,
    "currencycode": "ILS"
  },
  {
    "id": 15,
    "name": "debitis magnam hic odit aut ullam nostrum tenetur",
    "email": "Maynard.Hodkiewicz@roberta.com",
    "country": "Japanese",
    "currencycode": "JPY"
  },
  {
    "id": 16,
    "name": "perferendis temporibus delectus optio ea eum ratione dolorum",
    "email": "Christine@ayana.info",
    "country": "North Corean",
    "amount": 1000,
    "currencycode": "KPW"
  },
  {
    "id": 17,
    "name": "eos est animi quis",
    "email": "Preston_Hudson@blaise.tv",
    "country": "India",
    "amount": 1000,
    "currencycode": "INR"
  },
  {
    "id": 18,
    "name": "aut et tenetur ducimus illum aut nulla ab",
    "email": "Vincenza_Klocko@albertha.name",
    "country": "India",
    "amount": 1000,
    "currencycode": "INR"
  },
  {
    "id": 19,
    "name": "sed impedit rerum quia et et inventore unde officiis",
    "email": "Madelynn.Gorczany@darion.biz",
    "country": "India",
    "amount": 1000,
    "currencycode": "INR"

  },
  {
    "id": 20,
    "name": "molestias expedita iste aliquid voluptates",
    "email": "Mariana_Orn@preston.org",
    "country": "India",
    "amount": 1000,
    "currencycode": "INR"
  },
  {
    "id": 21,
    "name": "aliquid rerum mollitia qui a consectetur eum sed",
    "email": "Noemie@marques.me",
    "country": "India",
    "amount": 1000,
    "currencycode": "INR"
  },
  {
    "id": 22,
    "name": "porro repellendus aut tempore quis hic",
    "email": "Khalil@emile.co.uk",
    "country": "India",
    "amount": 1000,
    "currencycode": "INR"
  },
  {
    "id": 23,
    "name": "quis tempora quidem nihil iste",
    "email": "Sophia@arianna.co.uk",
    "country": "India",
    "amount": 1000,
    "currencycode": "INR"
  },
  {
    "id": 24,
    "name": "in tempore eos beatae est",
    "email": "Jeffery@juwan.us",
    "country": "India",
    "amount": 1000,
    "currencycode": "INR"
  },
  {
    "id": 25,
    "name": "autem ab ea sit alias hic provident sit",
    "email": "Isaias_Kuhic@jarrett.net",
    "country": "India",
    "amount": 1000,
    "currencycode": "INR"
  }];
  //  get index and alert email
  indexClick(i: number) {
    alert(this.listData[i].email + this.index);
  }
  //  trackby index
  trackByid(index: number, listData: any) {
    return listData.id;
  }

}






