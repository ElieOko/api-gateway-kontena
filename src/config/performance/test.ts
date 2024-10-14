import { performance } from 'perf_hooks';


// Mesurer le temps d'exécution
const start = performance.now();
// Votre code ici
const end = performance.now();
console.log(`Durée : ${end - start} ms`);

// Mesurer la mémoire utilisée
const heapUsed = process.memoryUsage().heapUsed / (1024 * 1024);
console.log(`Mémoire utilisée : ${heapUsed.toFixed(2)} MB`);