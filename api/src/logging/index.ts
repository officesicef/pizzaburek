import { createLogger, format, Logger, transports } from 'winston';

const { combine, timestamp, label, printf } = format;

const logFormat = printf(
  (info) => `[${info.level}] ${info.timestamp} [${info.label}]: ${info.message}`
);

const filename: string = module.filename.split('/').slice(-1).join('');

const logger: Logger = createLogger({
  level: 'info',
  format: combine(label({ label: filename }), timestamp(), logFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

export default logger;
