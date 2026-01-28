import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Plan = {
    name: string;
    priceHint: string;
    tagline: string;
    bullets: string[];
    highlight?: boolean;
};

@Component({
    selector: 'pricing-widget',
    standalone: true,
    imports: [CommonModule],
    template: `
        <section id="plans" class="py-20 bg-surface-0">
            <div class="mx-auto max-w-7xl px-6">
                <header class="section-header text-center" data-reveal>
                    <h2 class="section-title">Opciones de servicio</h2>
                    <p class="section-subtitle">Los precios finales dependen de peso/volumen y destino. Aquí dejamos la estructura lista para tus planes.</p>
                </header>

                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12 md:col-span-6 lg:col-span-4" *ngFor="let p of plans" data-reveal>
                        <div
                            class="rounded-2xl border p-8 h-full bg-white"
                            [ngClass]="p.highlight ? 'border-[var(--dla-gold)] shadow-lg' : 'border-[rgba(0,0,0,0.08)]'"
                        >
                            <div class="flex items-start justify-between gap-4">
                                <div>
                                    <div class="text-xl font-extrabold">{{ p.name }}</div>
                                    <div class="text-sm text-surface-600 mt-1">{{ p.tagline }}</div>
                                </div>
                                <div class="text-right">
                                    <div class="text-lg font-bold" style="color: var(--dla-gold-dark)">{{ p.priceHint }}</div>
                                    <div class="text-xs text-surface-500">estimado</div>
                                </div>
                            </div>

                            <ul class="mt-6 space-y-2 text-sm">
                                <li *ngFor="let b of p.bullets" class="flex gap-2">
                                    <span aria-hidden="true">✔</span>
                                    <span>{{ b }}</span>
                                </li>
                            </ul>

                            <div class="mt-8">
                                <a class="btn-service w-full" href="#contact">Cotizar ahora</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class PricingWidget {
    plans: Plan[] = [
        {
            name: 'Express',
            priceHint: 'Rápido',
            tagline: 'Ideal si la prioridad es el tiempo.',
            bullets: ['Procesamiento prioritario', 'Soporte directo', 'Rastreo'],
            highlight: true
        },
        {
            name: 'Estándar',
            priceHint: 'Balance',
            tagline: 'La opción más flexible para envíos regulares.',
            bullets: ['Recepción + embalaje', 'Ruta estándar', 'Notificaciones']
        },
        {
            name: 'Familiar',
            priceHint: 'Ahorro',
            tagline: 'Pensado para envíos de hogar con mejor costo.',
            bullets: ['Optimización por volumen', 'Control de listado', 'Atención personalizada']
        }
    ];
}
