import 'module-alias/register';

import app from '@/router';
import config from '@/config';
import logger from '@/logging';

app.listen(config.port, (): void => {
  logger.info(`API listening on port ${config.port}`);
});
