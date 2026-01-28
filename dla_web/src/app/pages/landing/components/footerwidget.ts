import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'footer-widget',
    standalone: true,
    imports: [CommonModule],
    template: `
        <footer id="contact" class="py-16" style="background: var(--dla-black); color: var(--dla-white)">
            <div class="mx-auto max-w-7xl px-6">
                <div class="grid grid-cols-12 gap-10">
                    <div class="col-span-12 lg:col-span-5">
                        <div class="flex items-center gap-3">
                            <img src="assets/dla/img/legacy/logo.svg" alt="DLA" class="h-10" />
                            <div>
                                <div class="text-xl font-bold">DLA Viajes y Envíos</div>
                                <div class="text-sm opacity-80">Florida → Cuba</div>
                            </div>
                        </div>

                        <p class="mt-4 text-sm opacity-80 max-w-md">
                            Operamos con mentalidad de empresa: procesos claros, comunicación directa y respeto por tu tiempo.
                        </p>

                        <div class="mt-6 flex gap-3 flex-wrap">
                            <a class="btn-dla-primary" href="#tracking">
                                <span>Rastrear</span>
                                <span aria-hidden="true">→</span>
                            </a>
                            <a class="btn-dla-secondary" href="#services" style="border-color: rgba(255,255,255,0.25); color: #fff">
                                <span>Servicios</span>
                                <span aria-hidden="true">↘</span>
                            </a>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-6 lg:col-span-4">
                        <div class="text-lg font-semibold">Contacto</div>
                        <ul class="mt-3 space-y-2 text-sm opacity-90">
                            <li><span class="opacity-70">WhatsApp:</span> +1 (XXX) XXX-XXXX</li>
                            <li><span class="opacity-70">Teléfono:</span> +1 (XXX) XXX-XXXX</li>
                            <li><span class="opacity-70">Email:</span> info&#64;dlaenvios.com</li>
                            <li><span class="opacity-70">Horario:</span> Lun–Vie 9am–6pm</li>
                        </ul>
                        <p class="mt-4 text-xs opacity-70">
                            * Reemplaza los datos de contacto por los reales.
                        </p>
                    </div>

                    <div class="col-span-12 md:col-span-6 lg:col-span-3">
                        <div class="text-lg font-semibold">Enlaces</div>
                        <ul class="mt-3 space-y-2 text-sm opacity-90">
                            <li><a class="underline decoration-white/30 hover:decoration-white" href="#hero">Inicio</a></li>
                            <li><a class="underline decoration-white/30 hover:decoration-white" href="#services">Servicios</a></li>
                            <li><a class="underline decoration-white/30 hover:decoration-white" href="#plans">Planes</a></li>
                            <li><a class="underline decoration-white/30 hover:decoration-white" href="#tracking">Rastreo</a></li>
                        </ul>
                    </div>
                </div>

                <div class="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between text-xs opacity-70">
                    <span>© {{ year }} DLA Viajes y Envíos. Todos los derechos reservados.</span>
                    <span>Hecho con orden y disciplina.</span>
                </div>
            </div>
        </footer>

        <!-- WhatsApp floating button (optional) -->
        <a
            class="fixed bottom-5 right-5 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
            style="background: #25D366"
            href="#contact"
            aria-label="WhatsApp"
        >
            <img src="assets/dla/img/legacy/wsp.png" alt="WhatsApp" class="w-8 h-8" />
        </a>
    `
})
export class FooterWidget {
    year = new Date().getFullYear();
}
