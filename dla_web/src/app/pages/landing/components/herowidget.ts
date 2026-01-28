import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

type HeroSlide = {
    src: string;
    title: string;
    subtitle: string;
};

@Component({
    selector: 'hero-widget',
    standalone: true,
    imports: [CommonModule, CarouselModule, ButtonModule, RippleModule],
    template: `
        <section class="dla-hero-modern" id="hero">
            <div class="mx-auto max-w-7xl px-6">
                <div class="grid grid-cols-12 gap-10 items-center">
                    <div class="col-span-12 lg:col-span-6">
                        <div class="dla-badge-pill" data-reveal>
                            <span class="badge-dot"></span>
                            <span>Envíos a Cuba • Viajes • Paquetería</span>
                        </div>

                        <h1 class="dla-hero-title" data-reveal>
                            Envía con
                            <span class="dla-gradient-text">confianza</span>
                            y recibe con
                            <span class="dla-gradient-text">rapidez</span>
                        </h1>

                        <p class="dla-hero-subtitle" data-reveal>
                            DLA Viajes y Envíos te conecta con Cuba con un proceso claro: recogida, embalaje, despacho y entrega.
                            Sin cuentos. Con seguimiento.
                        </p>

                        <div class="dla-hero-actions" data-reveal>
                            <a class="btn-dla-primary" href="#tracking">
                                <span>Rastrear paquete</span>
                                <span aria-hidden="true">→</span>
                            </a>
                            <a class="btn-dla-secondary" href="#services">
                                <span>Ver servicios</span>
                                <span aria-hidden="true">↘</span>
                            </a>
                        </div>

                        <div class="dla-trust-badges" data-reveal>
                            <div class="trust-item">
                                <div class="trust-icon">⚡</div>
                                <div class="trust-text">
                                    <strong>Express</strong>
                                    <span>Procesamiento ágil</span>
                                </div>
                            </div>
                            <div class="trust-item">
                                <div class="trust-icon">🛡️</div>
                                <div class="trust-text">
                                    <strong>Seguro</strong>
                                    <span>Embalaje y control</span>
                                </div>
                            </div>
                            <div class="trust-item">
                                <div class="trust-icon">💬</div>
                                <div class="trust-text">
                                    <strong>Soporte</strong>
                                    <span>WhatsApp y llamada</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-6" data-reveal>
                        <div class="dla-hero-card">
                            <div class="dla-card-glow"></div>
                            <div class="relative">
                                <p-carousel
                                    [value]="slides"
                                    [numVisible]="1"
                                    [numScroll]="1"
                                    [circular]="true"
                                    [autoplayInterval]="6500"
                                    [showNavigators]="true"
                                    [showIndicators]="true"
                                >
                                    <ng-template pTemplate="item" let-s>
                                        <div class="rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.06)]">
                                            <img [src]="s.src" [alt]="s.title" class="w-full h-[340px] object-cover" loading="lazy" />
                                            <div class="p-4">
                                                <div class="font-semibold text-lg">{{ s.title }}</div>
                                                <div class="text-sm text-surface-600">{{ s.subtitle }}</div>
                                            </div>
                                        </div>
                                    </ng-template>
                                </p-carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class HeroWidget {
    slides: HeroSlide[] = [
        {
            src: 'assets/dla/img/home_slide_1.jpg',
            title: 'Puerta a puerta',
            subtitle: 'Coordinación y entrega con enfoque familiar.'
        },
        {
            src: 'assets/dla/img/home_slide_2.jpg',
            title: 'Embalaje seguro',
            subtitle: 'Tu paquete protegido: cuidado en cada detalle.'
        },
        {
            src: 'assets/dla/img/home_slide_3.jpg',
            title: 'Rápido y transparente',
            subtitle: 'Seguimiento y soporte cuando lo necesitas.'
        }
    ];
}
