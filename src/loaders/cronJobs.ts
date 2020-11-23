import { Service, Inject, Container } from 'typedi';
import { CronManagerService } from '../services/index';

export default async () => {
    console.log("CRON to be started here!");
    const CronManagerServiceInstance = Container.get(CronManagerService);
    await CronManagerServiceInstance.manageCrons();
}