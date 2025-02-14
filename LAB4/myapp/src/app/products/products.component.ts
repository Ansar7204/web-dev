import { Component } from '@angular/core';
import { Product } from './product.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-large',
      name: 'iPhone 14 Pro',
      description: 'Apple iPhone 14 Pro, 128GB, Space Black',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
      name: 'Samsung Galaxy S23',
      description: 'Samsung Galaxy S23 Ultra, 256GB, Phantom Black',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      name: 'Xiaomi Redmi 13C',
      description: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/hfa/84599409541150.jpg?format=gallery-medium',
      name: 'USB TypeC (M), Lightning',
      description: 'Кабель USB TypeC (M), Lightning белый',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/kabel-usb-typec-m-lightning-belyi-114949538/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h3b/67897720340510.jpg?format=gallery-medium',
      name: 'Стекло для iPhone 11',
      description: 'Стекло для Apple iPhone 11 черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/steklo-dlja-apple-iphone-11-chernyi-108450817/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h02/83108938809374.jpg?format=gallery-medium',
      name: 'OPPO A78',
      description: 'Смартфон OPPO A78 8 ГБ/256 ГБ черный',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-chernyi-112808573/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/ha3/87200643776542.png?format=gallery-medium',
      name: 'Realme Note 50',
      description: 'Смартфон Realme Note 50 4 ГБ/256 ГБ черный',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/realme-note-50-4-gb-256-gb-chernyi-123889706/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbb/h72/85095784710174.jpg?format=gallery-medium',
      name: 'Чехол Для iPhone 13',
      description: 'Чехол Для Apple iPhone 13 розовый',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-rozovyi-116440357/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h55/64124143173662.jpg?format=gallery-medium',
      name: 'Зарядное устройство Samsung',
      description: 'Зарядное устройство Samsung EP-TA800NBEGRU черный',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/samsung-ep-ta800nbegru-chernyi-100972924/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',
      name: 'iPhone 16',
      description: 'Смартфон Apple iPhone 16 128Gb белый',
      rating: 4.95,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000'
    }];

    share(product: Product, platform: string) {
      const message = `Check out this product: ${product.name} - ${product.link}`;
      let shareUrl = '';
  
      if (platform === 'whatsapp') {
        shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      } else if (platform === 'telegram') {
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;
      }
  
      window.open(shareUrl, '_blank');
    }

}
