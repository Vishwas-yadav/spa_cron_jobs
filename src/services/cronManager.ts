import { Service, Inject, Container } from 'typedi';
@Service()
export default class CronManagerService {
    constructor(
        @Inject('logger') private logger,
    ) { }
    public async manageCrons(): Promise<any> {
        try {
            console.log("inside cron manager");

            //call 1st cron function
            //call 2nd cron function
            //so on..
            await this.firstCron();
        } catch (error) {
            this.logger.error('error: %o', error);
            throw error;
        }
    }

    public async firstCron(): Promise<any> {
        try {
            //setup cron here..
            console.log("inside first cron..");
        } catch (error) {
            this.logger.error('error: %o', error);
            throw error;
        }
    }


}