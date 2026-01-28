\
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ScrollTopModule } from 'primeng/scrolltop';
import { RippleModule } from 'primeng/ripple';

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryLink: any[];
  secondaryLabel?: string;
  secondaryScrollTo?: string;
};

type InfoCard = {
  icon: string;
  title: string;
  text: string;
  badge?: string;
};

type FAQ = { q: string; a: string };

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    MenubarModule,
    CarouselModule,
    CardModule,
    ButtonModule,
    DividerModule,
    TagModule,
    AccordionModule,
    InputTextModule,
    ScrollTopModule,
    RippleModule
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  year = new Date().getFullYear();

  menu: MenuItem[] = [
    { label: 'Servicios', command: () => this.scrollTo('services') },
    { label: 'Cómo funciona', command: () => this.scrollTo('how') },
    { label: 'Preguntas', command: () => this.scrollTo('faq') },
    { label: 'Contacto', command: () => this.scrollTo('contact') }
  ];

  slides: Slide[] = [
    {
      image: 'assets/dla/landing/slide-1.svg',
      title: 'DLA Viajes y Envíos',
      subtitle: 'Envíos confiables y asesoría clara. Sin cuentos, sin sorpresas.',
      primaryLabel: 'Cotizar envío',
      primaryLink: ['/landing'],
      secondaryLabel: 'Ver servicios',
      secondaryScrollTo: 'services'
    },
    {
      image: 'assets/dla/landing/slide-2.svg',
      title: 'Paquetería con control',
      subtitle: 'Rápido no es correr: es tener método. Y nosotros lo tenemos.',
      primaryLabel: 'Cómo funciona',
      primaryLink: ['/landing'],
      secondaryLabel: 'Preguntas',
      secondaryScrollTo: 'faq'
    },
    {
      image: 'assets/dla/landing/slide-3.svg',
      title: 'Viajes con intención',
      subtitle: 'Opciones prácticas, buenas rutas y apoyo en la planificación.',
      primaryLabel: 'Contactar',
      primaryLink: ['/landing'],
      secondaryLabel: 'Ir a contacto',
      secondaryScrollTo: 'contact'
    }
  ];

  carouselResponsive = [
    { breakpoint: '1200px', numVisible: 1, numScroll: 1 },
    { breakpoint: '992px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 }
  ];

  highlights: InfoCard[] = [
    { icon: 'pi pi-shield', title: 'Confianza y trazabilidad', text: 'Proceso ordenado, comunicación clara y atención responsable.', badge: 'Top' },
    { icon: 'pi pi-send', title: 'Velocidad con orden', text: 'No improvisamos: trabajamos con disciplina operativa.' },
    { icon: 'pi pi-box', title: 'Empaque y logística', text: 'Te guiamos para empacar bien y evitar costos extra.' },
    { icon: 'pi pi-map-marker', title: 'Atención local', text: 'Soporte real: personas, no robots con frases bonitas.' }
  ];

  services: InfoCard[] = [
    { icon: 'pi pi-truck', title: 'Envíos y paquetería', text: 'Soluciones prácticas para tus envíos, con enfoque en seguridad.' },
    { icon: 'pi pi-calendar', title: 'Planificación de viajes', text: 'Te ayudamos a elegir opciones inteligentes según tu necesidad.' },
    { icon: 'pi pi-whatsapp', title: 'Soporte directo', text: 'Respuestas claras para avanzar sin perder tiempo.' }
  ];

  steps: InfoCard[] = [
    { icon: 'pi pi-comment', title: '1) Cotiza', text: 'Dinos qué envías o qué viaje necesitas.' },
    { icon: 'pi pi-box', title: '2) Preparas', text: 'Te orientamos con empaque y requisitos.' },
    { icon: 'pi pi-check', title: '3) Procesamos', text: 'Verificamos, organizamos y despachamos.' },
    { icon: 'pi pi-home', title: '4) Entrega', text: 'Seguimiento y confirmación.' }
  ];

  faqs: FAQ[] = [
    { q: '¿Qué datos necesitan para cotizar?', a: 'Tipo de envío/servicio, dimensiones o peso aproximado, origen/destino y urgencia.' },
    { q: '¿Puedo enviar artículos frágiles?', a: 'Sí, pero el empaque es clave. Te orientamos para minimizar riesgos.' },
    { q: '¿Atienden también viajes?', a: 'Sí. Podemos ayudarte con planificación y opciones, según tu caso.' }
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onSlideSecondary(slide: Slide) {
    if (slide.secondaryScrollTo) this.scrollTo(slide.secondaryScrollTo);
  }
}
