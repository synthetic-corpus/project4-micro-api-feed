import {Router, Request, Response} from 'express';
import {FeedRouter} from './feed/routes/feed.router';


const router: Router = Router();

router.use('/feed', FeedRouter);


router.get('/healty', async (req: Request, res: Response) => {
  res.send(`V0 - feed API is up`);
});

export const IndexRouter: Router = router;
