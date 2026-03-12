The code below contains a design. This design should be used to create a new app or be added to an existing one.

Look at the current open project to determine if a project exists. If no project is open, create a new Vite project then create this view in React after componentizing it.

If a project does exist, determine the framework being used and implement the design within that framework. Identify whether reusable components already exist that can be used to implement the design faithfully and if so use them, otherwise create new components. If other views already exist in the project, make sure to place the view in a sensible route and connect it to the other views.

Ensure the visual characteristics, layout, and interactions in the design are preserved with perfect fidelity.

Run the dev command so the user can see the app once finished.

```
<html vid="0"><head vid="1">
    <meta charset="UTF-8" vid="2">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" vid="3">
    <title vid="4">Arcane Preloader</title>
    <script src="https://cdn.tailwindcss.com/3.4.17" vid="5"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" vid="6">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" vid="7">
    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet" vid="8">
    <script vid="9">
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        mono: ['"Space Mono"', 'monospace'],
                    },
                    colors: {
                        amber: {
                            400: '#f2c083',
                            600: '#d97736',
                            800: '#ff5a00',
                        }
                    }
                }
            }
        }
    </script>
    <style vid="10">
        body {
            background-color: #000000;
            color: #f2c083;
            margin: 0;
            overflow: hidden;
            font-family: 'Space Mono', monospace;
        }

        .scanlines {
            background: linear-gradient(
                to bottom,
                rgba(255,255,255,0),
                rgba(255,255,255,0) 50%,
                rgba(0,0,0,0.2) 50%,
                rgba(0,0,0,0.2)
            );
            background-size: 100% 4px;
            pointer-events: none;
        }

        .vignette {
            background: radial-gradient(circle, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%);
            pointer-events: none;
        }

        .cursor {
            display: inline-block;
            width: 8px;
            height: 1.2em;
            background-color: #ff5a00;
            vertical-align: middle;
            margin-left: 4px;
            animation: blink 1s step-end infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        .glitch-text {
            text-shadow: 1px 0 2px rgba(255, 90, 0, 0.6);
        }
    </style>
</head>
<body class="w-screen h-screen" vid="11">


    <div id="preloader" class="fixed inset-0 z-50 flex flex-col justify-between p-6 transition-opacity duration-1000 ease-out bg-black" vid="12">


        <canvas id="plasma" class="absolute inset-0 z-0 pointer-events-none w-full h-full" vid="13"></canvas>


        <div class="absolute inset-0 z-0 scanlines opacity-30" vid="14"></div>
        <div class="absolute inset-0 z-0 vignette" vid="15"></div>


        <div class="relative z-10 flex justify-between items-start w-full text-[10px] tracking-[0.2em] uppercase mix-blend-screen" vid="16">
            <div class="opacity-40 select-none" vid="17">
                <span class="block" vid="18">NEXUS_LINK_ESTABLISHED</span>
                <span class="block mt-1" vid="19">NODE: 77.4.11</span>
            </div>
            <div id="counter" class="text-sm font-bold tracking-[0.3em] text-amber-600 glitch-text" vid="20">
                00%
            </div>
        </div>


        <div class="relative z-10 w-full flex flex-col justify-end" vid="21">

            <div id="terminal" class="w-full max-w-lg mb-6 text-[10px] sm:text-xs tracking-[0.15em] leading-relaxed uppercase opacity-80 mix-blend-screen" vid="22">

            </div>


            <div class="w-full h-[1px] bg-white/10 mt-2 relative overflow-hidden" vid="23">

                <div id="progress-bar" class="absolute top-0 left-0 h-full bg-amber-600 shadow-[0_0_10px_#ff5a00] w-0 transition-all duration-75 ease-linear" vid="24"></div>
            </div>
        </div>
    </div>


    <main id="main-content" class="w-full h-full flex flex-col items-center justify-center bg-[#050505] hidden opacity-0 transition-opacity duration-1000 ease-in text-amber-400/30" vid="25">
        <div class="w-24 h-24 border border-amber-800/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(217,119,54,0.1)]" vid="26">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-amber-600/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" vid="27">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1" d="M12 4v16m8-8H4m12.728-5.657L5.636 17.657m12.728 0L5.636 6.343" vid="28"></path>
            </svg>
        </div>
        <h1 class="text-xs tracking-[0.5em] uppercase mix-blend-screen" vid="29">System Ready</h1>
    </main>

    <script vid="30">

        const canvas = document.getElementById('plasma');
        const ctx = canvas.getContext('2d', { alpha: false });
        let w, h;
        const particles = [];


        const palette = [
            { r: 217, g: 119, b: 54 },
            { r: 242, g: 192, b: 131 },
            { r: 255, g: 90, b: 0 }
        ];

        function resizeCanvas() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;

            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, w, h);
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class PlasmaOrb {
            constructor() {
                this.x = w / 2 + (Math.random() - 0.5) * (w * 0.3);
                this.y = h / 2 + (Math.random() - 0.5) * (h * 0.3);
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.baseRadius = Math.random() * 250 + 150;
                this.radius = this.baseRadius;
                this.color = palette[Math.floor(Math.random() * palette.length)];
                this.angle = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.01 + Math.random() * 0.02;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.angle += this.pulseSpeed;
                this.radius = this.baseRadius + Math.sin(this.angle) * 40;


                const dx = (w / 2) - this.x;
                const dy = (h / 2) - this.y;
                this.vx += dx * 0.0001;
                this.vy += dy * 0.0001;


                this.vx *= 0.99;
                this.vy *= 0.99;


                if(Math.abs(this.vx) < 0.1) this.vx += (Math.random()-0.5)*0.1;
                if(Math.abs(this.vy) < 0.1) this.vy += (Math.random()-0.5)*0.1;
            }

            draw() {
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);


                gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.15)`);
                gradient.addColorStop(0.4, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.05)`);
                gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }


        for (let i = 0; i < 12; i++) {
            particles.push(new PlasmaOrb());
        }

        function animateCanvas() {

            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillRect(0, 0, w, h);


            ctx.globalCompositeOperation = 'lighter';

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();


        const sequence = [
            "// SYMBOLON OS v1.0.0",
            "OBSCURATION: ACTIVE",
            "REVELATION: PENDING",
            "FRAMEWORK: PEIRCEAN TRIAD",
            "SEMIOTICS: LOADED",
            "INITIALIZING CORE..."
        ];

        const terminalEl = document.getElementById('terminal');
        const counterEl = document.getElementById('counter');
        const barEl = document.getElementById('progress-bar');
        const preloaderEl = document.getElementById('preloader');
        const mainContentEl = document.getElementById('main-content');

        let currentLineIdx = 0;
        let currentCharIdx = 0;
        let currentLineDiv = null;
        let cursorSpan = document.createElement('span');
        cursorSpan.className = 'cursor';

        const DURATION = 4200;
        const startTime = Date.now();
        let isTyping = true;

        function typeSequence() {
            if (!isTyping) return;

            if (currentLineIdx < sequence.length) {
                if (!currentLineDiv) {
                    currentLineDiv = document.createElement('div');
                    currentLineDiv.className = 'mb-1 text-amber-400';
                    terminalEl.appendChild(currentLineDiv);
                    currentLineDiv.appendChild(cursorSpan);
                }

                if (currentCharIdx < sequence[currentLineIdx].length) {

                    const charNode = document.createTextNode(sequence[currentLineIdx].charAt(currentCharIdx));
                    currentLineDiv.insertBefore(charNode, cursorSpan);
                    currentCharIdx++;


                    setTimeout(typeSequence, 10 + Math.random() * 25);
                } else {

                    currentLineIdx++;
                    currentCharIdx = 0;
                    currentLineDiv = null;


                    setTimeout(typeSequence, 200 + Math.random() * 200);
                }
            } else {

                const finalDiv = document.createElement('div');
                finalDiv.className = 'mt-4 text-amber-800 font-bold';
                terminalEl.appendChild(finalDiv);
                finalDiv.appendChild(cursorSpan);
                isTyping = false;
            }
        }


        setTimeout(typeSequence, 300);

        function updateProgress() {
            const elapsed = Date.now() - startTime;
            let progress = (elapsed / DURATION) * 100;


            if (progress < 100) {

                if (progress > 30 && progress < 32) progress = 30;
                if (progress > 70 && progress < 75) progress = 70;
                if (progress > 85 && progress < 88) progress = 85;

                const displayProgress = Math.min(Math.max(progress, 0), 100);
                counterEl.textContent = Math.floor(displayProgress).toString().padStart(2, '0') + '%';
                barEl.style.width = displayProgress + '%';

                requestAnimationFrame(updateProgress);
            } else {

                counterEl.textContent = '100%';
                barEl.style.width = '100%';


                if (cursorSpan.parentNode) {
                    cursorSpan.parentNode.insertBefore(document.createTextNode("ENTER"), cursorSpan);
                    cursorSpan.remove();
                }

                initiateDismissal();
            }
        }

        updateProgress();

        function initiateDismissal() {

            setTimeout(() => {
                preloaderEl.classList.add('opacity-0');


                setTimeout(() => {
                    preloaderEl.style.display = 'none';
                    mainContentEl.classList.remove('hidden');


                    void mainContentEl.offsetWidth;
                    mainContentEl.classList.remove('opacity-0');


                    cancelAnimationFrame(animateCanvas);
                }, 1000);
            }, 600);
        }

    </script>

</body></html>
```
