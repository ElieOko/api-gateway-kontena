import winston from 'winston';
import 'winston-daily-rotate-file';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
    }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.DailyRotateFile({
      filename: './logs/%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      maxSize: '20m',
      maxFiles: '14d'
    }),
  ],
});

// Pour capturer les erreurs non gérées
process.on('uncaughtException', (err) => {
  logger.error(`Erreur non gérée : ${err.message}`);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error(`Promesse rejetée non gérée à ${promise}, raison: ${reason}`);
});
