## Code 1

The code below contains a design. This design should be used to create a new app or be added to an existing one.

Look at the current open project to determine if a project exists. If no project is open, create a new Vite project then create this view in React after componentizing it.

If a project does exist, determine the framework being used and implement the design within that framework. Identify whether reusable components already exist that can be used to implement the design faithfully and if so use them, otherwise create new components. If other views already exist in the project, make sure to place the view in a sensible route and connect it to the other views.

Ensure the visual characteristics, layout, and interactions in the design are preserved with perfect fidelity.

Run the dev command so the user can see the app once finished.

```
<html lang="en" class="scroll-smooth" vid="0"><head vid="1">
    <meta charset="UTF-8" vid="2">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" vid="3">
    <title vid="4">Symbolon - Esoteric Brutalism</title>
    <script src="https://cdn.tailwindcss.com/3.4.17" vid="5"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" vid="6">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" vid="7">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&amp;family=Space+Mono:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet" vid="8">

    <script vid="9">
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        black: '#000000',
                        brand: {
                            amber: '#d97736',
                            grey: '#e0e0e0',
                            border: '#1a1a1a',
                            muted: '#666666',
                            dark: '#0a0a0a'
                        }
                    },
                    fontFamily: {
                        serif: ['"Cormorant Garamond"', 'serif'],
                        mono: ['"Space Mono"', 'monospace'],
                    },
                    letterSpacing: {
                        widest: '.25em',
                        ultra: '.5em',
                    }
                }
            }
        }
    </script>

    <style vid="10">
        :root {
            --amber-glow: rgba(217, 119, 54, 0.5);
        }

        body {
            background-color: #000000;
            color: #e0e0e0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }


        .noise-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 50;
            opacity: 0.04;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }


        .scanlines::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
            background-size: 100% 4px;
            pointer-events: none;
            z-index: 10;
        }


        .reveal-element {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1), transform 1s cubic-bezier(0.19, 1, 0.22, 1);
            will-change: opacity, transform;
        }

        .reveal-element.is-revealed {
            opacity: 1;
            transform: translateY(0);
        }


        .scramble-hover {
            transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        .scramble-hover.is-scrambling {
            color: #d97736;
            text-shadow: 0 0 10px var(--amber-glow);
        }


        .cursor-blink {
            animation: blink 1s step-end infinite;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }


        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #000000;
            border-left: 1px solid #1a1a1a;
        }
        ::-webkit-scrollbar-thumb {
            background: #1a1a1a;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #d97736;
        }


        .grid-bg {
            background-image:
                linear-gradient(to right, rgba(26, 26, 26, 0.5) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(26, 26, 26, 0.5) 1px, transparent 1px);
            background-size: 50px 50px;
            background-position: center center;
        }
    </style>
</head>
<body class="w-full h-full min-h-screen flex flex-col font-mono text-brand-grey selection:bg-brand-amber selection:text-black" vid="11">

    <div class="noise-bg" vid="12"></div>


    <main class="flex-grow flex flex-col items-center justify-center relative min-h-[90vh] grid-bg border-b border-brand-border" vid="13">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none z-0" vid="14"></div>
        <div class="relative z-10 text-center px-6" vid="15">
            <p class="text-xs tracking-ultra text-brand-muted uppercase mb-4" vid="16">[ SYSTEM INITIALIZED ]</p>
            <h2 class="font-serif text-4xl md:text-6xl text-brand-grey mb-8 font-light italic" vid="17">Accessing Archives</h2>
            <div class="w-[1px] h-24 bg-brand-border mx-auto mb-8 relative" vid="18">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-amber rounded-full animate-ping" vid="19"></div>
            </div>
            <p class="text-[10px] uppercase tracking-widest text-brand-muted" vid="20">Scroll down to access terminal interface</p>
            <p class="text-[10px] uppercase tracking-widest text-brand-muted mt-1" vid="21">↓</p>
        </div>
    </main>


    <footer id="symbolon-footer" class="relative w-full bg-black overflow-hidden border-t border-brand-border" vid="22">


        <div class="relative w-full py-20 md:py-32 lg:py-40 flex justify-center items-center overflow-hidden border-b border-brand-border scanlines" vid="23">

            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-brand-amber/5 blur-[120px] rounded-[100%] pointer-events-none" vid="24"></div>

            <h1 class="reveal-element font-serif text-[clamp(3.5rem,15vw,22rem)] leading-[0.8] tracking-[0.05em] text-brand-grey uppercase select-none relative z-20 font-light" style="transition-delay: 100ms;" vid="25">
                <span class="inline-block mx-[-1vw]" vid="26">S</span>
                <span class="inline-block mx-[-1vw]" vid="27">Y</span>
                <span class="inline-block mx-[-1vw]" vid="28">M</span>
                <span class="inline-block mx-[-1vw]" vid="29">B</span>
                <span class="inline-block mx-[-1vw]" vid="30">O</span>
                <span class="inline-block mx-[-1vw]" vid="31">L</span>
                <span class="inline-block mx-[-1vw]" vid="32">O</span>
                <span class="inline-block mx-[-1vw]" vid="33">N</span>
            </h1>
        </div>


        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-brand-border border-b border-brand-border" vid="34">


            <div class="bg-black p-8 lg:p-12 reveal-element flex flex-col h-full" style="transition-delay: 200ms;" vid="35">
                <div class="flex justify-between items-start mb-12" vid="36">
                    <h3 class="text-[10px] text-brand-muted tracking-widest uppercase" vid="37">IDX. Archive</h3>
                    <span class="text-[10px] text-brand-muted tracking-widest" vid="38">[01]</span>
                </div>
                <ul class="text-xs tracking-widest uppercase space-y-5 mt-auto" vid="39">
                    <li vid="40"><a href="#" class="scramble-hover block cursor-pointer w-fit" data-text="METHODOLOGY" vid="41">METHODOLOGY</a></li>
                    <li vid="42"><a href="#" class="scramble-hover block cursor-pointer w-fit" data-text="TRANSMIT" vid="43">TRANSMIT</a></li>
                    <li vid="44"><a href="#" class="scramble-hover block cursor-pointer w-fit" data-text="ARCHIVE" vid="45">ARCHIVE</a></li>
                    <li vid="46"><a href="#" class="scramble-hover block cursor-pointer w-fit" data-text="FRAMEWORK" vid="47">FRAMEWORK</a></li>
                    <li vid="48"><a href="#" class="scramble-hover block cursor-pointer w-fit" data-text="PEIRCEAN TRIAD" vid="49">PEIRCEAN TRIAD</a></li>
                </ul>
            </div>


            <div class="bg-black p-8 lg:p-12 reveal-element flex flex-col h-full" style="transition-delay: 300ms;" vid="50">
                <div class="flex justify-between items-start mb-12" vid="51">
                    <h3 class="text-[10px] text-brand-muted tracking-widest uppercase" vid="52">Systems</h3>
                    <span class="text-[10px] text-brand-muted tracking-widest" vid="53">[02]</span>
                </div>
                <ul class="text-xs tracking-widest uppercase space-y-5 mt-auto" vid="54">
                    <li vid="55"><a href="#" class="scramble-hover block cursor-pointer w-fit" data-text="OBSCURATION" vid="56">OBSCURATION</a></li>
                    <li vid="57"><a href="#" class="scramble-hover block cursor-pointer w-fit" data-text="REVELATION" vid="58">REVELATION</a></li>
                    <li vid="59"><a href="#" class="scramble-hover block cursor-pointer w-fit" data-text="INTERACTION" vid="60">INTERACTION</a></li>
                    <li vid="61"><a href="#" class="scramble-hover block cursor-pointer w-fit" data-text="SIGNAL DECODE" vid="62">SIGNAL DECODE</a></li>
                    <li vid="63"><a href="#" class="scramble-hover block cursor-pointer w-fit" data-text="PROTOCOL" vid="64">PROTOCOL</a></li>
                </ul>
            </div>


            <div class="bg-black p-8 lg:p-12 reveal-element flex flex-col h-full" style="transition-delay: 400ms;" vid="65">
                <div class="flex justify-between items-start mb-12" vid="66">
                    <h3 class="text-[10px] text-brand-muted tracking-widest uppercase" vid="67">Telemetry</h3>
                    <span class="text-[10px] text-brand-muted tracking-widest" vid="68">[03]</span>
                </div>
                <div class="mt-auto space-y-4 text-xs tracking-widest uppercase" vid="69">
                    <div class="pb-4 border-b border-brand-border" vid="70">
                        <a href="#" class="scramble-hover block cursor-pointer text-brand-amber" data-text="INITIATE CONTACT" vid="71">INITIATE CONTACT</a>
                    </div>
                    <div class="grid grid-cols-[1fr_auto] gap-4 text-brand-muted" vid="72">
                        <span vid="73">COORD:</span>
                        <span class="text-brand-grey text-right" vid="74">45.42 // -75.69</span>
                    </div>
                    <div class="grid grid-cols-[1fr_auto] gap-4 text-brand-muted" vid="75">
                        <span vid="76">CIPHER KEY:</span>
                        <span class="text-brand-grey text-right terminal-text" vid="77">A7X-99B-Ω</span>
                    </div>
                    <div class="grid grid-cols-[1fr_auto] gap-4 text-brand-muted" vid="78">
                        <span vid="79">DATA STREAM:</span>
                        <span class="text-brand-amber text-right terminal-text" vid="80">ENCRYPTED</span>
                    </div>
                </div>
            </div>


            <div class="bg-black p-8 lg:p-12 reveal-element flex flex-col h-full justify-between" style="transition-delay: 500ms;" vid="81">
                <div vid="82">
                    <div class="flex justify-between items-start mb-12" vid="83">
                        <h3 class="text-[10px] text-brand-muted tracking-widest uppercase" vid="84">Status Feed</h3>
                        <span class="text-[10px] text-brand-muted tracking-widest" vid="85">[04]</span>
                    </div>
                    <div class="text-xs tracking-widest uppercase space-y-3 text-brand-muted" vid="86">
                        <div class="flex justify-between border-b border-brand-border border-dashed pb-3" vid="87">
                            <span vid="88">V.CORE</span>
                            <span class="text-brand-grey" vid="89">3.1.04_RC</span>
                        </div>
                        <div class="flex justify-between border-b border-brand-border border-dashed pb-3" vid="90">
                            <span vid="91">NODE</span>
                            <span class="text-brand-grey terminal-text" vid="92">SEC-PRIMARY</span>
                        </div>
                        <div class="flex justify-between pt-1" vid="93">
                            <span vid="94">SYNC</span>
                            <span id="live-clock" class="text-brand-amber font-bold" vid="95">00:00:00</span>
                        </div>
                    </div>
                </div>


                <div class="mt-12 h-16 w-full relative overflow-hidden" vid="96">
                    <svg viewBox="0 0 200 40" class="w-full h-full opacity-40 absolute bottom-0 left-0" preserveAspectRatio="none" vid="97">
                        <path id="sine-wave" d="M0,20 Q10,10 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20" fill="none" stroke="#d97736" stroke-width="1" stroke-linecap="square" vid="98"></path>
                    </svg>
                    <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" vid="99"></div>
                </div>
            </div>

        </div>


        <div class="w-full bg-black py-5 px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center text-[10px] sm:text-xs tracking-widest text-brand-muted uppercase z-20 relative reveal-element" style="transition-delay: 600ms;" vid="100">

            <div class="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 lg:mb-0" vid="101">
                <div class="flex items-center space-x-2" vid="102">
                    <span class="w-1.5 h-1.5 bg-brand-amber rounded-full animate-pulse" vid="103"></span>
                    <span class="text-brand-amber" vid="104">SYS: ACTIVE</span>
                </div>
                <span class="opacity-30 hidden sm:inline" vid="105">//</span>
                <span class="hidden md:inline" vid="106">LAT: 45.42 <span class="opacity-50 mx-1" vid="107">/</span> LONG: -75.69</span>
                <span class="opacity-30 hidden lg:inline" vid="108">//</span>
                <span class="hidden sm:inline" vid="109">ENCRYPTION: SECURE</span>
                <span class="opacity-30 hidden xl:inline" vid="110">//</span>
                <span vid="111">TRGT: <span id="target-coords" class="text-brand-grey" vid="112">0.197, 0.932</span></span>
                <span class="text-brand-amber cursor-blink ml-1 text-sm leading-none" vid="113">█</span>
            </div>

            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-x-8 gap-y-2" vid="114">
                <div class="flex items-center space-x-4" vid="115">
                    <a href="#" class="hover:text-brand-amber transition-colors duration-300" vid="116">TERMS</a>
                    <span class="opacity-30" vid="117">/</span>
                    <a href="#" class="hover:text-brand-amber transition-colors duration-300" vid="118">PRIVACY</a>
                </div>
                <div class="flex items-center space-x-2" vid="119">
                    <span vid="120">© 2024</span>
                    <span class="text-brand-grey" vid="121">SYMBOLON ARCH.</span>
                </div>
            </div>

        </div>
    </footer>

    <script vid="122">
        document.addEventListener('DOMContentLoaded', () => {


            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-element').forEach(el => {
                revealObserver.observe(el);
            });


            const characters = '!<>-_\\/[]{}—=+*^?#_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

            class ScrambleText {
                constructor(el) {
                    this.el = el;

                    this.originalText = el.getAttribute('data-text') || el.innerText;
                    this.el.innerText = this.originalText;
                    this.chars = characters;
                    this.frameRequest = null;
                    this.frame = 0;
                    this.queue = [];
                }

                setText(newText) {
                    const oldText = this.el.innerText;
                    const length = Math.max(oldText.length, newText.length);
                    const promise = new Promise((resolve) => this.resolve = resolve);
                    this.queue = [];

                    for (let i = 0; i < length; i++) {
                        const from = oldText[i] || '';
                        const to = newText[i] || '';

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
                    let output = '';
                    let complete = 0;

                    for (let i = 0, n = this.queue.length; i < n; i++) {
                        let { from, to, start, end, char } = this.queue[i];
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


            const scrambleLinks = document.querySelectorAll('.scramble-hover');
            scrambleLinks.forEach(link => {
                const scrambler = new ScrambleText(link);

                link.addEventListener('mouseenter', () => {
                    link.classList.add('is-scrambling');
                    scrambler.setText(scrambler.originalText);
                });

                link.addEventListener('mouseleave', () => {
                    link.classList.remove('is-scrambling');

                    scrambler.setText(scrambler.originalText);
                });
            });


            setTimeout(() => {
                document.querySelectorAll('.terminal-text').forEach(el => {
                    const scrambler = new ScrambleText(el);
                    scrambler.setText(scrambler.originalText);
                });
            }, 1500);





            const clockEl = document.getElementById('live-clock');
            if (clockEl) {
                setInterval(() => {
                    const now = new Date();
                    const h = String(now.getHours()).padStart(2, '0');
                    const m = String(now.getMinutes()).padStart(2, '0');
                    const s = String(now.getSeconds()).padStart(2, '0');
                    const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
                    clockEl.innerText = `${h}:${m}:${s}:${ms}`;
                }, 47);
            }


            const targetEl = document.getElementById('target-coords');
            if (targetEl) {
                setInterval(() => {
                    const r1 = (Math.random() * 0.999).toFixed(3);
                    const r2 = (Math.random() * 0.999).toFixed(3);
                    targetEl.innerText = `${r1}, ${r2}`;
                }, 2500);
            }


            const wavePath = document.getElementById('sine-wave');
            if (wavePath) {
                let offset = 0;
                setInterval(() => {
                    offset -= 1;


                    wavePath.style.strokeDasharray = '5 15';
                    wavePath.style.strokeDashoffset = offset;
                }, 50);
            }
        });
    </script>

</body></html>
```

## Code 2

The code below contains a design. This design should be used to create a new app or be added to an existing one.

Look at the current open project to determine if a project exists. If no project is open, create a new Vite project then create this view in React after componentizing it.

If a project does exist, determine the framework being used and implement the design within that framework. Identify whether reusable components already exist that can be used to implement the design faithfully and if so use them, otherwise create new components. If other views already exist in the project, make sure to place the view in a sensible route and connect it to the other views.

Ensure the visual characteristics, layout, and interactions in the design are preserved with perfect fidelity.

Run the dev command so the user can see the app once finished.

```
<html lang="en" vid="0"><head vid="1">
    <meta charset="UTF-8" vid="2">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" vid="3">
    <title vid="4">Symbolon Footer</title>
    <script src="https://cdn.tailwindcss.com/3.4.17" vid="5"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" vid="6">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" vid="7">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&amp;family=Space+Mono:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet" vid="8">
    <style vid="9">
        :root {
            --brand-color: #d97736;
            --bg-color: #000000;
            --text-primary: #e0e0e0;
            --border-color: #1a1a1a;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-primary);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .font-serif {
            font-family: 'Cormorant Garamond', serif;
        }

        .font-mono {
            font-family: 'Space Mono', monospace;
        }


        .noise-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 50;
            opacity: 0.03;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }


        .scanlines {
            position: relative;
        }
        .scanlines::before {
            content: " ";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 10;
            background-size: 100% 4px, 3px 100%;
            pointer-events: none;
        }


        .blink {
            animation: blinker 1s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
        }
        @keyframes blinker {
            0% { opacity: 1; }
            49% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 0; }
        }


        .reveal-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-up.is-visible {
            opacity: 1;
            transform: translateY(0);
        }


        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #000;
            border-left: 1px solid var(--border-color);
        }
        ::-webkit-scrollbar-thumb {
            background: #333;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: var(--brand-color);
        }


        .scramble-link {
            transition: text-shadow 0.3s ease;
        }
        .scramble-link.is-scrambling {
            color: var(--brand-color);
            text-shadow: 0 0 8px rgba(217, 119, 54, 0.4);
        }
    </style>
</head>
<body class="w-full h-full min-h-screen flex flex-col justify-end" vid="10">


    <div class="flex-grow flex items-center justify-center border-b border-[#1a1a1a] p-8 text-[#333] font-mono text-sm tracking-widest uppercase" vid="11">
        <p vid="12">[ SCROLL TO ACCESS TERMINAL // FOOTER BELOW ]</p>
    </div>


    <footer id="symbolon-footer" class="relative bg-black w-full overflow-hidden border-t border-[#1a1a1a]" vid="13">
        <div class="noise-overlay" vid="14"></div>


        <div class="w-full relative py-16 md:py-24 lg:py-32 flex justify-center items-center overflow-hidden border-b border-[#1a1a1a] scanlines" vid="15">
            <h1 class="reveal-up font-serif text-[clamp(4rem,14vw,20rem)] leading-none tracking-[0.15em] ml-[0.15em] text-[#e0e0e0] uppercase select-none relative z-20" vid="16">
                Symbolon
            </h1>

            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#1a1a1a] rounded-full blur-[100px] opacity-20 pointer-events-none" vid="17"></div>
        </div>



        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#1a1a1a] border-b border-[#1a1a1a]" vid="18">


            <div class="bg-black p-8 lg:p-12 reveal-up" style="transition-delay: 100ms;" vid="19">
                <h3 class="font-mono text-xs text-[#666] tracking-[0.3em] uppercase mb-8 flex justify-between" vid="20">
                    <span vid="21">IDX. ARCHIVE</span>
                    <span vid="22">[01]</span>
                </h3>
                <ul class="font-mono text-sm tracking-[0.15em] uppercase space-y-4" vid="23">
                    <li vid="24"><a href="#" class="scramble-link block cursor-pointer" vid="25">METHODOLOGY</a></li>
                    <li vid="26"><a href="#" class="scramble-link block cursor-pointer" vid="27">TRANSMIT</a></li>
                    <li vid="28"><a href="#" class="scramble-link block cursor-pointer" vid="29">ARCHIVE</a></li>
                    <li vid="30"><a href="#" class="scramble-link block cursor-pointer" vid="31">FRAMEWORK</a></li>
                    <li vid="32"><a href="#" class="scramble-link block cursor-pointer" vid="33">PEIRCEAN TRIAD</a></li>
                </ul>
            </div>


            <div class="bg-black p-8 lg:p-12 reveal-up" style="transition-delay: 250ms;" vid="34">
                <h3 class="font-mono text-xs text-[#666] tracking-[0.3em] uppercase mb-8 flex justify-between" vid="35">
                    <span vid="36">SYSTEMS</span>
                    <span vid="37">[02]</span>
                </h3>
                <ul class="font-mono text-sm tracking-[0.15em] uppercase space-y-4" vid="38">
                    <li vid="39"><a href="#" class="scramble-link block cursor-pointer" vid="40">OBSCURATION</a></li>
                    <li vid="41"><a href="#" class="scramble-link block cursor-pointer" vid="42">REVELATION</a></li>
                    <li vid="43"><a href="#" class="scramble-link block cursor-pointer" vid="44">INTERACTION</a></li>
                    <li vid="45"><a href="#" class="scramble-link block cursor-pointer" vid="46">SIGNAL</a></li>
                    <li vid="47"><a href="#" class="scramble-link block cursor-pointer" vid="48">PROTOCOL</a></li>
                </ul>
            </div>


            <div class="bg-black p-8 lg:p-12 reveal-up" style="transition-delay: 400ms;" vid="49">
                <h3 class="font-mono text-xs text-[#666] tracking-[0.3em] uppercase mb-8 flex justify-between" vid="50">
                    <span vid="51">TRANSMIT</span>
                    <span vid="52">[03]</span>
                </h3>
                <ul class="font-mono text-sm tracking-[0.15em] uppercase space-y-4" vid="53">
                    <li vid="54"><a href="#" class="scramble-link block cursor-pointer" vid="55">INITIATE CONTACT</a></li>
                    <li class="pt-4 border-t border-[#1a1a1a] text-[#555] text-xs" vid="56">
                        COORD: <span class="text-[#e0e0e0]" vid="57">45.42 // -75.69</span>
                    </li>
                    <li class="text-[#555] text-xs" vid="58">
                        CIPHER KEY: <span class="text-[#e0e0e0] scramble-onload" vid="59">A7X-99B</span>
                    </li>
                    <li class="text-[#555] text-xs" vid="60">
                        MSG: <span class="text-[#e0e0e0] scramble-onload" vid="61">ENCRYPTED_STREAM</span>
                    </li>
                </ul>
            </div>


            <div class="bg-black p-8 lg:p-12 reveal-up flex flex-col justify-between" style="transition-delay: 550ms;" vid="62">
                <div vid="63">
                    <h3 class="font-mono text-xs text-[#666] tracking-[0.3em] uppercase mb-8 flex justify-between" vid="64">
                        <span vid="65">STATUS FEED</span>
                        <span vid="66">[04]</span>
                    </h3>
                    <div class="font-mono text-xs tracking-widest text-[#888] space-y-2" vid="67">
                        <div class="flex justify-between border-b border-[#1a1a1a] pb-2" vid="68">
                            <span vid="69">V.CORE</span>
                            <span class="text-[#e0e0e0]" vid="70">3.1.04</span>
                        </div>
                        <div class="flex justify-between border-b border-[#1a1a1a] py-2" vid="71">
                            <span vid="72">NODE</span>
                            <span class="text-[#e0e0e0] scramble-onload" vid="73">SEC-PRIMARY</span>
                        </div>
                        <div class="flex justify-between pt-2" vid="74">
                            <span vid="75">SYNC</span>
                            <span id="live-time" class="text-[#d97736]" vid="76">00:00:00:00</span>
                        </div>
                    </div>
                </div>

                <div class="mt-12" vid="77">
                    <svg viewBox="0 0 100 20" class="w-full h-8 opacity-50" vid="78">
                        <path d="M0,10 L10,10 L15,2 L20,18 L25,10 L100,10" fill="none" stroke="#d97736" stroke-width="0.5" stroke-linejoin="round" class="live-line" vid="79"></path>
                    </svg>
                </div>
            </div>

        </div>


        <div class="w-full bg-black py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#888] uppercase z-20 relative reveal-up" style="transition-delay: 700ms;" vid="80">

            <div class="flex items-center space-x-4 mb-4 md:mb-0 w-full md:w-auto overflow-hidden text-ellipsis whitespace-nowrap" vid="81">
                <span class="text-[#d97736]" vid="82">SYS: ACTIVE</span>
                <span class="opacity-30" vid="83">//</span>
                <span class="hidden sm:inline" vid="84">LAT: 45.42 // LONG: -75.69</span>
                <span class="opacity-30 hidden sm:inline" vid="85">//</span>
                <span vid="86">ENCRYPTION: SECURE</span>
                <span class="opacity-30" vid="87">//</span>
                <span vid="88">TRGT: <span id="dynamic-target" vid="89">0.197, 0.932</span></span>
                <span class="text-[#d97736] blink ml-2 text-sm leading-none" vid="90">█</span>
            </div>

            <div class="flex items-center space-x-6" vid="91">
                <span vid="92">© 2024</span>
                <span class="text-[#e0e0e0]" vid="93">SYMBOLON IDENTITY ARCH.</span>
            </div>

        </div>
    </footer>

    <script vid="94">
        document.addEventListener('DOMContentLoaded', () => {


            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up').forEach(el => {
                observer.observe(el);
            });



            const scrambleChars = '!<>-_\/[]{}—=+*^?#_0123456789ABCDEF';

            class TextScrambler {
                constructor(element) {
                    this.element = element;
                    this.originalText = element.innerText;
                    this.interval = null;
                }

                start() {
                    let iteration = 0;
                    clearInterval(this.interval);
                    this.element.classList.add('is-scrambling');

                    this.interval = setInterval(() => {
                        this.element.innerText = this.originalText
                            .split('')
                            .map((letter, index) => {
                                if (letter === ' ') return ' ';
                                if (index < iteration) {
                                    return this.originalText[index];
                                }
                                return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                            })
                            .join('');

                        if (iteration >= this.originalText.length) {
                            clearInterval(this.interval);
                        }

                        iteration += 1 / 3;
                    }, 30);
                }

                reset() {
                    clearInterval(this.interval);
                    this.element.innerText = this.originalText;
                    this.element.classList.remove('is-scrambling');
                }
            }


            document.querySelectorAll('.scramble-link').forEach(link => {
                const scrambler = new TextScrambler(link);
                link.addEventListener('mouseenter', () => scrambler.start());
                link.addEventListener('mouseleave', () => scrambler.reset());
            });


            setTimeout(() => {
                document.querySelectorAll('.scramble-onload').forEach(el => {
                    const scrambler = new TextScrambler(el);
                    scrambler.start();
                });
            }, 1000);





            const timeEl = document.getElementById('live-time');
            if(timeEl) {
                setInterval(() => {
                    const d = new Date();
                    timeEl.innerText = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}:${String(Math.floor(d.getMilliseconds()/10)).padStart(2, '0')}`;
                }, 47);
            }


            const targetEl = document.getElementById('dynamic-target');
            if(targetEl) {
                setInterval(() => {
                    const r1 = (Math.random() * 0.999).toFixed(3);
                    const r2 = (Math.random() * 0.999).toFixed(3);
                    targetEl.innerText = `${r1}, ${r2}`;
                }, 3000);
            }


            const line = document.querySelector('.live-line');
            if(line) {
                let offset = 0;
                setInterval(() => {
                    offset -= 1;
                    line.style.strokeDasharray = `4 8`;
                    line.style.strokeDashoffset = offset;
                }, 50);
            }
        });
    </script>

</body></html>
```
