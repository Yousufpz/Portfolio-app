<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let animationId: number;

onMounted(() => {
	const canvas = canvasRef.value;
	if (!canvas) return;

	const ctx = canvas.getContext('2d');
	if (!ctx) return;

	const resizeCanvas = () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};
	resizeCanvas();
	window.addEventListener('resize', resizeCanvas);

	// Characters to print
	const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZコンニチハアカサタナハマヤラワ";
	const charArr = chars.split("");

	const fontSize = 14;
	const columns = Math.floor(canvas.width / fontSize) + 1;
	const drops: number[] = Array(columns).fill(0).map(() => Math.floor(Math.random() * -50)); // stagger start positions

	const draw = () => {
		// Clear completely to keep background gradient visible
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = `${fontSize}px monospace`;

		for (let i = 0; i < drops.length; i++) {
			const currentY = drops[i];

			// Draw the head character (brighter purple)
			if (currentY >= 0) {
				const headText = charArr[Math.floor(Math.random() * charArr.length)];
				ctx.fillStyle = 'rgba(168, 85, 247, 0.45)'; // visible but soothing violet
				ctx.fillText(headText, i * fontSize, currentY * fontSize);
			}

			// Draw fading trail (8 preceding characters)
			for (let j = 1; j <= 8; j++) {
				const trailY = currentY - j;
				if (trailY >= 0) {
					const trailText = charArr[Math.floor(Math.random() * charArr.length)];
					const opacity = 0.22 * (1 - j / 8); // smooth fade
					ctx.fillStyle = `rgba(145, 75, 241, ${opacity})`;
					ctx.fillText(trailText, i * fontSize, trailY * fontSize);
				}
			}

			// Reset drop with a randomized delay if it goes off screen
			if (currentY * fontSize > canvas.height) {
				if (Math.random() > 0.98) {
					drops[i] = 0;
				}
			}
			drops[i]++;
		}
	};

	const animate = () => {
		draw();
		setTimeout(() => {
			animationId = requestAnimationFrame(animate);
		}, 45); // Calm, slow falling speed (approx. 22 FPS)
	};

	animate();

	onUnmounted(() => {
		window.removeEventListener('resize', resizeCanvas);
		cancelAnimationFrame(animationId);
	});
});
</script>

<template>
	<canvas ref="canvasRef" class="matrix-rain-canvas"></canvas>
</template>

<style scoped>
.matrix-rain-canvas {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: -1;
	pointer-events: none;
}
</style>
