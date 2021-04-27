import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Heroe } from '../../interfaces/heroes';

const her: Heroe[] = [
  {
    hero_id: '0',
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
    hero_id: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    poder: new FormControl('', [Validators.required, Validators.minLength(4)]),
    foto: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  add_heroe() {
    let form = this.heroes_form;
    if (this.heroes_form.valid) {
      this.heroes_list.push(form.value);
      form.reset();
      alert('Agregado Correctamente');
    }
  }

  delete_heroe(id: any) {
    let index = this.heroes_list.map((item) => item.hero_id).indexOf(id);
    this.heroes_list.splice(index, 1);
    alert('Eliminado correctamente');
  }

  get hero_id() {
    return this.heroes_form.get('hero_id');
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
