'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './ImageTrail.css';

function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e: MouseEvent | TouchEvent, rect: DOMRect) {
  let clientX = 0,
    clientY = 0;
  if ('touches' in e && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if ('clientX' in e) {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}

function getMouseDistance(p1: { x: number; y: number }, p2: { x: number; y: number }) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM: { el: HTMLElement; inner: HTMLElement | null } = { el: null as unknown as HTMLElement, inner: null };
  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  rect: DOMRect = null as unknown as DOMRect;
  private resize: () => void;

  constructor(DOM_el: HTMLElement) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector('.content__img-inner');
    this.getRect();
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener('resize', this.resize);
  }

  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }

  destroy() {
    window.removeEventListener('resize', this.resize);
  }
}

class ImageTrailVariant1 {
  container: HTMLElement;
  rafId: number | null = null;
  destroyed = false;
  images: ImageItem[];
  imagesTotal: number;
  imgPosition = 0;
  zIndexVal = 1;
  activeImagesCount = 0;
  isIdle = true;
  threshold = 80;
  mousePos = { x: 0, y: 0 };
  lastMousePos = { x: 0, y: 0 };
  cacheMousePos = { x: 0, y: 0 };
  handlePointerMove: (ev: MouseEvent | TouchEvent) => void;
  initRender: (ev: MouseEvent | TouchEvent) => void;

  constructor(container: HTMLElement) {
    this.container = container;
    this.images = [...container.querySelectorAll<HTMLElement>('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;

    this.handlePointerMove = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', this.handlePointerMove as EventListener);
    container.addEventListener('touchmove', this.handlePointerMove as EventListener);

    this.initRender = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.rafId = requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', this.initRender as EventListener);
      container.removeEventListener('touchmove', this.initRender as EventListener);
    };
    container.addEventListener('mousemove', this.initRender as EventListener);
    container.addEventListener('touchmove', this.initRender as EventListener);
  }

  render() {
    if (this.destroyed) return;
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    this.rafId = requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 1, zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power1',
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .to(img.DOM.el, { duration: 0.4, ease: 'power3', opacity: 0, scale: 0.2 }, 0.4);
  }

  destroy() {
    this.destroyed = true;
    if (this.rafId !== null) { cancelAnimationFrame(this.rafId); this.rafId = null; }
    this.container.removeEventListener('mousemove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('touchmove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('mousemove', this.initRender as EventListener);
    this.container.removeEventListener('touchmove', this.initRender as EventListener);
    this.images.forEach(img => { gsap.killTweensOf(img.DOM.el); img.destroy(); });
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() { this.activeImagesCount--; if (this.activeImagesCount === 0) this.isIdle = true; }
}

class ImageTrailVariant2 {
  container: HTMLElement;
  rafId: number | null = null;
  destroyed = false;
  images: ImageItem[];
  imagesTotal: number;
  imgPosition = 0;
  zIndexVal = 1;
  activeImagesCount = 0;
  isIdle = true;
  threshold = 80;
  mousePos = { x: 0, y: 0 };
  lastMousePos = { x: 0, y: 0 };
  cacheMousePos = { x: 0, y: 0 };
  handlePointerMove: (ev: MouseEvent | TouchEvent) => void;
  initRender: (ev: MouseEvent | TouchEvent) => void;

  constructor(container: HTMLElement) {
    this.container = container;
    this.images = [...container.querySelectorAll<HTMLElement>('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;

    this.handlePointerMove = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', this.handlePointerMove as EventListener);
    container.addEventListener('touchmove', this.handlePointerMove as EventListener);

    this.initRender = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.rafId = requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', this.initRender as EventListener);
      container.removeEventListener('touchmove', this.initRender as EventListener);
    };
    container.addEventListener('mousemove', this.initRender as EventListener);
    container.addEventListener('touchmove', this.initRender as EventListener);
  }

  render() {
    if (this.destroyed) return;
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (distance > this.threshold) { this.showNextImage(); this.lastMousePos = { ...this.mousePos }; }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    this.rafId = requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({ onStart: () => this.onImageActivated(), onComplete: () => this.onImageDeactivated() })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0, zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2, y: this.cacheMousePos.y - img.rect.height / 2
      }, { duration: 0.4, ease: 'power1', scale: 1, x: this.mousePos.x - img.rect.width / 2, y: this.mousePos.y - img.rect.height / 2 }, 0)
      .fromTo(img.DOM.inner!, { scale: 2.8, filter: 'brightness(250%)' }, { duration: 0.4, ease: 'power1', scale: 1, filter: 'brightness(100%)' }, 0)
      .to(img.DOM.el, { duration: 0.4, ease: 'power2', opacity: 0, scale: 0.2 }, 0.45);
  }

  destroy() {
    this.destroyed = true;
    if (this.rafId !== null) { cancelAnimationFrame(this.rafId); this.rafId = null; }
    this.container.removeEventListener('mousemove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('touchmove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('mousemove', this.initRender as EventListener);
    this.container.removeEventListener('touchmove', this.initRender as EventListener);
    this.images.forEach(img => { gsap.killTweensOf(img.DOM.el); img.destroy(); });
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() { this.activeImagesCount--; if (this.activeImagesCount === 0) this.isIdle = true; }
}

class ImageTrailVariant3 {
  container: HTMLElement;
  rafId: number | null = null;
  destroyed = false;
  images: ImageItem[];
  imagesTotal: number;
  imgPosition = 0;
  zIndexVal = 1;
  activeImagesCount = 0;
  isIdle = true;
  threshold = 80;
  mousePos = { x: 0, y: 0 };
  lastMousePos = { x: 0, y: 0 };
  cacheMousePos = { x: 0, y: 0 };
  handlePointerMove: (ev: MouseEvent | TouchEvent) => void;
  initRender: (ev: MouseEvent | TouchEvent) => void;

  constructor(container: HTMLElement) {
    this.container = container;
    this.images = [...container.querySelectorAll<HTMLElement>('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;

    this.handlePointerMove = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', this.handlePointerMove as EventListener);
    container.addEventListener('touchmove', this.handlePointerMove as EventListener);

    this.initRender = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.rafId = requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', this.initRender as EventListener);
      container.removeEventListener('touchmove', this.initRender as EventListener);
    };
    container.addEventListener('mousemove', this.initRender as EventListener);
    container.addEventListener('touchmove', this.initRender as EventListener);
  }

  render() {
    if (this.destroyed) return;
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (distance > this.threshold) { this.showNextImage(); this.lastMousePos = { ...this.mousePos }; }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    this.rafId = requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({ onStart: () => this.onImageActivated(), onComplete: () => this.onImageDeactivated() })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0, zIndex: this.zIndexVal, xPercent: 0, yPercent: 0,
        x: this.cacheMousePos.x - img.rect.width / 2, y: this.cacheMousePos.y - img.rect.height / 2
      }, { duration: 0.4, ease: 'power1', scale: 1, x: this.mousePos.x - img.rect.width / 2, y: this.mousePos.y - img.rect.height / 2 }, 0)
      .fromTo(img.DOM.inner!, { scale: 1.2 }, { duration: 0.4, ease: 'power1', scale: 1 }, 0)
      .to(img.DOM.el, { duration: 0.6, ease: 'power2', opacity: 0, scale: 0.2, xPercent: () => gsap.utils.random(-30, 30), yPercent: -200 }, 0.6);
  }

  destroy() {
    this.destroyed = true;
    if (this.rafId !== null) { cancelAnimationFrame(this.rafId); this.rafId = null; }
    this.container.removeEventListener('mousemove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('touchmove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('mousemove', this.initRender as EventListener);
    this.container.removeEventListener('touchmove', this.initRender as EventListener);
    this.images.forEach(img => { gsap.killTweensOf(img.DOM.el); img.destroy(); });
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() { this.activeImagesCount--; if (this.activeImagesCount === 0) this.isIdle = true; }
}

class ImageTrailVariant4 {
  container: HTMLElement;
  rafId: number | null = null;
  destroyed = false;
  images: ImageItem[];
  imagesTotal: number;
  imgPosition = 0;
  zIndexVal = 1;
  activeImagesCount = 0;
  isIdle = true;
  threshold = 80;
  mousePos = { x: 0, y: 0 };
  lastMousePos = { x: 0, y: 0 };
  cacheMousePos = { x: 0, y: 0 };
  handlePointerMove: (ev: MouseEvent | TouchEvent) => void;
  initRender: (ev: MouseEvent | TouchEvent) => void;

  constructor(container: HTMLElement) {
    this.container = container;
    this.images = [...container.querySelectorAll<HTMLElement>('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;

    this.handlePointerMove = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', this.handlePointerMove as EventListener);
    container.addEventListener('touchmove', this.handlePointerMove as EventListener);

    this.initRender = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.rafId = requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', this.initRender as EventListener);
      container.removeEventListener('touchmove', this.initRender as EventListener);
    };
    container.addEventListener('mousemove', this.initRender as EventListener);
    container.addEventListener('touchmove', this.initRender as EventListener);
  }

  render() {
    if (this.destroyed) return;
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) { this.showNextImage(); this.lastMousePos = { ...this.mousePos }; }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    this.rafId = requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let dist = Math.sqrt(dx * dx + dy * dy);
    if (dist !== 0) { dx /= dist; dy /= dist; }
    dx *= dist / 100; dy *= dist / 100;

    gsap.timeline({ onStart: () => this.onImageActivated(), onComplete: () => this.onImageDeactivated() })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0, zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2, y: this.cacheMousePos.y - img.rect.height / 2
      }, { duration: 0.4, ease: 'power1', scale: 1, x: this.mousePos.x - img.rect.width / 2, y: this.mousePos.y - img.rect.height / 2 }, 0)
      .fromTo(img.DOM.inner!, { scale: 2, filter: `brightness(${Math.max((400 * dist) / 100, 100)}%) contrast(${Math.max((400 * dist) / 100, 100)}%)` }, { duration: 0.4, ease: 'power1', scale: 1, filter: 'brightness(100%) contrast(100%)' }, 0)
      .to(img.DOM.el, { duration: 0.4, ease: 'power3', opacity: 0 }, 0.4)
      .to(img.DOM.el, { duration: 1.5, ease: 'power4', x: `+=${dx * 110}`, y: `+=${dy * 110}` }, 0.05);
  }

  destroy() {
    this.destroyed = true;
    if (this.rafId !== null) { cancelAnimationFrame(this.rafId); this.rafId = null; }
    this.container.removeEventListener('mousemove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('touchmove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('mousemove', this.initRender as EventListener);
    this.container.removeEventListener('touchmove', this.initRender as EventListener);
    this.images.forEach(img => { gsap.killTweensOf(img.DOM.el); img.destroy(); });
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() { this.activeImagesCount--; if (this.activeImagesCount === 0) this.isIdle = true; }
}

class ImageTrailVariant5 {
  container: HTMLElement;
  rafId: number | null = null;
  destroyed = false;
  images: ImageItem[];
  imagesTotal: number;
  imgPosition = 0;
  zIndexVal = 1;
  activeImagesCount = 0;
  isIdle = true;
  threshold = 80;
  mousePos = { x: 0, y: 0 };
  lastMousePos = { x: 0, y: 0 };
  cacheMousePos = { x: 0, y: 0 };
  lastAngle = 0;
  handlePointerMove: (ev: MouseEvent | TouchEvent) => void;
  initRender: (ev: MouseEvent | TouchEvent) => void;

  constructor(container: HTMLElement) {
    this.container = container;
    this.images = [...container.querySelectorAll<HTMLElement>('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;

    this.handlePointerMove = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', this.handlePointerMove as EventListener);
    container.addEventListener('touchmove', this.handlePointerMove as EventListener);

    this.initRender = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.rafId = requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', this.initRender as EventListener);
      container.removeEventListener('touchmove', this.initRender as EventListener);
    };
    container.addEventListener('mousemove', this.initRender as EventListener);
    container.addEventListener('touchmove', this.initRender as EventListener);
  }

  render() {
    if (this.destroyed) return;
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) { this.showNextImage(); this.lastMousePos = { ...this.mousePos }; }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    this.rafId = requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    if (angle > 90 && angle <= 270) angle += 180;
    const isMovingClockwise = angle >= this.lastAngle;
    this.lastAngle = angle;
    const startAngle = isMovingClockwise ? angle - 10 : angle + 10;
    let dist = Math.sqrt(dx * dx + dy * dy);
    if (dist !== 0) { dx /= dist; dy /= dist; }
    dx *= dist / 150; dy *= dist / 150;

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap.timeline({ onStart: () => this.onImageActivated(), onComplete: () => this.onImageDeactivated() })
      .fromTo(img.DOM.el, {
        opacity: 1, filter: 'brightness(80%)', scale: 0.1, zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2, y: this.cacheMousePos.y - img.rect.height / 2, rotation: startAngle
      }, { duration: 1, ease: 'power2', scale: 1, filter: 'brightness(100%)', x: this.mousePos.x - img.rect.width / 2 + dx * 70, y: this.mousePos.y - img.rect.height / 2 + dy * 70, rotation: this.lastAngle }, 0)
      .to(img.DOM.el, { duration: 0.4, ease: 'expo', opacity: 0 }, 0.5)
      .to(img.DOM.el, { duration: 1.5, ease: 'power4', x: `+=${dx * 120}`, y: `+=${dy * 120}` }, 0.05);
  }

  destroy() {
    this.destroyed = true;
    if (this.rafId !== null) { cancelAnimationFrame(this.rafId); this.rafId = null; }
    this.container.removeEventListener('mousemove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('touchmove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('mousemove', this.initRender as EventListener);
    this.container.removeEventListener('touchmove', this.initRender as EventListener);
    this.images.forEach(img => { gsap.killTweensOf(img.DOM.el); img.destroy(); });
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() { this.activeImagesCount--; if (this.activeImagesCount === 0) this.isIdle = true; }
}

class ImageTrailVariant6 {
  container: HTMLElement;
  rafId: number | null = null;
  destroyed = false;
  images: ImageItem[];
  imagesTotal: number;
  imgPosition = 0;
  zIndexVal = 1;
  activeImagesCount = 0;
  isIdle = true;
  threshold = 80;
  mousePos = { x: 0, y: 0 };
  lastMousePos = { x: 0, y: 0 };
  cacheMousePos = { x: 0, y: 0 };
  handlePointerMove: (ev: MouseEvent | TouchEvent) => void;
  initRender: (ev: MouseEvent | TouchEvent) => void;

  constructor(container: HTMLElement) {
    this.container = container;
    this.images = [...container.querySelectorAll<HTMLElement>('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;

    this.handlePointerMove = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', this.handlePointerMove as EventListener);
    container.addEventListener('touchmove', this.handlePointerMove as EventListener);

    this.initRender = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.rafId = requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', this.initRender as EventListener);
      container.removeEventListener('touchmove', this.initRender as EventListener);
    };
    container.addEventListener('mousemove', this.initRender as EventListener);
    container.addEventListener('touchmove', this.initRender as EventListener);
  }

  render() {
    if (this.destroyed) return;
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);
    if (distance > this.threshold) { this.showNextImage(); this.lastMousePos = { ...this.mousePos }; }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    this.rafId = requestAnimationFrame(() => this.render());
  }

  mapSpeedToSize(speed: number, minSize: number, maxSize: number) {
    return minSize + (maxSize - minSize) * Math.min(speed / 200, 1);
  }
  mapSpeedToBrightness(speed: number, minB: number, maxB: number) {
    return minB + (maxB - minB) * Math.min(speed / 70, 1);
  }
  mapSpeedToBlur(speed: number, minBlur: number, maxBlur: number) {
    return minBlur + (maxBlur - minBlur) * Math.min(speed / 90, 1);
  }
  mapSpeedToGrayscale(speed: number, minG: number, maxG: number) {
    return minG + (maxG - minG) * Math.min(speed / 90, 1);
  }

  showNextImage() {
    const dx = this.mousePos.x - this.cacheMousePos.x;
    const dy = this.mousePos.y - this.cacheMousePos.y;
    const speed = Math.sqrt(dx * dx + dy * dy);

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    const scaleFactor = this.mapSpeedToSize(speed, 0.3, 2);
    const brightnessValue = this.mapSpeedToBrightness(speed, 0, 1.3);
    const blurValue = this.mapSpeedToBlur(speed, 20, 0);
    const grayscaleValue = this.mapSpeedToGrayscale(speed, 600, 0);

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({ onStart: () => this.onImageActivated(), onComplete: () => this.onImageDeactivated() })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0, zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2, y: this.cacheMousePos.y - img.rect.height / 2
      }, { duration: 0.8, ease: 'power3', scale: scaleFactor, filter: `grayscale(${grayscaleValue * 100}%) brightness(${brightnessValue * 100}%) blur(${blurValue}px)`, x: this.mousePos.x - img.rect.width / 2, y: this.mousePos.y - img.rect.height / 2 }, 0)
      .fromTo(img.DOM.inner!, { scale: 2 }, { duration: 0.8, ease: 'power3', scale: 1 }, 0)
      .to(img.DOM.el, { duration: 0.4, ease: 'power3.in', opacity: 0, scale: 0.2 }, 0.45);
  }

  destroy() {
    this.destroyed = true;
    if (this.rafId !== null) { cancelAnimationFrame(this.rafId); this.rafId = null; }
    this.container.removeEventListener('mousemove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('touchmove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('mousemove', this.initRender as EventListener);
    this.container.removeEventListener('touchmove', this.initRender as EventListener);
    this.images.forEach(img => { gsap.killTweensOf(img.DOM.el); img.destroy(); });
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() { this.activeImagesCount--; if (this.activeImagesCount === 0) this.isIdle = true; }
}

function getNewPosition(position: number, offset: number, arr: unknown[]) {
  const realOffset = Math.abs(offset) % arr.length;
  if (position - realOffset >= 0) return position - realOffset;
  return arr.length - (realOffset - position);
}

class ImageTrailVariant7 {
  container: HTMLElement;
  rafId: number | null = null;
  destroyed = false;
  images: ImageItem[];
  imagesTotal: number;
  imgPosition = 0;
  zIndexVal = 1;
  activeImagesCount = 0;
  isIdle = true;
  threshold = 80;
  mousePos = { x: 0, y: 0 };
  lastMousePos = { x: 0, y: 0 };
  cacheMousePos = { x: 0, y: 0 };
  visibleImagesCount = 0;
  visibleImagesTotal: number;
  handlePointerMove: (ev: MouseEvent | TouchEvent) => void;
  initRender: (ev: MouseEvent | TouchEvent) => void;

  constructor(container: HTMLElement) {
    this.container = container;
    this.images = [...container.querySelectorAll<HTMLElement>('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.visibleImagesTotal = Math.min(9, this.imagesTotal - 1);

    this.handlePointerMove = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', this.handlePointerMove as EventListener);
    container.addEventListener('touchmove', this.handlePointerMove as EventListener);

    this.initRender = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.rafId = requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', this.initRender as EventListener);
      container.removeEventListener('touchmove', this.initRender as EventListener);
    };
    container.addEventListener('mousemove', this.initRender as EventListener);
    container.addEventListener('touchmove', this.initRender as EventListener);
  }

  render() {
    if (this.destroyed) return;
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);
    if (distance > this.threshold) { this.showNextImage(); this.lastMousePos = { ...this.mousePos }; }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    this.rafId = requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    ++this.visibleImagesCount;
    gsap.killTweensOf(img.DOM.el);
    const scaleValue = gsap.utils.random(0.5, 1.6);

    gsap.timeline({ onStart: () => this.onImageActivated(), onComplete: () => this.onImageDeactivated() })
      .fromTo(img.DOM.el, {
        scale: scaleValue - Math.max(gsap.utils.random(0.2, 0.6), 0), rotationZ: 0, opacity: 1, zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2, y: this.cacheMousePos.y - img.rect.height / 2
      }, { duration: 0.4, ease: 'power3', scale: scaleValue, rotationZ: gsap.utils.random(-3, 3), x: this.mousePos.x - img.rect.width / 2, y: this.mousePos.y - img.rect.height / 2 }, 0);

    if (this.visibleImagesCount >= this.visibleImagesTotal) {
      const lastInQueue = getNewPosition(this.imgPosition, this.visibleImagesTotal, this.images);
      const oldImg = this.images[lastInQueue];
      gsap.to(oldImg.DOM.el, {
        duration: 0.4, ease: 'power4', opacity: 0, scale: 1.3,
        onComplete: () => { if (this.activeImagesCount === 0) this.isIdle = true; }
      });
    }
  }

  destroy() {
    this.destroyed = true;
    if (this.rafId !== null) { cancelAnimationFrame(this.rafId); this.rafId = null; }
    this.container.removeEventListener('mousemove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('touchmove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('mousemove', this.initRender as EventListener);
    this.container.removeEventListener('touchmove', this.initRender as EventListener);
    this.images.forEach(img => { gsap.killTweensOf(img.DOM.el); img.destroy(); });
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() { this.activeImagesCount--; }
}

class ImageTrailVariant8 {
  container: HTMLElement;
  rafId: number | null = null;
  destroyed = false;
  images: ImageItem[];
  imagesTotal: number;
  imgPosition = 0;
  zIndexVal = 1;
  activeImagesCount = 0;
  isIdle = true;
  threshold = 80;
  mousePos = { x: 0, y: 0 };
  lastMousePos = { x: 0, y: 0 };
  cacheMousePos = { x: 0, y: 0 };
  rotation = { x: 0, y: 0 };
  cachedRotation = { x: 0, y: 0 };
  zValue = 0;
  cachedZValue = 0;
  handlePointerMove: (ev: MouseEvent | TouchEvent) => void;
  initRender: (ev: MouseEvent | TouchEvent) => void;

  constructor(container: HTMLElement) {
    this.container = container;
    this.images = [...container.querySelectorAll<HTMLElement>('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;

    this.handlePointerMove = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', this.handlePointerMove as EventListener);
    container.addEventListener('touchmove', this.handlePointerMove as EventListener);

    this.initRender = (ev) => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.rafId = requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', this.initRender as EventListener);
      container.removeEventListener('touchmove', this.initRender as EventListener);
    };
    container.addEventListener('mousemove', this.initRender as EventListener);
    container.addEventListener('touchmove', this.initRender as EventListener);
  }

  render() {
    if (this.destroyed) return;
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (distance > this.threshold) { this.showNextImage(); this.lastMousePos = { ...this.mousePos }; }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    this.rafId = requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    const rect = this.container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const relX = this.mousePos.x - centerX;
    const relY = this.mousePos.y - centerY;

    this.rotation.x = -(relY / centerY) * 30;
    this.rotation.y = (relX / centerX) * 30;
    this.cachedRotation = { ...this.rotation };

    const distanceFromCenter = Math.sqrt(relX * relX + relY * relY);
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
    this.zValue = (distanceFromCenter / maxDistance) * 1200 - 600;
    this.cachedZValue = this.zValue;
    const normalizedZ = (this.zValue + 600) / 1200;
    const brightness = 0.2 + normalizedZ * 2.3;

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap.timeline({ onStart: () => this.onImageActivated(), onComplete: () => this.onImageDeactivated() })
      .set(this.container, { perspective: 1000 }, 0)
      .fromTo(img.DOM.el, {
        opacity: 1, z: 0, scale: 1 + this.cachedZValue / 1000, zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2, y: this.cacheMousePos.y - img.rect.height / 2,
        rotationX: this.cachedRotation.x, rotationY: this.cachedRotation.y, filter: `brightness(${brightness})`
      }, { duration: 1, ease: 'expo', scale: 1 + this.zValue / 1000, x: this.mousePos.x - img.rect.width / 2, y: this.mousePos.y - img.rect.height / 2, rotationX: this.rotation.x, rotationY: this.rotation.y }, 0)
      .to(img.DOM.el, { duration: 0.4, ease: 'power2', opacity: 0, z: -800 }, 0.3);
  }

  destroy() {
    this.destroyed = true;
    if (this.rafId !== null) { cancelAnimationFrame(this.rafId); this.rafId = null; }
    this.container.removeEventListener('mousemove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('touchmove', this.handlePointerMove as EventListener);
    this.container.removeEventListener('mousemove', this.initRender as EventListener);
    this.container.removeEventListener('touchmove', this.initRender as EventListener);
    this.images.forEach(img => { gsap.killTweensOf(img.DOM.el); img.destroy(); });
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() { this.activeImagesCount--; if (this.activeImagesCount === 0) this.isIdle = true; }
}

type VariantClass = new (container: HTMLElement) => { destroy(): void };

const variantMap: Record<number, VariantClass> = {
  1: ImageTrailVariant1,
  2: ImageTrailVariant2,
  3: ImageTrailVariant3,
  4: ImageTrailVariant4,
  5: ImageTrailVariant5,
  6: ImageTrailVariant6,
  7: ImageTrailVariant7,
  8: ImageTrailVariant8,
};

interface ImageTrailProps {
  items?: string[];
  variant?: number;
}

export default function ImageTrail({ items = [], variant = 1 }: ImageTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const Cls = variantMap[variant] || variantMap[1];
    const instance = new Cls(containerRef.current);
    return () => {
      instance.destroy();
    };
  }, [variant, items]);

  return (
    <div className="content" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img" key={i}>
          <div className="content__img-inner" style={{ backgroundImage: `url(${url})` }} />
        </div>
      ))}
    </div>
  );
}
