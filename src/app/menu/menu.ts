import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  title: string;
  image: string;
  isNew?: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',  
  styleUrls: ['./menu.css']     
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      title: 'NOVIDADES',
      image: 'assets/images/novidades.jpg',
      isNew: true
    },
    {
      title: 'BURGER',
      image: 'assets/images/burger.jpg'
    },
    {
      title: 'ACOMPANHAMENTOS',
      image: 'assets/images/acompanhamentos.jpg'
    },
    {
      title: 'FRITAS',
      image: 'assets/images/fritas.jpg'
    },
    {
      title: 'BEBIDAS',
      image: 'assets/images/bebidas.jpg'
    },
    {
      title: 'COMBO EM PROMOÇÃO',
      image: 'assets/images/combo-promocao.jpg'
    },
    {
      title: 'SALADAS',
      image: 'assets/images/saladas.jpg'
    },
    {
      title: 'SOBREMESAS',
      image: 'assets/images/sobremesas.jpg'
    }
  ];

  onMenuItemClick(item: MenuItem) {
    console.log('Menu item clicked:', item.title);
  }
}