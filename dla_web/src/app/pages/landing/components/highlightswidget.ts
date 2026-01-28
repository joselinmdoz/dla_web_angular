import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'highlights-widget',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, InputTextModule],
    template: `
        <section id="tracking" class="py-20 bg-white">
            <div class="mx-auto max-w-7xl px-6">
                <div class="grid grid-cols-12 gap-10 items-center">
                    <div class="col-span-12 lg:col-span-6" data-reveal>
                        <h2 class="section-title">Rastreo rápido</h2>
                        <p class="section-subtitle !mx-0">
                            Pon el número de guía y valida el estado. (Aquí dejamos el front listo; luego lo conectamos a tu API/Nest u Odoo.)
                        </p>

                        <div class="mt-6 flex gap-3 flex-wrap">
                            <input
                                pInputText
                                class="w-full md:w-[360px]"
                                placeholder="Ej: DLA-000123"
                                [(ngModel)]="trackingNumber"
                                aria-label="Número de rastreo"
                            />
                            <button pButton type="button" label="Buscar" (click)="onTrack()"></button>
                        </div>

                        <div *ngIf="status" class="mt-4 text-sm">
                            <span class="font-semibold">Estado:</span> {{ status }}
                        </div>
                    </div>

                    <div class="col-span-12 lg:col-span-6" data-reveal>
                        <div class="rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 bg-surface-0">
                            <div class="text-xl font-semibold">¿Cómo funciona?</div>
                            <ol class="mt-4 space-y-3">
                                <li class="flex gap-3">
                                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-xl" style="background: rgba(239,195,52,.15)">1</span>
                                    <div>
                                        <div class="font-semibold">Recepción</div>
                                        <div class="text-sm text-surface-600">Recibimos tu paquete o coordinamos la entrega.</div>
                                    </div>
                                </li>
                                <li class="flex gap-3">
                                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-xl" style="background: rgba(239,195,52,.15)">2</span>
                                    <div>
                                        <div class="font-semibold">Embalaje y control</div>
                                        <div class="text-sm text-surface-600">Se revisa, se protege y se documenta.</div>
                                    </div>
                                </li>
                                <li class="flex gap-3">
                                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-xl" style="background: rgba(239,195,52,.15)">3</span>
                                    <div>
                                        <div class="font-semibold">Despacho</div>
                                        <div class="text-sm text-surface-600">Sale por la ruta correspondiente según el servicio.</div>
                                    </div>
                                </li>
                                <li class="flex gap-3">
                                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-xl" style="background: rgba(239,195,52,.15)">4</span>
                                    <div>
                                        <div class="font-semibold">Entrega y soporte</div>
                                        <div class="text-sm text-surface-600">Atención si surge cualquier detalle.</div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="how" class="dla-cta-section">
            <div class="mx-auto max-w-7xl px-6">
                <div class="dla-cta-card" data-reveal>
                    <div class="cta-content">
                        <h2 class="text-white">¿Listo para enviar?</h2>
                        <p class="text-white/80 mt-2">
                            Si quieres velocidad, orden y comunicación, este es el carril correcto.
                        </p>
                    </div>
                    <div class="flex gap-3 flex-wrap">
                        <a class="btn-dla-primary" href="#contact">
                            <span>Hablar por WhatsApp</span>
                            <span aria-hidden="true">→</span>
                        </a>
                        <a class="btn-dla-secondary" href="#services">
                            <span>Ver servicios</span>
                            <span aria-hidden="true">↘</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class HighlightsWidget {
    trackingNumber = '';
    status = '';

    onTrack() {
        const n = (this.trackingNumber || '').trim();
        if (!n) {
            this.status = 'Introduce un número válido.';
            return;
        }
        // Placeholder: aquí luego conectamos con tu API (NestJS) o el endpoint de Odoo.
        this.status = `Recibido: ${n} (demo)`;
    }
}
