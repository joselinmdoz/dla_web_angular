import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarWidget } from './components/topbarwidget.component';
import { HeroWidget } from './components/herowidget';
import { FeaturesWidget } from './components/featureswidget';
import { HighlightsWidget } from './components/highlightswidget';
import { PricingWidget } from './components/pricingwidget';
import { FooterWidget } from './components/footerwidget';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [RouterModule, TopbarWidget, HeroWidget, FeaturesWidget, HighlightsWidget, PricingWidget, FooterWidget],
    template: `
        <div class="bg-surface-0">
            <div class="landing-wrapper overflow-hidden">
                <topbar-widget />
                <hero-widget />
                <features-widget />
                <highlights-widget />
                <pricing-widget />
                <footer-widget />
            </div>
        </div>
    `
})
export class Landing implements AfterViewInit {
    ngAfterViewInit(): void {
        this.initRevealOnScroll();
        this.initSmoothAnchors();
    }

    private initRevealOnScroll() {
        const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
        if (!els.length) return;

        if (!('IntersectionObserver' in window)) {
            els.forEach((el) => el.classList.add('in'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    (entry.target as HTMLElement).classList.add('in');
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
        );

        els.forEach((el) => observer.observe(el));
    }

    private initSmoothAnchors() {
        // Simple smooth scrolling for internal anchors.
        document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
            a.addEventListener('click', (e) => {
                const href = a.getAttribute('href') || '';
                if (!href || href === '#' || href === '#!') return;
                const target = document.querySelector<HTMLElement>(href);
                if (!target) return;
                e.preventDefault();
                const headerH = document.querySelector('header')?.getBoundingClientRect().height || 0;
                const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
                window.scrollTo({ top, behavior: 'smooth' });
            });
        });
    }
}
