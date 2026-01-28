import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ServiceCard = {
    title: string;
    description: string;
    image: string;
    featured?: boolean;
    badge?: string;
    bullets: string[];
    cta: string;
    href: string;
};

@Component({
    selector: 'features-widget',
    standalone: true,
    imports: [CommonModule],
    template: `
        <section id="services" class="dla-services-section">
            <div class="mx-auto max-w-7xl px-6">
                <header class="section-header text-center" data-reveal>
                    <h2 class="section-title">Servicios principales</h2>
                    <p class="section-subtitle">Operación simple, trato serio y una meta clara: que tu familia reciba sin estrés.</p>
                </header>

                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12 md:col-span-6 lg:col-span-4" *ngFor="let s of services" data-reveal>
                        <article class="dla-service-card" [class.featured]="s.featured">
                            <div class="featured-badge" *ngIf="s.badge">{{ s.badge }}</div>
                            <div class="service-icon">
                                <img [src]="s.image" [alt]="s.title" loading="lazy" />
                            </div>

                            <h3>{{ s.title }}</h3>
                            <p>{{ s.description }}</p>

                            <ul class="service-features">
                                <li *ngFor="let b of s.bullets">
                                    <span aria-hidden="true">✔</span>
                                    <span>{{ b }}</span>
                                </li>
                            </ul>

                            <a class="btn-service" [href]="s.href">
                                <span>{{ s.cta }}</span>
                                <span aria-hidden="true">→</span>
                            </a>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class FeaturesWidget {
    services: ServiceCard[] = [
        {
            title: 'Puerta a puerta',
            description: 'Coordinamos la entrega final en Cuba con enfoque en claridad y responsabilidad.',
            image: 'assets/dla/img/legacy/door_to_door.webp',
            featured: true,
            badge: 'Más pedido',
            bullets: ['Coordinación de entrega', 'Soporte por WhatsApp', 'Proceso claro'],
            cta: 'Solicitar',
            href: '#contact'
        },
        {
            title: 'Casillero / agencia',
            description: 'Trae tu paquete al punto de recepción y nosotros nos encargamos del resto.',
            image: 'assets/dla/img/legacy/casillero.webp',
            bullets: ['Recepción organizada', 'Embalaje seguro', 'Despacho rápido'],
            cta: 'Cómo funciona',
            href: '#how'
        },
        {
            title: 'Oficina y atención',
            description: 'Atención con mentalidad de empresa: tiempos, costos y comunicación sin improvisar.',
            image: 'assets/dla/img/legacy/offices.webp',
            bullets: ['Atención presencial', 'Gestión de viajes', 'Asesoría de envíos'],
            cta: 'Contactar',
            href: '#contact'
        }
    ];
}
