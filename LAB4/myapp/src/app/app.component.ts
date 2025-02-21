import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { Product } from './products/product.model';

interface Category {
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  
  categories: Category[] = [
    { 
      name: 'Electronics', 
      products: [
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-large',
          name: 'iPhone 14 Pro',
          description: 'Apple iPhone 14 Pro, 128GB, Space Black',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
          likes: 0
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
          name: 'Samsung Galaxy S23',
          description: 'Samsung Galaxy S23 Ultra, 256GB, Phantom Black',
          rating: 4.7,
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000',
          likes: 0
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
          name: 'Xiaomi Redmi 13C',
          description: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
          rating: 4.5,
          link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
          likes: 0
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/hfa/84599409541150.jpg?format=gallery-medium',
          name: 'USB TypeC (M), Lightning',
          description: 'Кабель USB TypeC (M), Lightning белый',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/kabel-usb-typec-m-lightning-belyi-114949538/?c=750000000',
          likes: 0
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h3b/67897720340510.jpg?format=gallery-medium',
          name: 'Стекло для iPhone 11',
          description: 'Стекло для Apple iPhone 11 черный',
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/steklo-dlja-apple-iphone-11-chernyi-108450817/?c=750000000',
          likes: 0
        }
      ]
    },
    { 
      name: 'Books', 
      products: [
        {
         image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-medium',
          name: 'Клир Д.: Атомные привычки', 
          description: 'Книга Атомные привычки', 
          rating: 5, 
          link: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pdf/5459519.jpg?format=gallery-medium',
          name: 'Айбек Оразымбет: ҰБТ Қазақстан тарихы 2025 жылғы', 
          description: 'Литература для подготовки к ЕНТ и ЕГЭ ',
          rating: 4.9, 
          link: 'https://kaspi.kz/shop/p/literatura-dlja-podgotovki-k-ent-i-ege-aibek-orazymbet-bt-aza-stan-tarihy-2025-zhyl-y-129148138/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h8a/87162104250398.png?format=gallery-medium', 
          name: 'Керімбай С., Нәби Ә.: Қаныш және Ғылыми майдан', 
          description: 'Книга Керімбай С., Нәби Ә.: Қаныш және Ғылыми майдан', 
          rating: 5, 
          link: 'https://kaspi.kz/shop/p/ker-mbai-s-n-bi-anysh-zh-ne-ylymi-maidan-123730850/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/hab/79753217605662.jpg?format=gallery-medium', 
          name: 'Марзия Бекайдар: Выбери счастье в обоих мирах', 
          description: 'Книга Марзия Бекайдар: Выбери счастье в обоих мирах', 
          rating: 5, 
          link: 'https://kaspi.kz/shop/p/marzija-bekaidar-vyberi-schast-e-v-oboih-mirah-109733420/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hc3/h6e/80549706432542.jpg?format=gallery-medium', 
          name: 'Клейсон Дж.: Самый богатый человек в Вавилоне', 
          description: 'Книга Клейсон Дж.: Самый богатый человек в Вавилоне', 
          rating: 4.5, 
          link: 'https://kaspi.kz/shop/p/kleison-dzh-samyi-bogatyi-chelovek-v-vavilone-110124436/?c=750000000', 
          likes: 0 
        }
      ]
    },
    { 
      name: 'Clothing', 
      products: [
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p76/pab/22786830.jpg?format=gallery-medium', 
          name: 'Толстовка Urban Outfit', 
          description: 'Толстовка Urban Outfit черный', 
          rating: 4.5, 
          link: 'https://kaspi.kz/shop/p/tolstovka-urban-outfit-as534zh-chernyi-l-108392097/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h49/hab/86391516790814.jpg?format=gallery-medium', 
          name: 'Футболка Tespe', 
          description: 'Футболка Tespe черный', 
          rating: 4.6, 
          link: 'https://kaspi.kz/shop/p/futbolka-tespe-atk0173-chernyi-54-103962778/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h13/84843074256926.jpg?format=gallery-medium', 
          name: 'Комплект 5.11', 
          description: 'Комплект 5.11 черный', 
          rating: 5, 
          link: 'https://kaspi.kz/shop/p/komplekt-5-11-8073-chernyi-46-115785506/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p17/17584131.jpg?format=gallery-medium', 
          name: 'Спортивные брюки Urban Outfit', 
          description: 'Спортивные брюки Urban Outfit черный', 
          rating: 3.8, 
          link: 'https://kaspi.kz/shop/p/sportivnye-brjuki-urban-outfit-as0539ub-chernyi-l-108460592/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p73/p5e/6820806.jpg?format=gallery-medium', 
          name: 'Термоноски Tespe Мәсі', 
          description: 'Термоноски Tespe Мәсі 1 пара черный 39-43', 
          rating: 3.9, 
          link: 'https://kaspi.kz/shop/p/termonoski-tespe-m-s-1-para-chernyi-39-43-128751848/?c=750000000', 
          likes: 0 
        }
      ]
    },
    { 
      name: 'Home & Kitchen', 
      products: [
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h98/hd5/82635919360030.png?format=gallery-medium', 
          name: 'Qualita бумага для выпечки', 
          description: 'Qualita бумага для выпечки 4600999008153 для выпечки, для хранения продуктов', 
          rating: 4.0, 
          link: 'https://kaspi.kz/shop/p/qualita-bumaga-dlja-vypechki-4600999008153-dlja-vypechki-dlja-hranenija-produktov-101178551/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/h93/63958010429470.jpg?format=gallery-medium', 
          name: 'Сковорода блинная Vicalina', 
          description: 'Сковорода блинная Vicalina VL0324 24 см, гранитная крошка', 
          rating: 4.1, 
          link: 'https://kaspi.kz/shop/p/skovoroda-blinnaja-vicalina-vl0324-24-sm-granitnaja-kroshka-100634453/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h4b/87010863022110.png?format=gallery-medium', 
          name: 'Набор мисок', 
          description: 'Набор мисок 504475 26 см нержавеющая сталь, 4.2 л 4 шт', 
          rating: 4.2, 
          link: 'https://kaspi.kz/shop/p/nabor-misok-504475-26-sm-nerzhavejuschaja-stal-4-2-l-4-sht-112939584/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h92/64165549178910.jpg?format=gallery-medium', 
          name: 'Чайник TEA POT 61TERMO', 
          description: 'Чайник TEA POT 61TERMO 1 л, стекло', 
          rating: 4.3, 
          link: 'https://kaspi.kz/shop/p/chainik-tea-pot-61termo-1-l-steklo-103262843/?c=750000000', 
          likes: 0 
        },
        { 
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h27/85793759690782.jpg?format=gallery-medium', 
          name: 'Monochrome homeware набор столовых приборов', 
          description: 'Monochrome homeware набор столовых приборов 91807 24 шт, сталь', 
          rating: 4.4, 
          link: 'https://kaspi.kz/shop/p/monochrome-homeware-nabor-stolovyh-priborov-91807-24-sht-stal--100976147/?c=750000000', 
          likes: 0 
        }
      ]
    }
  ];

  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}
