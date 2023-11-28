import * as Yup from 'yup';

import { IFeedbackCollector } from './FeedbackCollector';
import {
  FEEDBACK_COLLECTOR,
  FEEDBACK_COLLECTOR_MAX_LENGTH,
  FEEDBACK_COLLECTOR_STARS
} from './constants';

export const FeedbackCollectorSchema = Yup.object<IFeedbackCollector>().shape({
  [FEEDBACK_COLLECTOR]: Yup.string()
    .max(
      FEEDBACK_COLLECTOR_MAX_LENGTH,
      `Feedback can't be longer than ${FEEDBACK_COLLECTOR_MAX_LENGTH} characters`
    )
    .nullable(),
  [FEEDBACK_COLLECTOR_STARS]: Yup.number().required()
});
