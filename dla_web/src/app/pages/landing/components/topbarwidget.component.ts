import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'topbar-widget',
    standalone: true,
    imports: [CommonModule, StyleClassModule, ButtonModule, RippleModule],
    template: `
        <header class="sticky top-0 z-50" style="background: rgba(255,255,255,0.92); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(0,0,0,0.06)">
            <div class="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                <a class="flex items-center gap-3" href="#hero" aria-label="DLA">
                    <img src="assets/dla/img/legacy/logo.svg" alt="DLA" class="h-10" />
                    <span class="font-extrabold tracking-tight" style="color: var(--dla-black)">DLA</span>
                </a>

                <a
                    pButton
                    [text]="true"
                    severity="secondary"
                    [rounded]="true"
                    pRipple
                    class="lg:hidden!"
                    pStyleClass="@next"
                    enterFromClass="hidden"
                    leaveToClass="hidden"
                    [hideOnOutsideClick]="true"
                    aria-label="Menú"
                >
                    <i class="pi pi-bars text-2xl!"></i>
                </a>

                <nav class="items-center hidden lg:flex gap-8">
                    <a class="text-sm font-semibold hover:opacity-80" href="#services">Servicios</a>
                    <a class="text-sm font-semibold hover:opacity-80" href="#tracking">Rastreo</a>
                    <a class="text-sm font-semibold hover:opacity-80" href="#plans">Planes</a>
                    <a class="text-sm font-semibold hover:opacity-80" href="#contact">Contacto</a>

                    <a class="btn-dla-primary" href="#contact">
                        <span>Enviar ahora</span>
                        <span aria-hidden="true">→</span>
                    </a>
                </nav>
            </div>

            <!-- Mobile drawer (simple) -->
            <div class="hidden lg:hidden border-t" style="border-color: rgba(0,0,0,0.06)">
                <div class="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4">
                    <a class="text-sm font-semibold" href="#services">Servicios</a>
                    <a class="text-sm font-semibold" href="#tracking">Rastreo</a>
                    <a class="text-sm font-semibold" href="#plans">Planes</a>
                    <a class="text-sm font-semibold" href="#contact">Contacto</a>

                    <a class="btn-dla-primary w-fit" href="#contact">
                        <span>Enviar ahora</span>
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </header>
    `
})
export class TopbarWidget {}
