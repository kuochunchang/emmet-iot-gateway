import { TopicModel } from '../../topic/topic-models';

export interface SubjectModel {
    id: string,
    name: string,
    topics?: TopicModel[]
}
