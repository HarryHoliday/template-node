import mongoose from 'mongoose';
import logger from '~lib/logger';
import '~lib/errorHandler';
import User, { IUser } from './model/user';

const MONGO_URI = process.env.T_MONGO_URI || '';

const boot = async () => {
  try {
    logger.debug(process.env);
    const result = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const user: IUser = new User({
      firstName: 'Test first name',
      lastName: 'Test last name',
      email: 'test@example.com',
    });

    await user.save();
    // logger.debug(result);
  } catch (error) {
    logger.debug('test');
    logger.error(error);
  }
};

boot();
