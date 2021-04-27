import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Heroe } from '../../interfaces/heroes';

const her: Heroe[] = [
  {
    id: '0',
    nombre: 'Super Man',
    poder: 'Volar',
    foto:
      'https://i.pinimg.com/originals/ce/71/d8/ce71d8bd7654e167591080f1ca63fc83.png',
  },
];

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor() {
    this.heroes_form = this.heroes_form;
    this.heroes_find_form = this.heroes_find_form;
    this.heroes_list = her;
    this.result = this.result;
  }

  heroes_list = her;

  heroes_find_form = new FormGroup({
    poder_val: new FormControl('', [Validators.required]),
  });

  heroes_form = new FormGroup({
    id: new FormControl(this.heroes_list.length + 1, [Validators.required]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    poder: new FormControl('', [Validators.required, Validators.minLength(4)]),
    foto: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  add_heroe() {
    this.heroes_list.push(this.heroes_form.value);
  }

  delete_heroe(id: any) {
    this.heroes_list.splice(id, 1);
    alert('Eliminado correctamente');
  }

  get nombre() {
    return this.heroes_form.get('nombre');
  }
  get poder() {
    return this.heroes_form.get('poder');
  }
  get foto() {
    return this.heroes_form.get('foto');
  }

  result = {};

  find_heroe() {
    const poder = this.heroes_find_form.value;

    this.heroes_list.filter((heroe) => {
      if (heroe.poder === poder.poder_val) {
        this.result = heroe;
        alert(JSON.stringify(this.result));
        return poder.poder_val;
      } else {
        alert('No existe Super heroe con este poder');
        return false;
      }
    });
  }

  ngOnInit(): void {
    this.heroes_list;
  }
}
