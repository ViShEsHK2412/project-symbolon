export function setupScrambleEffect1() {
  const characters = "!<>-_\\/[]{}—=+*^?#_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  interface QueueItem {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }

  class ScrambleText {
    el: HTMLElement;
    originalText: string;
    chars: string;
    frameRequest: number;
    frame: number;
    queue: QueueItem[];
    resolve!: () => void;

    constructor(el: HTMLElement) {
      this.el = el;
      this.originalText = el.getAttribute("data-text") || el.innerText;
      this.el.innerText = this.originalText;
      this.chars = characters;
      this.frameRequest = 0;
      this.frame = 0;
      this.queue = [];
    }

    setText(newText: string) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise<void>((resolve) => (this.resolve = resolve));
      this.queue = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 20);
        const end = start + Math.floor(Math.random() * 20);
        this.queue.push({ from, to, start, end });
      }

      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }

    update() {
      let output = "";
      let complete = 0;

      for (let i = 0, n = this.queue.length; i < n; i++) {
        const { from, to, start, end } = this.queue[i];
        let char = this.queue[i].char;
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span style="opacity: 0.8">${char}</span>`;
        } else {
          output += from;
        }
      }

      this.el.innerHTML = output;

      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update.bind(this));
        this.frame++;
      }
    }

    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  const scrambleLinks = document.querySelectorAll(".footer-scramble-hover");
  scrambleLinks.forEach((link) => {
    const el = link as HTMLElement;
    const scrambler = new ScrambleText(el);

    el.addEventListener("mouseenter", () => {
      el.classList.add("is-scrambling");
      scrambler.setText(scrambler.originalText);
    });

    el.addEventListener("mouseleave", () => {
      el.classList.remove("is-scrambling");
      scrambler.setText(scrambler.originalText);
    });
  });
}

export function setupScrambleOnload1() {
  const characters = "!<>-_\\/[]{}—=+*^?#_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  interface QueueItem {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }

  class ScrambleText {
    el: HTMLElement;
    originalText: string;
    chars: string;
    frameRequest: number;
    frame: number;
    queue: QueueItem[];
    resolve!: () => void;

    constructor(el: HTMLElement) {
      this.el = el;
      this.originalText = el.getAttribute("data-text") || el.innerText;
      this.el.innerText = this.originalText;
      this.chars = characters;
      this.frameRequest = 0;
      this.frame = 0;
      this.queue = [];
    }

    setText(newText: string) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise<void>((resolve) => (this.resolve = resolve));
      this.queue = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 20);
        const end = start + Math.floor(Math.random() * 20);
        this.queue.push({ from, to, start, end });
      }

      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }

    update() {
      let output = "";
      let complete = 0;

      for (let i = 0, n = this.queue.length; i < n; i++) {
        const { from, to, start, end } = this.queue[i];
        let char = this.queue[i].char;
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span style="opacity: 0.8">${char}</span>`;
        } else {
          output += from;
        }
      }

      this.el.innerHTML = output;

      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update.bind(this));
        this.frame++;
      }
    }

    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  document.querySelectorAll(".terminal-text-1").forEach((node) => {
    const el = node as HTMLElement;
    const scrambler = new ScrambleText(el);
    scrambler.setText(scrambler.originalText);
  });
}

export function setupScrambleEffect2() {
  const scrambleChars = "!<>-_\\/[]{}—=+*^?#_0123456789ABCDEF";

  class TextScrambler {
    element: HTMLElement;
    originalText: string;
    interval: ReturnType<typeof setInterval> | undefined;

    constructor(element: HTMLElement) {
      this.element = element;
      this.originalText = element.innerText;
      this.interval = undefined;
    }

    start() {
      let iteration = 0;
      clearInterval(this.interval);
      this.element.classList.add("is-scrambling");

      this.interval = setInterval(() => {
        this.element.innerText = this.originalText
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) {
              return this.originalText[index];
            }
            return scrambleChars[
              Math.floor(Math.random() * scrambleChars.length)
            ];
          })
          .join("");

        if (iteration >= this.originalText.length) {
          clearInterval(this.interval);
        }

        iteration += 1 / 3;
      }, 30);
    }

    reset() {
      clearInterval(this.interval);
      this.element.innerText = this.originalText;
      this.element.classList.remove("is-scrambling");
    }
  }

  document.querySelectorAll(".footer-scramble-link").forEach((link) => {
    const el = link as HTMLElement;
    const scrambler = new TextScrambler(el);
    el.addEventListener("mouseenter", () => scrambler.start());
    el.addEventListener("mouseleave", () => scrambler.reset());
  });

  setTimeout(() => {
    document.querySelectorAll(".scramble-onload-2").forEach((node) => {
      const el = node as HTMLElement;
      const scrambler = new TextScrambler(el);
      scrambler.start();
    });
  }, 1000);
}
