import log4js from "log4js";

const dateFormat = '%d{[dd/MM/yyyy] [hh:mm:ss]} [%p] - %m';

log4js.configure({
    appenders: {
        fullLog: {
            type: 'file',
            filename: 'hw22/assets/logs/fullLog.log',
            layout: {
                type: 'pattern',
                pattern: dateFormat,
            }
        },
        console: {
            type: 'console',
            filename: 'hw22/assets/logs/fullLog.log',
            layout: {
                type: 'basic',
                pattern: dateFormat,
            }
        }
    },
    categories: { default: { appenders: ['fullLog', 'console'], level: 'debug' } }
});

export const logger = log4js.getLogger();
