import { getTypeOrmConfig } from '@config/typeorm';

export default {
  ...getTypeOrmConfig(),
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
