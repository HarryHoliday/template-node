import pino from 'pino';

const logger = pino({
  prettyPrint: { colorize: true, translateTime: 'SYS:standard' },
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  // crlf: false, // --crlf
  // errorLikeObjectKeys: ['err', 'error'], // --errorLikeObjectKeys
  // errorProps: '', // --errorProps
  // levelFirst: false, // --levelFirst
  // messageKey: 'msg', // --messageKey
  // timestampKey: 'time', // --timestampKey
  // translateTime: false, // --translateTime
  // search: 'foo == `bar`', // --search
  // ignore: 'pid,hostname', // --ignore
});

export default logger;
