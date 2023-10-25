import * as Yup from 'yup';
import { IFeedbackCollector } from './FeedbackCollector';

export const FeedbackCollectorSchema = Yup.object<IFeedbackCollector>().shape({
  comment: Yup.string().max(100000, 'maxLength'),
  stars: Yup.number().required()
});
